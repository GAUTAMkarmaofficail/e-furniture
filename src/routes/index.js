import { Router } from "express";
import aboutPage from "./aboutPage";
import mainPage from "./mainPage";
const router = Router();
const register = (app) => {
  app.use(router);
  router.use("/api", [mainPage,aboutPage]);
};

export default register;
