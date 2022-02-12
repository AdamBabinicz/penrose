import React from "react";
import Card from "./Card";
import icon from "../assets/11.png";
import super1 from "../assets/1.jpeg";
import rel2 from "../assets/6.jpg";

export default function Free() {
  return (
    <div className="free" id="model">
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Eony"
            title="Entropia"
            price="Ekspansja"
            tag="CMB"
            time="10^100"
          />
        </div>
        <div className="card2">
          <Card
            image={rel2}
            series="Ciemna energia"
            title="CCC"
            price="Big Bang"
            tag="Promieniowanie"
            time="Fotony"
          />
        </div>
      </div>
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="..." />
          </div>
          <h2 className="title">
            Sir Roger Penrose twierdzi, że nasz wszechświat przeszedł wiele
            Wielkich Wybuchów, a nadchodzi ich więcej.
          </h2>
          <p className="description">
            Naukowiec odkrył sześć „ciepłych” punktów na niebie (zwanych
            „punktami Hawkinga”), z których wszystkie są około ośmiokrotnie
            większe niż średnica Księżyca. Nieżyjący już profesor Stephen
            Hawking, którego nazwisko noszą, zaproponował, że czarne dziury
            „wyciekają” promieniowanie i ostatecznie wyparują. Ponieważ może to
            zająć więcej czasu niż wiek wszechświata, który obecnie
            zamieszkujemy (13,77 miliarda lat), wykrycie takich dziur jest
            bardzo mało prawdopodobne.
          </p>
        </div>
      </div>
    </div>
  );
}
