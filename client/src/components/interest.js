import React, { useState, useEffect, Component } from "react";
import interest from "../api/interest";
import jwt_decode from "jwt-decode";

export default function CreateInterest(props) {
  const [decoded, setDecoded] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    setDecoded(decoded);
  }, []);

  async function create() {
    const userId = decoded.userId;
    const eventId = props.eventId;
    const data = { userId, eventId };

    await interest.createInterest(data);
  }

  async function deleteInterest() {
    const userId = decoded.userId;
    const eventId = props.eventId;
    const data = { userId, eventId };

    await interest.deleteInterest(data);
  }

  return (
    <div class="flex flex-row gap-2">
      <button
        class="bg-cyan-600 text-white w-2/5 rounded-md p-2"
        type="button"
        onClick={create}
      >
        Je suis intéressé !
      </button>
      <button
        class="bg-cyan-600 text-white w-3/5 rounded-md p-2"
        type="button"
        onClick={deleteInterest}
      >
        Je ne suis plus intéressé !
      </button>
    </div>
  );
}
