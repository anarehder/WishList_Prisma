import { validateItemForReview, validateItemId, validateReviewId } from "@/middlewares/validate-item.middleware";
import { validateBody } from "@/middlewares/validation.middleware";
import { Router } from "express";
import { ReviewSchema } from "@/schemas/item-review.schema";
import { deleteReview, editItemReview, getItemsReviewById, getItemsReviews, insertItemReview } from "@/controllers/items-review.controllers";

const itemsReviewRouter = Router();

itemsReviewRouter.get("/itemsReview", getItemsReviews);
itemsReviewRouter.get("/itemsReview/get/:id", validateItemId, getItemsReviewById); //id filme
itemsReviewRouter.post("/itemsReview/create/:id", validateItemForReview, validateBody(ReviewSchema), insertItemReview); //id filme
itemsReviewRouter.put("/itemsReview/edit/:id", validateReviewId, validateBody(ReviewSchema), editItemReview); // id do review
itemsReviewRouter.delete("/itemsReview/delete/:id", validateReviewId, deleteReview); // id do review

export default itemsReviewRouter;