import { CreateItem } from "@/protocols";
import { deleteItemServices, editItemServices, getItemsServices, getNumberOfItemsServices, insertItemServices } from "@/services/items.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getItemssWithReview(req: Request, res: Response) {
    try {
        const movies = await getItemsServices();
        res.status(httpStatus.OK).send(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getNumberOfItems(req: Request, res: Response) {
    try {
        const number = await getNumberOfItemsServices();
        res.status(httpStatus.OK).send(number);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function insertItem(req: Request, res: Response) {
    const newMovie = req.body as CreateItem;
    try {
        await insertItemServices(newMovie);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function editItem(req: Request, res: Response) {
    const editedMovie = req.body as CreateItem;
    const { id } = req.params;
    const numId: number = Number(id);
    try {
        await editItemServices(editedMovie, numId);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteItem(req: Request, res: Response) {
    const { id } = req.params;
    const numId: number = Number(id);
    try {
        await deleteItemServices(numId);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}