import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header.js";
import Footer from "../components/footer";
import AddEvent from "../components/addEvent";
import EventUser from "../components/eventuser";
import EventInterests from "../components/eventinterests";
import EventParticipant from "../components/eventparticipants";
import jwt_decode from "jwt-decode";
import Modifier from "../components/Modifier";

export default function Oneprofile() {
  if (localStorage.getItem("token")) {
    var tok = localStorage.getItem("token");
    console.log(tok);
    var decoded = jwt_decode(tok);
    console.log(decoded);
    var id = decoded.userId;
    console.log(id);
  }

  const [user, getUser] = useState("");
  //let { _id } = useParams();

  function getProfilePicture() {
    if (user.picture) {
      return "http://localhost:8080" + user.picture;
    } else {
      return (
        "https://eu.ui-avatars.com/api/?background=random&name=" + user.username
      );
    }
  }

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:8080/users/" + id,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getUser(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    if (!user) return "Vous n'etes pas connecté.";
  }, []);
  if (localStorage.getItem("token")) {
    return (
      <div>
        <Header />
        <div class="mx-72">
          <AddEvent />
          <div class="flex flex-row justify-items-center mt-8">
            <div class="flex flex-col">
              <h1 class="display-center text-xl lg:text-2xl w-auto font-playfairsc">
                Mon Compte
              </h1>
              <div class=" display-flex md-full display-between h-full rows w-80 bg-gray-300 rounded-xl shadow-xl">
                <div class="md:flex">
                  <img
                    class="rounded-full h-48 w-48 flex items-center justify-center p-6"
                    src={getProfilePicture()}
                  />
                </div>
                <div class="p-6">
                  <p class="text-2xl mb-4 font-playfairsc text-gray-600">
                    {user.username}
                  </p>
                  <p class="text-md lg:text-xl font-oswald mb-4">{user.city}</p>
                  <p class="text-md lg:text-xl mb-4 font-oswald">
                    {user.birthdate}
                  </p>
                  <p class="text-md lg:text-xl font-oswald mb-4">
                    {user.email}
                  </p>
                  <p class="text-md">
                    {" "}
                    <button class="w-full">
                      <Modifier />
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <EventUser Id={id} />
          </div>
        </div>
        <div class="mx-72">
          <EventParticipant Id={id} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div class="flex-row justify-between mx-72 pb-24">
          <h1 class="display-center text-xl lg:text-2xl font-bold w-auto fs-10 mt-10">
            Tu n'es pas connecté, clique <a href="/">ici</a>
          </h1>
        </div>
        <Footer />
      </div>
    );
  }
}
