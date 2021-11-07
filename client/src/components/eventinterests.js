import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

export default function EventInterests(props) {
  const [users, getUsers] = useState([]);

  useEffect(() => {
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
      <h1 class="font-playfairsc text-xl">Ca m'intéresse</h1>
      <div class="flex flex-row gap-3 rounded-lg border-2 border-cyan-600 p-4">
        {users.interests?.map((interest) => {
          return (
            <div key={interest.id} class="flex flex-row gap-3">
              <img
                class="w-4/12 rounded-sm"
                src={"http://localhost:8080" + interest.event?.mainPicture}
                alt="évènement"
              />
              <div class="flex flex-col">
                <h1 class="font-oswald text-cyan-600 font-medium text-lg">
                  {interest.event?.name}
                </h1>
                <p class="font-playfair">
                  le
                  {" " +
                    DateTime.fromISO(interest.event?.date).toLocaleString(
                      DateTime.DATE_SHORT
                    )}
                </p>
                <p class="font-playfair">{interest.event?.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
