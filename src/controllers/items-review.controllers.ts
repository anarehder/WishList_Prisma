import { Review, EditReview } from "@/protocols";
import { deleteReviewServices, editItemsReviewServices, getItemsReviewByIdServices, getItemsReviewServices, insertItemsReviewServices } from "@/services/items-review.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getItemsReviews(req: Request, res: Response) {
  try {
      const reviews = await getItemsReviewServices();
      res.status(httpStatus.OK).send(reviews);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function getItemsReviewById(req: Request, res: Response) {
  const { id } = req.params;
  const numId: number = Number(id);
  try {
      const reviews = await getItemsReviewByIdServices(numId);
      res.status(httpStatus.OK).send(reviews);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function insertItemReview(req: Request, res: Response) {
  const { id } = req.params;
  const numId: number = Number(id);
  const newReview = req.body as Review;
  try {
      await insertItemsReviewServices(newReview, numId);
      res.sendStatus(httpStatus.CREATED);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function editItemReview(req: Request, res: Response) {
  const editedReview = req.body as EditReview;
  // id do review
  const { id } = req.params;
  const numId: number = Number(id);
  try {
      await editItemsReviewServices(editedReview, numId);
      res.sendStatus(httpStatus.ACCEPTED);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function deleteReview(req: Request, res: Response) {
  const { id } = req.params;
  const numId: number = Number(id);
  try {
      await deleteReviewServices(numId);
      res.sendStatus(httpStatus.ACCEPTED);
  } catch (err) {
      res.status(500).send(err.message);
  }
}
