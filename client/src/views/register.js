import React, { useState, useEffect } from "react";
import register from "../api/users";
import LogoBleu from "../components/LogoBleu.png";

export default function Registration({ data }) {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState(data);
  const [confirm, setConfirm] = useState({});

  async function registerUser(e) {
    e.preventDefault();
    setUser({ ...user, formData });

    const password = formData.password;
    const confirmpassword = formData.confirmpassword;

    if (password === confirmpassword) {
      await register
        .register(formData)
        .then((res) => {
          console.log("toto");
          const mess =
            "Votre compte a été crée, vous allez recevoir un email de confirmation d'inscription. Veuillez patienter, vous allez être redirigé";
          setTimeout(function () {
            // after 2 seconds
            document.location.pathname = "/";
          }, 3000);
          setConfirm({ ...confirm, mess });
        })
        .catch((err) => {
          console.log(err.response.data.error);
          const userExist = err.response.data.error;
          setConfirm({ ...confirm, userExist });
          return userExist;
        });
    }
  }

  useEffect(() => {
    setConfirm({ ...confirm, formData });
    const password = formData.password;
    const confirmpassword = formData.confirmpassword;
    //console.log(password);
    //console.log(confirmpassword);

    if (password === undefined || confirmpassword === undefined) {
      const message = "";
      setConfirm({ ...confirm, message });
      return message;
    } else if (password === confirmpassword) {
      const message = "";
      setConfirm({ ...confirm, message });
      return message;
    } else if (password != confirmpassword) {
      const message = "Les mots de passe ne correspondent pas";
      setConfirm({ ...confirm, message });
      //console.log(confirm);
      return message;
    }
  }, [formData]);

  return (
    <div class="h-screen flex justify-center flex-col items-center bg-gray-300 bg-opacity-70">
      <div class="bg-green-400 text-white text-center w-full ">
        {" "}
        {confirm.mess}{" "}
      </div>
      <div class="flex flex-col bg-white lg:w-1/4 rounded-lg text-center items-center shadow-md py-10">
        <a href="/" class=" mb-10">
          <img class="justify-center w-64" src={LogoBleu} alt="Home" />
        </a>

        <form
          onSubmit={registerUser}
          class="flex flex-col items-center gap-6 w-10/12"
        >
          <p class="text-red-600 text-xs w-full font-oswald text-base">
            {" "}
            {confirm.message}
          </p>
          <p class="text-red-600 text-xs w-full font-oswald text-base">
            {" "}
            {confirm.userExist}
          </p>
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            placeholder="Email"
            name="email"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 font-oswald"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 font-oswald"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, birthdate: e.target.value })
            }
            type="date"
            placeholder="Date de naissance"
            title="Date de naissance"
            name="birthdate"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 text-gray-400 font-oswald"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Mot de passe"
            name="password"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 font-oswald"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, confirmpassword: e.target.value })
            }
            type="password"
            placeholder="Confirmez le mot de passe"
            name="confirmpassword"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 font-oswald"
          />

          <input
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            type="text"
            placeholder="Ville"
            name="city"
            required
            class="border-2 border-cyan-600 rounded-md w-11/12 pl-3 font-oswald"
          />

          <button
            type="submit"
            class="bg-cyan-600 w-2/5 rounded-lg text-white text-center h-10 font-oswald text-lg"
          >
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}
