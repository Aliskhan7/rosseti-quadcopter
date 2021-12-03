import './style/main.scss'
import Menu from "./component/Menu/Menu";
import Slider from "./component/Slider/Slider";
import DronInfo from "./component/Dron/DronInfo";
import Slide1 from "./assets/img/dron.png";
import icon_1 from '../src/assets/img/arr.png'
import Slide2 from './assets/img/dron2.png'
import React from "react";
import Home from "./pages/Home";
import imgEd1 from '../src/assets/img/dronEd.png'



function App() {

    const data = [
        {
            id: 1,
            name: 'Альбатрос Notuzi',
            img: Slide1,
            icon: icon_1,
            type: 'Квадрокоптер (4 винта)',
            timeFly: 50,
            radius: 5,
            sustainability: 10,
            description: 'lorem ipsun'
        },
        {
            id: 2,
            name: 'Agro drone M5',
            img: Slide1,
            icon: icon_1,
            type: 'Квадрокоптер (6 винтов)',
            timeFly: 30,
            radius: 10,
            sustainability: 20,
            description: 'lorem ipsun'
        },
    ]

    const dataEd = [{
        id: 1,
        name: 'Введение в беспилотную авиатехнику',
        img: imgEd1,
    },
        {
            id: 2,
            name: 'Применение VR технологий в беспилотной авиации',
            img: imgEd1,
        }
    ]

  return (
    <div className="App">
      <div className="container">
          <Menu data={data} dataEd={dataEd}/>
      </div>
    </div>
  );
}

export default App;
