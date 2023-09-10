import { Fragment } from "react";
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function FindEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
