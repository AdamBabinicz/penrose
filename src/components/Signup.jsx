import React, { useState } from "react";
import signup from "../assets/22.png";
import Modal from "../components/Portal/Modal";

export default function Signup() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="signup" id="protoświadomość">
      <div className="container">
        <div className="content">
          <p className="sub-title">Steve Paulson - Skandal świadomości</p>
          <h2 className="title">
            „Ilekroć we Wszechświecie podejmowana jest decyzja, zachodzi element
            protoświadomości – mówił Penrose.
          </h2>
          <p className="description">
            Nie chodzi mi tu o mózg, lecz o obiekt umieszczony w superpozycji.
            Załóżmy, że to drobina pyłu znajdująca się w dwóch miejscach naraz.
            Za niewielki ułamek sekundy stanie się albo jednym, albo drugim.
            Którym? Na tym właśnie polega wybór. Czy dokonuje go Wszechświat,
            czy może drobina pyłu? Może to wolny wybór? Nie mam pojęcia”.
          </p>
          <button onClick={() => Toggle()}>Więcej</button>
          <Modal show={modal} close={Toggle} title="Skandal świadomości">
            <p>
              Teoria Penrose’a oferuje wyjaśnienie na głębszym poziomie.
              Wychodzi od założenia, że świadomość nie opiera się na żadnego
              rodzaju algorytmach czy obliczeniach oraz jest poza wszystkim tym,
              co są w stanie wytłumaczyć neuronauki, biologia i fizyka. „Musimy
              rewolucyjnie zmienić sposób, w jaki rozumiemy świat fizyczny, by
              móc wpisać w niego również świadomość – mówił mi Penrose w
              niedawnym wywiadzie. – Jeśli mamy się w ogóle trzymać fizyki,
              trzeba zmierzyć się z tą wielką niewiadomą, czyli lepiej zrozumieć
              mechanikę kwantową”.
            </p>
            <br />
            <p>
              <em>przekroj.pl/nauka/skandal-swiadomosci-steve-paulson</em>
            </p>
          </Modal>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
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
