import * as React from "react";
import {
  fetchUtils,
  Admin,
  Resource,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
  Login,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserCreate } from "./users";
import { EventList, EventCreate } from "./events";
import { CategoryCreate } from "./categories";
import authProvider from "./authProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  //options.headers.set("X-Total-Count", 100);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("http://localhost:8080", httpClient);
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      create={UserCreate}
      show={ShowGuesser}
    />
    <Resource
      name="events"
      list={ListGuesser}
      edit={EditGuesser}
      create={EventCreate}
      show={ShowGuesser}
    />
    <Resource
      name="pictures"
      list={ListGuesser}
      edit={EditGuesser}
      /* create={EventCreate} */
      show={ShowGuesser}
    />
    <Resource
      name="categories"
      list={ListGuesser}
      edit={EditGuesser}
      create={CategoryCreate}
      show={ShowGuesser}
    />
    <Resource
      name="participants"
      list={ListGuesser}
      edit={EditGuesser}
      /* create={EventCreate} */
      show={ShowGuesser}
    />
  </Admin>
);

export default App;
