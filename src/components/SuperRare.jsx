import React from "react";
import Card from "./Card";
import super1 from "../assets/18.png";
import super2 from "../assets/14.png";
import super3 from "../assets/13.png";
import super4 from "../assets/19.png";

export default function Superrare() {
  const data = [
    {
      image: super2,
      series: "Stephen Hawking",
      title: "Fizyk",
      price: "",
      tag: "1942 - 2018",
      time: "UK",
    },
    {
      image: super1,
      series: "Daniel An",
      title: "Matematyk",
      price: "",
      tag: "",
      time: "KR",
    },

    {
      image: super3,
      series: "Krzysztof Meissner",
      title: "Fizyk",
      price: "",
      tag: "ur. 1961",
      time: "PL",
    },
    {
      image: super4,
      series: "Paweł Nurowski",
      title: "Fizyk",
      price: "",
      tag: "ur. 1963",
      time: "PL",
    },
  ];

  return (
    <div className="super-rare" id="cykle">
      <div className="title-container">
        <h2 className="title">
          Penrose należy do krytyków teorii wieloświatów, inflacji
          kosmologicznej oraz superstrun.
        </h2>
        <p className="description">
          Penrose powiedział, że Punkty Hawkinga, czyli szczątki czarnych dziur,
          są dowodem teorii Konforemnej Kosmologii Cyklicznej, która sugeruje,
          że Wielki Wybuch oznacza jedynie koniec jednego Wszechświata i
          początek innego Wszechświata, znanego również jako Eon. Teoria ta jest
          bardzo kontrowersyjna, jednak Fizyk twierdzi, że „czarne dziury były
          kiedyś uważane za kontrowersyjne, ale teraz są częścią głównego nurtu
          nauki”.&nbsp;
          <a
            href="https://www.rp.pl/kosmos/art1775901-szukaja-innych-kosmosow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Więcej
          </a>
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
