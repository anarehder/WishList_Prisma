import { Router } from "express";
import itemsReviewRouter from "./items-review.routes";
import itemsRouter from "./items.routes";

const router = Router()

router.use(itemsRouter)
router.use(itemsReviewRouter)

export default router;