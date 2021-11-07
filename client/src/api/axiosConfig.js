// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:8080",
});

const token = localStorage.getItem("token");
if (token) {
  // Where you would set stuff like your 'Authorization' header, etc ...
  instance.defaults.headers.common["x-access-token"] = token;
}

export default instance;
