import axiosConfig from "./axiosConfig.js";

export async function questions (data) {
    await axiosConfig.post('/questions', { data })
}