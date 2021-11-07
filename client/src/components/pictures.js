import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllPictures() {
  const [pictures, getPictures] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:8080/pictures",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getPictures(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);

      });
  }, []);

  return (
    <div class="mx-72 flex flex-col gap-3">
      <h1 class="font-bold text-xl text-cyan-600 font-playfairsc">
        Ca s'est passé comme ça
      </h1>
      <div class=" mr-5 flex flex-row">
      {pictures?.map((picture) => {
        return (
          <div key={picture.id} class="mr-5 flex flex-row">
            <img
              class="h-40 rounded-sm"
              src={"http://localhost:8080" + picture.path}
              alt="évènement"
            />
          </div>
        );
      })}</div>

    </div>
  );
}
