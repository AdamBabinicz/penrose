import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/21.png";
import release2 from "../assets/5.jfif";
import Card from "./Card";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";

export default function Release() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Przełomowe odkrycie</h2>
          <p className="description">
            Takie punkty Hawkinga w promieniowaniu tła Penrose odkrył wraz ze
            swoimi pracownikami Danielem Anem z Nowego Jorku, prof. Krzysztofem
            Meissnerem z Uniwersytetu Warszawskiego oraz prof. Pawłem Nurowskim
            z Centrum Fizyki Teoretycznej PAN.&nbsp;
            <a
              href="https://pbn.nauka.gov.pl/core/#/publication/view/5eec91b8ad49b351dcc26a9c/e4406626-997c-4df2-8507-3989f4f22b58"
              target="_blank"
              rel="noopener noreferrer"
            >
              Więcej
            </a>
          </p>
          <p className="description">
            Naukowcy są przekonani, że standardowy opis Wielkiego Wybuchu nie
            jest w stanie racjonalnie wyjaśnić istnienia takich gorących
            punktów.
          </p>
          <p className="description">
            Całkiem możliwe, że istniejemy tylko w jednym z wielu następujących
            po sobie wszechświatów.
          </p>
          <a onClick={() => Toggle()} className="link">
            Czytaj <BsArrowRight />
          </a>
          <Modal
            show={modal}
            close={Toggle}
            title="Czy widzimy ślady czarnych dziur z poprzednich Wszechświatów?"
          >
            <p>
              Brytyjski fizyk Roger Penrose jest jednym z twórców hipotezy
              naukowej znanej jako conformal cyclic cosmology (kosmologia
              cykliczna). Zakłada ona, że Wszechświat stale przechodzi przez
              cykle rozpoczynające się Wielkim Wybuchem. Mimo że zdecydowana
              większość zawartości Wszechświata ulegałaby zniszczeniu podczas
              zapadania się na końcu cyklu, istnieją przesłanki, na podstawie
              których można wnioskować, iż promieniowanie elektromagnetyczne
              mogłoby przetrwać ten proces.
            </p>
            <br />
            <p>
              <em>
                astronet.pl/wszechswiat/czy-widzimy-slady-czarnych-dziur-z-poprzednich-wszechswiatow
              </em>
            </p>
          </Modal>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="OTW"
            title="Parkietaż Penrosa"
            price=""
            tag="Fale grawitacyjne"
            time="Czasoprzestrzeń"
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Zmierzch wszechświata</h2>
          <p className="description">
            Faktem jest to, że wszechświat w toku ewolucji się rozszerza. Zatem
            pod sam koniec powinien być ogromnych rozmiarów.
            <a
              href="https://spidersweb.pl/2021/10/koniec-wszechswiata-czarne-karly-wybuch-supernowe.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Więcej
            </a>
          </p>
          <p className="description">
            Z drugiej strony, jeżeli nie będzie w nim żadnych cząstek masywnych,
            nie będzie czasu, to będzie to stan bardzo podobny do stanu, w
            którym doszło do Wielkiego Wybuchu.
          </p>
          <p className="description">
            Być może jakaś nowa teoria, a być może kwantowa teoria grawitacji,
            będą w stanie wyjaśnić ten paradoks.
          </p>
          <a onClick={() => Toggle1()} className="link">
            Czytaj <BsArrowRight />
          </a>
          <Modal1 show={modal1} close={Toggle1} title="Oczekiwania i problemy">
            <p>
              Jest to teoria, która może zunifikować mechanikę kwantową (wraz z
              elektromagnetyzmem, oddziaływaniami silnymi i słabymi) z ogólną
              teorią względności opisującą oddziaływania grawitacyjne. Z teorią
              grawitacji kwantowej wiąże się zatem nadzieje, że będzie ona
              teorią unifikującą wszystkie znane oddziaływania (tzw. teoria
              wszystkiego). Teoria taka jest niezbędna do rozwiązania problemu
              dużych gęstości energii, czyli połączenia ogromnych mas z
              przestrzeniami o bardzo małych skalach, jak to miało miejsce
              podczas Wielkiego Wybuchu lub w czarnych dziurach.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Grawitacja_kwantowa</em>
            </p>
          </Modal1>
        </div>
      </div>
    </div>
  );
}
