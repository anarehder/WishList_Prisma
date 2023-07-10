import { NextFunction, Request, Response } from 'express';
import { alreadyExists } from '@/errors/already-exists';
import { notFoundError } from '@/errors/not-found-error';
import { badRequestError } from '@/errors/bad-request-error';
import { changeStatus, getItemByIdDB } from '@/repository/items.repository';
import { getItemReviewByIdDB } from '@/repository/items-review.repository';

export async function validateItemId(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const numId: number = Number(id);
        if (isNaN(numId)){
            throw badRequestError();
        }
        const item = await getItemByIdDB(numId);
        if (!item){
            throw notFoundError();
        }
        res.locals.item = item;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateReviewId(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const numId: number = Number(id);
        if (isNaN(numId)){
            throw badRequestError();
        }
        const review = await getItemReviewByIdDB(numId);
        if (!review){
            throw notFoundError();
        }
        res.locals.review = review;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateItemForReview(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const numId: number = Number(id);
        if (isNaN(numId)){
            throw badRequestError();
        }
        const item = await getItemByIdDB(numId);
        if (!item){
            throw notFoundError();
        }
        res.locals.item = item;
        if(item.status === true){
            throw alreadyExists();
        }
        if(item.status === false){
            await changeStatus(numId)
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}