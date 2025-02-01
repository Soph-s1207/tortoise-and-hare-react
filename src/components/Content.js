import React from "react";
import "./Content.css";

function Content() {
  return (
    <main>
        <img src="/tortoise_hare.webp" alt="Tortoise and Hare Racing" style={{ width: "300px", height: "auto", display: "block", margin: "20px auto" }} />
      <p>
        Once upon a time, a speedy hare constantly mocked a slow-moving tortoise.
        Tired of the teasing, the tortoise challenged the hare to a race. Overconfident
        in his abilities, the hare quickly took the lead but decided to rest mid-race.
        Meanwhile, the tortoise continued at a steady pace and, to everyone's surprise,
        won the race while the hare slept.
      </p>
    </main>
  );
}

export default Content;
