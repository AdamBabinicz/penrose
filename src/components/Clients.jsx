import React from "react";
import clients1 from "../assets/3.jfif";
import clients2 from "../assets/4.jfif";
import clients3 from "../assets/7.jpg";
import clients4 from "../assets/17.png";
import clients5 from "../assets/10.jpg";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];

  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="..." />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
