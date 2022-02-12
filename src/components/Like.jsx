import React from "react";
import eth1 from "../assets/7.jfif";
import eth2 from "../assets/21.jpg";

export default function Like() {
  return (
    <div className="like" id="teoria">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Twierdzenie o osobliwościach</h2>
          <p className="description">
            Twierdzenie o osobliwościach zostało udowodnione przy współpracy
            Rogera Penrose’a i Stephena Hawkinga w 1969. Wykazuje ono m.in.
            konieczność istnienia takiego punktu w czasoprzestrzeni, w którym
            krzywizna jest nieskończona oraz tego, iż Wszechświat się z niego
            począł.
          </p>
          <p className="description">
            Do odkrycia twierdzenia o istnieniu osobliwości przyczyniły się
            badania naukowców w latach 60. XX wieku, których tematem była
            osobliwość w ujęciu geometrycznym. Z powodu trudności ze
            zdefiniowaniem samej osobliwości przyjęto, że są to brzegi
            czasoprzestrzeni. W 1965 Penrose udowodnił, iż zapadanie
            grawitacyjne (bez względu na stopień jego symetryczności) prowadzi
            do osobliwości.
          </p>
          <p className="description">
            Wykorzystał to Hawking, który w tym samym roku dowiódł występowania
            osobliwości w dużej liczbie modeli kosmologicznych o ujemnej
            krzywiźnie grawitacyjnej. W niedługim czasie przebadał ze swoim
            współpracownikiem George'em Ellisem modele o jednorodnej
            przestrzeni. W tym czasie pojawiło się wiele nowych teorii na temat
            osobliwości, wśród których największe znaczenie ma praca Penrose’a i
            Hawkinga "Osobliwości w kolapsie grawitacyjnym i kosmologii" z 1970.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Penrose a Hawking</h2>
          <p className="description">
            Teoria Penrose'a gwarantuje, że pewien rodzaj geodezyjnej
            niekompletności pojawia się wewnątrz każdej czarnej dziury, gdy
            materia spełnia odpowiednie warunki energetycze.
          </p>
          <p className="description">
            Teoria osobliwości Hawkinga dotyczy całego Wszechświata i działa
            wstecz w czasie: w swojej oryginalnej formule gwarantuje, że
            osobliwość w chwili Wielkiego Wybuchu miała nieskończoną gęstość.
            Jednak w późniejszym czasie Hawking zrewidował swój pogląd
            stwierdzając w książce Krótka historia czasu: (...) w rzeczywistości
            nie było żadnej osobliwości w chwili powstawania wszechświata.
          </p>
          <p className="description">
            Teoria Penrose'a jest natomiast bardziej restrykcyjna – jest ważna
            tylko wtedy, gdy materia spełnia silniejszy warunek energetyczny,
            nazywany dominującym warunkiem energetycznym, co oznacza, że energia
            jest większa od ciśnienia.
          </p>
        </div>
      </div>
    </div>
  );
}
