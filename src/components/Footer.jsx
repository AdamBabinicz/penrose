import React from "react";
import logo from "../assets/1.svg";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const links = [
    {
      title: "Filmy",
      data: [
        <a
          href="https://www.youtube.com/watch?v=Cx3Mi587UnA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lamża
        </a>,
        <a
          href="https://www.youtube.com/watch?v=I70r_mrx7S8&t=6s"
          target="_blank"
          rel="noopener noreferrer"
        >
          CCC
        </a>,
        <a
          href="https://www.youtube.com/watch?v=4YYWUIxGdl4&t=416s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eony
        </a>,
      ],
    },
    {
      title: "Artykuły",
      data: [
        <a
          href="https://pl.wikipedia.org/wiki/Roger_Penrose"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>,
        <a
          href="https://www.umcs.pl/pl/aktualnosci,4622,nagroda-nobla-dla-rogera-penrose-a,94507.chtm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nobel
        </a>,
        <a
          href="https://www.uw.edu.pl/wp-content/uploads/2014/05/Penrose.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dyplom
        </a>,
      ],
    },
    {
      title: "Książki",
      data: [
        <a
          href="https://www.ceneo.pl/98875533?se=CuYfpJG_2kSzZsCvLjxHUssuYNmaiX-8&gclid=Cj0KCQiAr5iQBhCsARIsAPcwRONKkpkwe2F-jghd2zTf_Oprr9KYxUpfAs1N_RarWOUTIMxuFJQeM6kaAgKzEALw_wcB#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Droga do rzeczywistości.
        </a>,
        <a
          href="https://lubimyczytac.pl/autor/25070/roger-penrose"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nowy umysł cesarza
        </a>,
        <a
          href="https://www.taniaksiazka.pl/autor/roger-penrose?gclid=Cj0KCQiAr5iQBhCsARIsAPcwROPau9C6MA-taKI4YpLQNR7hRvLfAUIfBrvnGXV4S7sgf_ojhPUuzE0aApRBEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cykle czasu
        </a>,
      ],
    },
    {
      title: "Social",
      data: [
        <a
          href="https://twitter.com/penrose"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>,
        <a
          href="https://www.instagram.com/roger.penrose.ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>,
      ],
    },
  ];
  const socialLink = [
    <a
      href="https://www.facebook.com/groups/biblia.chrzescijanstwo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsFacebook />
    </a>,
    <a
      href="https://twitter.com/nobelprize/status/1313421617784123393"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsTwitter />
    </a>,
    <a
      href="https://www.youtube.com/watch?v=KtwvXIYh3J4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsYoutube />
    </a>,
  ];

  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="..." />
          </div>
          <p>Konformalna Kosmologia Cykliczna</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>Radom, 2022 - {new Date().getFullYear()}.</span>
        <span>Roger Penrose</span>
      </div>
    </footer>
  );
}
