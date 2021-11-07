import axiosConfig from "./axiosConfig.js";

const upload = {
  async uploadEventImage(data) {
    await axiosConfig.post("/upload", data);
  },
};

export default upload;
