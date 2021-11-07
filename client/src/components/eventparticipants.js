import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

export default function EventParticipants(props) {
  const [users, getUsers] = useState([]);

  useEffect(() => {
    /* var tok = localStorage.getItem('token');
var decoded = jwt_decode(tok);
var id = decoded.userId */

    var config = {
      method: "get",
      url: "http://localhost:8080/users/" + props.Id,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getUsers(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div class="flex flex-col w-full my-10">
      <h1 class="font-playfairsc text-xl">J'y participe</h1>
      <div class="flex flex-row gap-3 rounded-lg bg-gray-300 p-4">
        {users.participants?.map((participant) => {
          return (
            <div key={participant.id} class="flex flex-row gap-3">
              <img
                class="w-4/12 rounded-sm"
                src={"http://localhost:8080" + participant.event.mainPicture}
                alt="évènement"
              />
              <div class="flex flex-col">
                <h1 class="font-oswald text-cyan-600 font-medium text-lg">
                  {participant.event.name}
                </h1>
                <p class="font-playfair">
                  le
                  {" " +
                    DateTime.fromISO(participant.event.date).toLocaleString(
                      DateTime.DATE_SHORT
                    )}
                </p>
                <p class="font-playfair">{participant.event.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
