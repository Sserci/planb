import axiosConfig from "./axiosConfig.js";

const users = {
  async login(data) {
    await axiosConfig.post("/login", data).then((response) => {
      console.log(response);
      var token = JSON.stringify(response.data.token);
      token = token.replace(/^"(.*)"$/, "$1");
      localStorage.setItem("token", token);
    });
  },

  async register(data) {
    await axiosConfig.post("/register", data);
  },

  async update(data) {
    console.log(data);
    await axiosConfig.put("/user/update", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  },

  emailVerif() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    axiosConfig.get(
      "/emailverification?token=" + params.token + "&userId=" + params.userId
    );
    console.log(params.userId);
    setTimeout(function () {
      // after 2 seconds
      document.location.pathname = "/";
    }, 5000);
  },
};
export default users;
