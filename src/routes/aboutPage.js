import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const { AboutPageController } = controllers;
router.post("/saveAboutPage", AboutPageController.saveAboutPage);
router.get("/getAboutPage",AboutPageController.getAboutPage);
export default router;
