import React, { useState } from "react";
import home from "../assets/3.png";
import Modal from "../components/Portal/Modal";

export default function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Konformalna Kosmologia Cykliczna</p>
          <h1 className="title">sir Roger Penrose</h1>
          <p className="description">
            – brytyjski naukowiec: fizyk teoretyczny, matematyk, filozof nauki i
            jej popularyzator, noblista. Jego specjalności to teoria względności
            i grawitacji, w tym kwantowanie grawitacji i kosmologia teoretyczna,
            a także kwantowe fundamenty i geometria.
          </p>
          <button onClick={() => Toggle()}>Czytaj</button>
          <Modal show={modal} close={Toggle} title="Fizyka teoretyczna">
            <p>
              Autor twierdzenia o uwięzieniu dotyczącego ruchu po
              hiperpowierzchni w przestrzeni fazowej. W klasycznej teorii
              grawitacji sformułował też hipotezę kosmicznego cenzora o
              nieistnieniu nagich osobliwości czasoprzestrzennych. Zasłużył się
              głównie dzięki próbom podejścia do kwantowej grawitacji (jeszcze
              nieistniejącej w całości teorii) za pomocą teorii twistorów. Jego
              zdaniem niezbędna jest nowa teoria kwantów, uwzględniająca
              grawitację, eliminująca trudności interpretacyjne.
            </p>
            <p>
              Należy do krytyków teorii superstrun, interpretacji Everetta
              mechaniki kwantowej oraz inflacji kosmicznej. W 2006 stworzył
              Konformalną Kosmologię Cykliczną będącą modelem kosmologicznym w
              ramach ogólnej teorii względności.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Roger_Penrose</em>
            </p>
          </Modal>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="..." />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
