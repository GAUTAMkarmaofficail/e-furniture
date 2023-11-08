import models from "../models/index";
const { MainPage } = models;

export default {
  async saveMainPage(req) {
    const mainPageContents = req.contents;
    try {
      const createdContents = await MainPage.bulkCreate(mainPageContents, {
        fields: [
          "id",
          "title",
          "description",
          "price",
          "discountPercentage",
          "thumbnail",
          "images",
          "rating",
        ],
      });
      return createdContents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getMainPage() {
    try {
      const data = await MainPage.findAll();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
