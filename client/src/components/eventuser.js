import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

export default function EventUser(props) {
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
    console.log(props.Id);

    axios(config)
      .then(function (response) {
        console.log("toto");
        console.log(response);
        getUsers(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div class="ml-8">
      <h1 class="font-playfairsc text-xl lg:text-2xl">Mes évènements</h1>
      <div class="rounded-lg p-6 gap-4 overflow-y-auto">
        {users.events?.map((event) => {
          return (
            <div
              key={event.id}
              class="flex flex-row gap-3 border-bottom divide-dotted divide-y-2 divide-gray-600 divide-opacity-25 pb-2"
            >
              <img
                class="w-4/12 rounded-sm"
                src={"http://localhost:8080" + event.mainPicture}
                alt="évènement"
              />
              <div>
                <h1 class="font-oswald text-cyan-600 font-medium text-lg">
                  {event.name}
                </h1>
                <p class="font-playfair">
                  le
                  {" " +
                    DateTime.fromISO(event.date).toLocaleString(
                      DateTime.DATE_SHORT
                    )}
                </p>
                <p class="font-playfair">{event.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
