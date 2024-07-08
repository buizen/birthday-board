import { Router } from "express";
import imagesRouter from "./images.mjs"

const router = Router();

router.use(imagesRouter);

export default router;