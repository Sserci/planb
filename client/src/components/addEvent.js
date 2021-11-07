import React, { useState, useEffect, Component } from "react";
import LogoBleu from "../components/LogoBleu.png";
import events from "../api/events";
import categories from "../api/categories";
import Upload from "./upload";
import upload from "../api/upload";
import moment from "moment";

export default function CreateEvent({ data }) {
  const [formData, setFormData] = useState({});
  const [event, setEvent] = useState(data);
  const [confirm, setConfirm] = useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [allCategories, getCategories] = useState([]);

  const form = new FormData();

  async function formEvent(e) {
    e.preventDefault();
    console.log(formData);
    form.append("name", formData.name);
    if (selectedFile !== null) {
      form.append(
        "file",
        selectedFile.selectedFile,
        selectedFile.selectedFile.name
      );
      form.append(
        "mainPicture",
        "public/images/" + selectedFile.selectedFile.name
      );
    }

    form.append("date", formData.date);
    form.append("city", formData.city);
    form.append("description", formData.description);
    form.append("nbPlace", formData.nbPlace);
    form.append("link", formData.link);
    form.append("categoryId", formData.categoryId);

    console.log(form);
    setEvent({ ...event, form });
    const date = Date.parse(formData.date);
    const now = Date.now() - 24 * 60 * 60 * 1000;
    if (date < now) {
      console.log("impossible");
    } else {
      await events.createEvent(form).then(() => {
        const mess = "Votre évènement a bien été mis en ligne";
        setConfirm({ ...confirm, mess });
        setTimeout(function () {
          // after 2 seconds
          document.getElementById("confirmmessage").style.visibility = "hidden";
        }, 2000);
        setTimeout(function () {
          // after 2 seconds

          setShowModal(false);
          window.location.reload();
        }, 3000);
      });
    }
  }

  async function handleCheckBox() {
    if (document.getElementById("checkbox").checked === true) {
      await setFormData({ ...formData, private: true });
    } else await setFormData({ ...formData, private: false });
  }

  useEffect(() => {
    setConfirm({ ...confirm, formData });
    const date = Date.parse(formData.date);
    const now = Date.now() - 24 * 60 * 60 * 1000;
    categories.getCategories().then((result) => {
      console.log(JSON.stringify(result.data));
      getCategories(result.data);
      console.log(allCategories);
    });

    if (!localStorage.getItem("token")) {
      document.getElementById("createButton").style.display = "none";
    } else {
      document.getElementById("createButton").style.display = "initial";
    }

    if (date <= now) {
      const message =
        "La date de l'évènement ne peut être antérieure à la date du jour";
      setConfirm({ ...confirm, message });
      return message;
    } else {
      const message = "";
      setConfirm({ ...confirm, message });
      return message;
    }
  }, [formData]);

  /* async function onFileUpload() {
    // Create an object of formData
    const formDatas = new FormData();
    console.log(selectedFile);
    // Update the formData object
    formDatas.append("file", selectedFile, selectedFile.name);
    formDatas.append("eventId", 1);

    // Details of the uploaded file
    console.log(selectedFile.name);

    // Request made to the backend api
    // Send formData object
    upload.uploadEventImage(formDatas);
  } */

  console.log(formData.private);

  return (
    <>
      <button
        id="createButton"
        className="font-oswald w-full px-4 py-3 mb-1 mr-1 text-xl font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-cyan-600 active:bg-cyan-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crée ton évènement
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none gb-white-500 focus:outline-none">
            <div class="lg:w-7/12 h-4/6 bg-white rounded-lg shadow-lg  w-full h-hull">
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
                CRÉE TON ÉVENEMENT
              </h2>
              <p class="text-red-600 text-xs w-full text-center mb-2 font-oswald">
                {" "}
                {confirm.message}
              </p>
              <form
                onSubmit={formEvent}
                class="lg:flex justify-between mx-10 gap-4 font-oswald"
              >
                <div class="flex flex-col w-full">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="Titre de l'évènement"
                    name="titre"
                    required
                    class="border-2 border-cyan-600 rounded-md  mb-5 pl-3"
                  />
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    type="date"
                    placeholder="Date de l'évènement"
                    name="date"
                    required
                    class="border-2 border-cyan-600 rounded-md mb-5 pl-3 text-gray-400"
                  />

                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    type="text"
                    placeholder="Lieu de l'évènement"
                    name="lieu"
                    required
                    class="border-2 border-cyan-600 rounded-md mb-5 pl-3 "
                  />

                  <textarea
                    rows="8"
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    type="text"
                    placeholder="Description de l'évènement"
                    name="description"
                    required
                    class="border-2 border-cyan-600 rounded-md mb-5 pl-3"
                  />
                </div>
                <div class="flex flex-col justify-between">
                  <div class="flex flex-col w-full">
                    <div class="flex justify-between mb-4 border-2 border-cyan-600 rounded-md">
                      <label for="private" class="pl-3">
                        Evènemenent privé ?
                      </label>
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        defaultChecked={false}
                        name="private"
                        class="border-2 border-cyan-600 rounded-md mr-3 mt-1"
                        id="checkbox"
                      />
                    </div>

                    <select
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          categoryId: e.target.value,
                        })
                      }
                      type="text"
                      placeholder={"Catégorie"}
                      name="categorie"
                      required
                      class="border-2 border-cyan-600 rounded-md mb-5 pl-3"
                    >
                      <option>Selectionner une catégorie</option>
                      {allCategories.map((category) => {
                        console.log(category.name);
                        return (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>

                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, nbPlace: e.target.value })
                      }
                      type="number"
                      placeholder="Nombre de places"
                      name="places"
                      required
                      class="border-2 border-cyan-600 rounded-md mb-5 pl-3"
                    />

                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, link: e.target.value })
                      }
                      type="text"
                      placeholder="Lien"
                      name="lien"
                      class="border-2 border-cyan-600 rounded-md mb-5 pl-3"
                    />

                    <input
                      class="text-red-600"
                      required
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
                    class="bg-cyan-600 w-2/5 rounded-lg text-white text-center h-10 mb-5 ml-48 text-lg"
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
