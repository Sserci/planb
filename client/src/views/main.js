import Header from "../components/header.js";
import axios from "axios";
import Footer from "../components/footer";
import Search from "../components/search";
import AddEvent from "../components/addEvent";
import AllPictures from "../components/pictures";
import AllEvents from "./events.js";
import { useState, useEffect } from "react";

function Home() {
  const [events, setEvents] = useState([]);

  return (
    <div>
      <Header />
      <div class="mx-72">
        <Search setEvents={setEvents} />
        <AddEvent />
      </div>
      <div class="mx-72 w-full">
        <AllEvents events={events} />
      </div>

      <AllPictures />
      <Footer />
    </div>
  );
}

export default Home;
