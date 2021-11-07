import React from "react";
import { DateTime } from "luxon";

export default class AllEvents extends React.Component {
  render() {
    return (
      <div>
        <div class=" pt-5 w-9/12 pb-16">
          <h1 class="font-bold text-xl text-cyan-600 font-playfairsc">
            Tous les évènements
          </h1>
          <div class="flex flex-row  flex-wrap gap-3">
            {this.props.events?.map((events) => {
              console.log(events);
              return (
                <a
                  key={events.id}
                  href={`event/${events.id}`}
                  class="pt-5 font-oswald"
                >
                  <div class="flex flex-col " key={events.id}>
                    <p class="text-xl">{events.name}</p>
                    <div class="">
                      <p class="font-playfair">
                        le
                        {" " +
                          DateTime.fromISO(events.date).toLocaleString(
                            DateTime.DATE_SHORT
                          )}
                      </p>
                    </div>
                    <img
                      class="h-40 w-52 rounded-md"
                      src={"http://localhost:8080" + events.mainPicture}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
