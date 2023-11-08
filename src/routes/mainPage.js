import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const { MainPageController } = controllers;
router.post("/saveMainPage", MainPageController.saveMainPage);
router.get("/getMainPage", MainPageController.getMainPage);
export default router;
