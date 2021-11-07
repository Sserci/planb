import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import LogoBleu from "../components/LogoBleu.png";
import users from "../api/users";
import Upload from "./upload";
import upload from "../api/upload";
import moment from "moment";
import jwt_decode from "jwt-decode";

export default function UpdateProfile({ data }) {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState(data);
  const [confirm, setConfirm] = useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const form = new FormData();

  var name = "Serge";

  async function updateUser(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.username) {
      form.append("username", formData.username);
    }

    console.log(form);

    if (selectedFile !== null) {
      form.append(
        "file",
        selectedFile.selectedFile,
        selectedFile.selectedFile.name
      );
      form.append("picture", "public/images/" + selectedFile.selectedFile.name);
    }
    if (formData.password) {
      form.append("password", formData.password);
    }

    if (formData.city) {
      form.append("city", formData.city);
    }

    form.append("confirmpassword", formData.confirmpassword);

    if (formData.email) {
      form.append("email", formData.email);
    }

    console.log(form);

    /* await users.update(form).then(() => {
      /* const mess = "Votre profil a bien été mis à jour"; */
    // setConfirm({ ...confirm, mess });
    /* setTimeout(function () {
        // after 2 seconds
        document.getElementById("confirmmessage").style.visibility = "hidden";
      }, 2000);
      setTimeout(function () {
        // after 2 seconds */

    /*  setShowModal(false);
        window.location.reload();
      }, 3000); */

    const password = formData.password;
    const confirmpassword = formData.confirmpassword;

    await users
      .update(form)
      .then(() => {
        console.log("toto");
        const mess = "Votre profil a bien été mis à jour";
        setConfirm({ ...confirm, mess });
        setTimeout(function () {
          // after 2 seconds
          setShowModal(false);
          window.location.reload();
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

  useEffect(() => {
    setConfirm({ ...confirm, formData });
    const password = formData.password;
    const confirmpassword = formData.confirmpassword;
    console.log(password);
    console.log(confirmpassword);

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
      console.log(confirm);
      return message;
    }
  }, [formData]);

  function setName(e) {
    name = e.target.value;
  }

  console.log(name);
  return (
    <>
      <button
        className="w-3/5 font-oswald  py-3 mb-1 mr-1 text-xl font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none  w-full   bg-cyan-600 active:bg-cyan-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Modifie ton profil
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none gb-white-500 focus:outline-none">
            <div class="lg:w-5/12 h-5/6 bg-white rounded-lg shadow-lg  w-full h-hull">
              <div
                id="confirmmessage"
                class="bg-green-400 text-white text-center w-full "
              >
                {" "}
                {confirm.mess}{" "}
              </div>
              <div
                class="flex justify-end mr-5 mt-3"
                onClick={() => setShowModal(false)}
              >
                <svg
                  class="w-6 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h2 class="text-center mb-10 text-gray-700 font-playfairsc text-xl">
                MODIFIE TON PROFIL
              </h2>
              <p class="text-red-600 text-xs w-full text-center mb-2 font-oswald">
                {" "}
                {confirm.message}
              </p>
              <form
                onSubmit={updateUser}
                class="lg:flex justify-between mx-10 gap-4 font-oswald"
              >
                <div class="flex flex-col w-full gap-3">
                  <input
                    onChange={(e) =>
                      setFormData(
                        { ...formData, username: e.target.value },
                        setName
                      )
                    }
                    type="text"
                    placeholder="Nouveau nom"
                    value={name}
                    name="username"
                    class="border-2 border-cyan-600 rounded-md  mb-5 p-2"
                  />
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Nouvel email"
                    name="email"
                    class="border-2 border-cyan-600 rounded-md mb-5 p-2 text-gray-400"
                  />

                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    type="text"
                    placeholder="Nouvelle ville"
                    name="city"
                    class="border-2 border-cyan-600 rounded-md mb-5 p-2 "
                  />

                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    placeholder="Nouveau mot de passe"
                    name="password"
                    class="border-2 border-cyan-600 rounded-md mb-5 p-2"
                  />

                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmpassword: e.target.value,
                      })
                    }
                    type="password"
                    placeholder="Confirmation du mot de passe"
                    name="confirmpassword"
                    class="border-2 border-cyan-600 rounded-md mb-5 p-2"
                  />
                  <div class="flex flex-row gap-4">
                    <label>Nouvelle photo de profil</label>
                    <input
                      class="text-red-600"
                      type="file"
                      onChange={(e) =>
                        setSelectedFile({
                          selectedFile: e.target.files[0],
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    class="bg-cyan-600 rounded-lg text-white text-center text-lg mt-4 p-2"
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
