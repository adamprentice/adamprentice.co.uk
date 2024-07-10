import { Metadata } from "next";
import "./page.scss";

export const metadata: Metadata = {
  title: "Mentoring - Adam Prentice",
  description: "Details for how to access mentoring",
};

export default function Home() {
  return (
    <main className="">
      <h1>Mentoring</h1>
      <section className="adpList">
        <iframe
          src="https://adplist.org/widgets/booking?src=adam-prentice"
          title=""
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
