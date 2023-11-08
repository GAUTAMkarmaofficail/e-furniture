import repository from "../repositories";
import utility from "../services/utility";
const { aboutPageRepository } = repository;
export default {
  async saveAboutPage(req, res, next) {
    try {
      const result = await aboutPageRepository.saveAboutPage(req.body);
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "About page content save successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "About page content save failed",
        });
      }
    } catch (error) {}
  },
  async getAboutPage(req, res, next) {
    try {
      const result = await aboutPageRepository.getAboutPage();
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "About page content fetch successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "About page content fetch failed",
        });
      }
    } catch (error) {}
  },
};
