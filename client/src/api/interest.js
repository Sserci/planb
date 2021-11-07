import axiosConfig from "./axiosConfig.js";
/* import {useParams} from "react-router-dom"; */

const interest = {
  async createInterest(data) {
    await axiosConfig.post("/interests", data);
  },

  async getAll() {
    return await axiosConfig.get("/events");
  },

  async deleteInterest(data) {
    await axiosConfig.post("/delete/interest", data);
  },
};

export default interest;
