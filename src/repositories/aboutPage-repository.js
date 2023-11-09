import models from "../models/index";
const { AboutUsPage } = models;

export default {
  async saveAboutPage(req) {
    const aboutPageContents = req.contents;
    try {
      const createdContents = await AboutUsPage.bulkCreate(aboutPageContents, {
        fields: [
          "id",
          "title",
          "thumbnail",
          "description1",
          "description2",
          "subtitle",
          "points",
        ],
      });
      return createdContents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getAboutPage() {
    try {
      const data = await AboutUsPage.findAll();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
