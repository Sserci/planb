import React, { useEffect, useState } from "react";
import events from "../api/events";
import categories from "../api/categories";

function Search({ setEvents }) {
  const [search, getSearch] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [event, setEvent] = useState([]);
  const [allCategories, getCategories] = useState(null);

  useEffect(() => {
    events.getAll().then((result) => {
      console.log(JSON.stringify(result.data));
      setEvents(result.data);
      setEvent(result.data);
    });
    categories.getCategories().then((result) => {
      console.log(JSON.stringify(result.data));
      getCategories(result.data);
      console.log(allCategories);
    });
  }, []);

  useEffect(() => {
    research();
  }, [search, categorySelected]);

  function research() {
    console.log(search);
    console.log(categorySelected);
    const eventsfilter = event.filter((ev) => {
      if (search && categorySelected == "") {
        return ev.name.toUpperCase().match(search.toUpperCase());
      } else if (categorySelected && search == "") {
        console.log(categorySelected);
        return ev.Category.name.match(categorySelected);
      }
    });
    setEvents(eventsfilter);
    console.log(eventsfilter);
  }
  return (
    <div class="bg-gray-300 p-4 rounded-md mb-1">
        <form class="flex flex-row">
          <input
            class="rounded-md w-9/12 h-10 pl-2 font-oswald"
            type="text"
            placeholder="Recherche..."
            onChange={(e) => getSearch(e.target.value)}
          />
          <svg
            class="w-6 h-6 ml-2 mr-5 mt-2 text-cyan-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <select
            onChange={(e) => setCategorySelected(e.target.value)}
            type="text"
            placeholder={"Catégorie"}
            name="categorie"
            class="border-2 border-cyan-600 rounded-md font-oswald text-gray-700 w-40 pl-2 h-10"
          >
            <option classe="font-oswald">Catégorie</option>
            {allCategories?.map((category) => {
              return (
                <option
                  key={category.id}
                  value={category.name}
                  /* onChange={(e) => getSearchresult(e.target.value)} */
                >
                  {category.name}
                </option>
              );
            })}
          </select>
        </form>
    </div>
  );
}

export default Search;
