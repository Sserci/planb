import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/header.js";
import Footer from "../components/footer";
import AddEvent from "../components/addEvent";
import Upload from "../components/upload";
import jwt_decode from "jwt-decode";
import { DateTime } from "luxon";
import Interest from "../components/interest";

export default function OneEvent() {
  const [formData, setFormData] = useState({});
  const [event, getEvent] = useState("");
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  let { id } = useParams();

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:8080/event/" + id,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getEvent(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const postComment = async () => {
    setComment([...comment, formData]);

    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded);

    var data = {
      userId: decoded.userId,
      eventId: id,
      content: JSON.stringify(formData.content).replace(/^"(.*)"$/, "$1"),
    };

    var config = {
      method: "post",
      url: "http://localhost:8080/comments",
      headers: {
        "x-access-token": token,
      },
      data: data,
    };
    console.log(data);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
  };

  const postParticipant = async () => {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded);

    var data = { userId: decoded.userId, eventId: id };

    var config = {
      method: "post",
      url: "http://localhost:8080/participants",
      headers: {
        "x-access-token": token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showComments = () => {
    if (localStorage.getItem("token")) {
      return (
        <div
          id="comment"
          class="flex
      flex-col
      gap-2
      my-8"
        >
          <label>Qu'en-as-tu pensé ?</label>
          <input
            class="border-2 border-cyan-600 mx-72"
            type="text"
            id="comment"
            name="comment"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
          <button
            class="border-2 bg-cyan-600 text-white rounded-md p-2 mx-72"
            onClick={postComment}
          >
            {" "}
            Ajoute ton commentaire
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <div class="mx-72">
        <AddEvent />
      </div>
      <div class="mx-72 my-6 border-2 p-8 rounded-lg border-cyan-600 flex flex-row justify-between">
        <div class="flex flex-col gap-5">
          <h1 class="text-cyan-600 font-bold text-2xl font-oswald">
            {event.name}
          </h1>
          <p class="font-semibold text-gray-700 font-oswald">
            Evènement organisé par {event.Owner?.username}
          </p>
          <div class="flex flex-row gap-16">
            <div class="flex flex-row gap-2 text-gray-700">
              <p class="text-cyan-600 font-oswald font-semibold text-lg">
                Où ?{" "}
              </p>
              <div class="pt-0.5 font-playfair">{event.city}</div>
            </div>

            <div class="flex flex-row gap-2 text-gray-700">
              <p class="text-cyan-600 font-oswald font-semibold text-lg">
                Quand ?{" "}
              </p>
              <div class="font-playfair pt-0.5">
                {" " +
                  DateTime.fromISO(event.date).toLocaleString(
                    DateTime.DATE_HUGE
                  )}
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6 justify-between">
            <p class="text-gray-700 font-playfair">{event.description}</p>
            <div class="font-oswald flex flex-col gap-2">
              <button
                onClick={postParticipant}
                class="bg-cyan-600  text-white rounded-md p-2 w-full focus:ring-2 focus:ring-cyan-600"
              >
                J'y participe !
              </button>
            </div>
          </div>
        </div>

        <img
          src={"http://localhost:8080" + event.mainPicture}
          class="h-64 rounded-md ml-6"
        />
      </div>
      <h1 class="font-bold text-xl text-cyan-600 font-playfairsc mx-72 mt-10">
        COMMENTAIRES
      </h1>
      <div class="flex flex-col gap-3 mx-72 mt-3 divide-solid divide-y-2 divide-gray-300 divide-opacity-50">
        {event.comments?.map((comment) => {
          return (
            <div class="py-2" key={comment.id}>
              <h1 class="font-bold text-cyan-600 font-playfair text-md">
                {comment.user?.username}
              </h1>
              <p class="text-gray-700 font-oswald">{comment.content}</p>
            </div>
          );
        })}
      </div>
      <div class="flex flex-col gap-2 my-8 mx-72">
        <label class="font-bold text-xl text-cyan-600 font-playfairsc mt-10 mb-3">
          Qu'en-as-tu pensé ?
        </label>
        <div class="flex flex-row gap-3">
          <input
            class="border-2 border-cyan-600 rounded-md w-3/4"
            type="text"
            id="comment"
            name="comment"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
          <button
            class="border-2 bg-cyan-600 text-white rounded-md p-2 w-1/4 font-oswald"
            onClick={postComment}
          >
            {" "}
            Ajoute ton commentaire
          </button>
        </div>
      </div>
      <div class="mx-72 flex flex-col gap-3">
        <div class="flex flex-row justify-between mt-10">
          <h1 class="font-bold text-xl text-cyan-600 font-playfairsc">
            Souvenirs de l'évènement
          </h1>
          <>
            <button
              class="bg-cyan-600 rounded-md text-white p-2 font-oswald"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Ajoute ta photo
            </button>
            {showModal ? (
              <>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none gb-white-500 focus:outline-none">
                  <div class="w-4/12 h-3/5 bg-white shadow-xl rounded-lg p-4 flex flex-col">
                    <div
                      class="flex justify-end"
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
                    <div class="flex flex-col items-center">
                      <Upload eventId={event.id} />
                    </div>
                  </div>
                </div>
                <div className="fixed inset-0 bg-black opacity-25"></div>
              </>
            ) : null}
          </>
        </div>
        <div class="flex flex-row gap-3">
          {event.pictures?.map((pictures) => {
            return (
              <>
                <button>
                  <img
                    key={pictures.id}
                    class="rounded-md h-28"
                    src={"http://localhost:8080" + pictures.path}
                    alt="évènement"
                    onClick={() => setShowModal2(true)}
                  />
                </button>
                {showModal2 ? (
                  <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none gb-white-500 focus:outline-none">
                      <div class="bg-white shadow-xl rounded-lg p-4 flex flex-col">
                        <div
                          class="flex justify-end"
                          onClick={() => setShowModal2(false)}
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
                        <div class="flex flex-col items-center">
                          <img
                            key={pictures.id}
                            class="rounded-md w-10/12"
                            src={"http://localhost:8080" + pictures.path}
                            alt="évènement"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                  </>
                ) : null}
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
