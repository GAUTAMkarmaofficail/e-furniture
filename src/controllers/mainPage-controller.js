import repository from "../repositories";
import utility from "../services/utility";
const { mainPageRepository } = repository;
export default {
  async saveMainPage(req, res, next) {
    try {
      const result = await mainPageRepository.saveMainPage(req.body);
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "Main page content save successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "Main page content save failed",
        });
      }
    } catch (error) {}
  },
  async getMainPage(req, res, next) {
    try {
      const result = await mainPageRepository.getMainPage();
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "Main page content fetch successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "Main page content fetch failed",
        });
      }
    } catch (error) {}
  },
};
