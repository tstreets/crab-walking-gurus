"use client";

export default function TopicPage({ params: { topicName } }) {
  let topicInfo = (
    <section>
      <h4>Dude what are you even looking for?</h4>
    </section>
  );
  if (topicName === "history") {
    topicInfo = (
      <section>
        <h4>Late 80s</h4>
        <p>lorem</p>
      </section>
    );
  } else if (topicName === "techniques") {
    topicInfo = (
      <section>
        <h4>Lateral Improvements</h4>
        <p>lorem</p>
      </section>
    );
  }
  return (
    <main>
      <h1>Topic: {topicName}</h1>
      {topicInfo}
    </main>
  );
}
