import React, { useState, useEffect } from "react";
import login from "../api/users";

export default function LoginUser({ data }) {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState(data);
  const [confirm, setConfirm] = useState({});

  async function connection(e) {
    e.preventDefault();
    setUser({ ...user, formData });

    await login
      .login(formData)
      .then((res) => {
        console.log("toto");
        const mess = "Vous êtes maintenant connecté à Plan-B";
        setTimeout(function () {
          // after 2 seconds
          document.location.pathname = "/"
        }, 3000);
        setConfirm({ ...confirm, mess });
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        const loginError = err.response.data.error;
        console.log(loginError)
        setConfirm({ ...confirm, loginError });
        return loginError;
      });
  }

  /*     useEffect(() => {
    setConfirm({ ...confirm, formData });
    const password = formData.password;
    const email = formData.email;
    console.log(password);
    console.log(email);

    if (password === undefined) {
      const message = "Veuillez renseigner votre mot de passe";
      setConfirm({ ...confirm, message });
      return message;
    }  else if (email === undefined) {
      const message = "Veuillez renseigner votre email";
      setConfirm({ ...confirm, message });
      return message; 
    } else if (password != confirmpassword) {
      const message = "Les mots de passe ne correspondent pas";
      setConfirm({ ...confirm, message });
      //console.log(confirm);
      return message;
    }
  }, [formData]); */

  return (
    <div>
      <div class="bg-green-400 text-white text-center w-full rounded-md font-oswald">
        {" "}
        {confirm.mess}{" "}
      </div>

      <form 
      class= "flex flex-col gap-6"
      onSubmit={connection}>
      <p class="text-red-600 text-sm text-center font-oswald"> {confirm.loginError}</p>


        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          class="p-2 border-2 border-cyan-600 text-gray-700 rounded-md lg:w-80 sm:w-auto md:w-auto font-oswald"
          placeholder="Email"
          name="email"
          required
        />

        <input
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          class="p-2 border-2 border-cyan-600 text-gray-700 rounded-md lg:w-80 sm:w-auto md:w-auto font-oswald"
          placeholder="Enter Password"
          name="password"
          required
        />

        <p class="text-gray-700 text-sm text-center font-playfair">
          Tu n'as pas encore de compte ?{" "}
          <a class="font-semibold text-cyan-600 font-playfair" href="/register">
            Inscris-toi !
          </a>
        </p>

        <button type="submit" class="text-white bg-cyan-600 p-2 rounded-md font-oswald text-lg">
          Connexion
        </button>
      </form>
    </div>
  );
}
