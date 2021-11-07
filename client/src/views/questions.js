import React, { useState } from "react";
import questions from "../api/users";

export default function PostUser({ data }) {
  const [formData, setFormData] = useState({});
  const [question, setQuestion] = useState(data);

  async function postQuestion(e) {
    e.preventDefault();
    setQuestion({ ...question, formData });

    console.log();

    await questions(formData);
  }

  return (
    <div>
      <form onSubmit={postQuestion}>
        <label for="question">
          <b>Question</b>
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, question: e.target.value })}
          type="text"
          placeholder="Pose ta question"
          name="question"
          required
        />

        <button type="submit">Pose ta question</button>
      </form>
    </div>
  );
}
