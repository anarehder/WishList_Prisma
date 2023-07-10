import { deleteItem, editItem, getItemssWithReview, getNumberOfItems, insertItem } from "@/controllers/items.controllers";
import { validateItemId } from "@/middlewares/validate-item.middleware";
import { validateBody } from "@/middlewares/validation.middleware";
import { createItemSchema } from "@/schemas/item.schema";
import { Router } from "express";

const itemsRouter = Router();

itemsRouter.get("/items", getItemssWithReview);
itemsRouter.get("/items/number", getNumberOfItems);
itemsRouter.post("/items", validateBody(createItemSchema), insertItem);
itemsRouter.put("/items/:id", validateItemId, validateBody(createItemSchema), editItem);
itemsRouter.delete("/items/:id", validateItemId, deleteItem);

export default itemsRouter;