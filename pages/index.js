import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import fs from "fs/promises";
import path from "path";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  if (data.events.lenght === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { events: data.events },
  };
}

export default HomePage;
