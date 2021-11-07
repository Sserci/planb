import axiosConfig from "./axiosConfig.js";

const categories = {
  async getCategories() {
    return await axiosConfig.get("/categories");
  },
};

export default categories;
