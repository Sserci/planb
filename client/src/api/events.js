import axiosConfig from "./axiosConfig.js";
/* import {useParams} from "react-router-dom"; */

const events = {
  async createEvent(data) {
    await axiosConfig.post("/events", data);
  },

  async getAll() {
    return await axiosConfig.get("/events");
  },
};

export default events;
