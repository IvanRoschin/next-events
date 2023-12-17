import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-util";

function AllEventsPage(props) {
  const router = useRouter();

  const events = props.events;

  function FindEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        ></meta>
      </Head>
      <EventsSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
