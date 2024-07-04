import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './planirovka.scss';
import r2_117 from './images/planirovka/2r/117,22.png';
import r3_144 from './images/planirovka/3r/144,09.png';
import r3_1505 from './images/planirovka/3r/150,59.png';
import r3_159 from './images/planirovka/3r/159,75.png';
import r3_1616 from './images/planirovka/3r/161,6.png';
import r3_1619 from './images/planirovka/3r/161,9.png';
import r3_162 from './images/planirovka/3r/162,0.png';
import r4_167 from './images/planirovka/4r/167,04.png';
import r4_171 from './images/planirovka/4r/171,3.png';
import r4_187 from './images/planirovka/4r/187,7.png';
import { List, XCircle, XCircleFill } from "react-bootstrap-icons";

const Planirovka = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const flatImages = {
    2.1: r2_117,
    3.1: r3_144,
    3.2: r3_1505,
    3.3: r3_159,
    3.4: r3_1616,
    3.5: r3_1619,
    3.6: r3_162,
    4.1: r4_167,
    4.2: r4_171,
    4.3: r4_187,
  };

  const ShowFlatButtons = () => {
    if (selectedRoom === 2) {
      return (
        <div className="flats-buttons">
          <Button onClick={() => setSelectedFlat(2.1)}>117,22м</Button>
        </div>
      );
    } else if (selectedRoom === 3) {
      return (
        <div className="flats-buttons">
          <Button onClick={() => setSelectedFlat(3.1)}>144,09м</Button>
          <Button onClick={() => setSelectedFlat(3.2)}>150,59м</Button>
          <Button onClick={() => setSelectedFlat(3.3)}>159,75м</Button>
          <Button onClick={() => setSelectedFlat(3.4)}>161,6м</Button>
          <Button onClick={() => setSelectedFlat(3.5)}>161,9м</Button>
          <Button onClick={() => setSelectedFlat(3.6)}>162,0м</Button>
        </div>
      );
    } else if (selectedRoom === 4) {
      return (
        <div className="flats-buttons">
          <Button onClick={() => setSelectedFlat(4.1)}>167,04м</Button>
          <Button onClick={() => setSelectedFlat(4.2)}>171,3м</Button>
          <Button onClick={() => setSelectedFlat(4.3)}>187,7м</Button>
        </div>
      );
    }
    return null;
  };
  const [showblock, setShowBlock] = useState(false)
  const showPlans = () =>{
    let block = document.querySelector('.planirovka')
    block.classList.toggle('showblock')
    setShowBlock(!showblock)
  }

  return (
    <div className="planirovka_cont">
        <button className="plans_button" onClick={showPlans}> Планировки комнат</button>
    <div className="planirovka">
        <XCircleFill className="close_plans" onClick={showPlans}/>
      <p className="planirovka_tittle">Планировка квартир</p>
      <div className="planirovka_main_container">
        <div className="left_img">
          {selectedFlat && <img src={flatImages[selectedFlat]} alt="Планировка" />}
        </div>
        <div className="layout">
        <div className="right_menu">
          <p className="planirovka_menu_tittle">Выберите планировку:</p>
          <div className="planirovka_menu">
            <div className="rooms">
              <Button onClick={() => setSelectedRoom(2)}>2-комн</Button>
              <Button onClick={() => setSelectedRoom(3)}>3-комн</Button>
              <Button onClick={() => setSelectedRoom(4)}>4-комн</Button>
            </div>
            <div className="flats">
              <ShowFlatButtons />
            </div>
          </div>
          <div className="">
                <button className="plan_button_submit">Отправить заявку</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Planirovka;
