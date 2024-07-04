import './App.scss';
import { Instagram, Facebook, GeoAltFill, CalendarDateFill, Calendar2, PhoneFill, TelephoneForwardFill, TelephoneForward, FilePdfFill, FiletypePdf, MenuButtonFill, List } from 'react-bootstrap-icons';
import award from './images/advantages/award.png'
import cctb from './images/advantages/cctv.png'
import footbal from './images/advantages/football.png'
import park from './images/advantages/park.png'
import parking from './images/advantages/parking.png'
import windows from './images/advantages/windows.png'
import re_expo from './images/re-expo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFadeExample from './topCarousel';
import AdvCarousel from './advCarousel';
import AreaCarousel from './areaCarouse';
import LocationMap from './Gismap';
import { useEffect, useState } from 'react';

var DG = require('2gis-maps');


function App() {

  const [mobMenu, setmobMenu] = useState(false)

  const MobMenuState = ()=>{
    const mobMenuButtonList = document.querySelector('.burger')
    const mobMenuBox = document.querySelector('.mob_menu_box')
    mobMenuButtonList.classList.toggle('active')
    mobMenuBox.classList.toggle('active_menu')


    setmobMenu(!mobMenu)
    console.log(`clicked`);
  }

  useEffect(()=>{
    var map = DG.map('map', {
      'center': [51.1379538, 71.4342074],
      'zoom': 18
      
  });
  var royalmap = DG.map('royalmap', {
    'center': [51.0950535, 71.4152394],
    'zoom': 16
    
});
  DG.marker([51.0950535, 71.4152394]).addTo(royalmap)
  DG.marker([51.0950535, 71.4152394]).addTo(map)

  },[])

    return(
      <div className='App'>
        <div className='mob_menu_box'>
          <ul className='mob_menu_list'>
                <li>О комплексе</li>
                <li>Преимущества</li>
                <li>Планировки</li>
                <li>Расположение</li>
                <li>Галерея</li>
                <li>Отдел продаж</li>
          </ul>
        </div>
        <div className='header'>
        <div className='header_left'>
        <div className='header_left_icons'>
            <Instagram className='top_icon' color="white" />
            <Facebook className='top_icon' color="white"/>
        </div>
        <div className='header_left_menu'>
          <button className='burger' onClick={MobMenuState}></button>
          {/* <List onClick={MobMenuState} className='mobile_list burger'/> */}
            <ul>
                <li>О комплексе</li>
                <li>Преимущества</li>
                <li>Планировки</li>
            </ul>
        </div>
        </div>
        <div className='header_middle'>
        <svg className='middlelogo' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          viewBox="0 0 32.81 27.34"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsXodm="http://www.corel.com/coreldraw/odm/2003">
          <defs>
            <style type="text/css">
              {`
                .fil0 {fill:#1C2949}
                .fil2 {fill:#C7A381}
                .fil1 {fill:#C7A381;fill-rule:nonzero}
              `}
            </style>
          </defs>
          <g id="Слой_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <rect className="fil0" width="32.81" height="27.34" />
            <g id="_2551608911840">
              <path className="fil1" d="M4.66 13.52c0.27,0 0.49,0.06 0.65,0.17 0.2,0.13 0.3,0.33 0.3,0.59 0,0.18 -0.05,0.35 -0.16,0.49 -0.12,0.16 -0.28,0.25 -0.5,0.27 0.16,0.05 0.29,0.17 0.41,0.35l0 0 0 0.01 0.02 0.01c0.01,0.02 0.02,0.04 0.03,0.06 0.03,0.05 0.07,0.1 0.1,0.15 0.11,0.16 0.19,0.28 0.25,0.36 0.09,0.11 0.17,0.19 0.24,0.23 0.07,0.05 0.16,0.07 0.26,0.07l0 0.04 -0.39 0c-0.47,0 -0.78,-0.14 -0.94,-0.41 -0.04,-0.08 -0.1,-0.2 -0.18,-0.36 -0.03,-0.06 -0.06,-0.12 -0.09,-0.2l-0.02 -0.04 -0.02 -0.03c-0.01,-0.03 -0.02,-0.05 -0.02,-0.06 -0.08,-0.16 -0.17,-0.25 -0.28,-0.27l0 -0.04 0.13 0c0.27,0 0.44,-0.15 0.5,-0.46 0.01,-0.03 0.01,-0.06 0.01,-0.08 0.01,-0.04 0.01,-0.08 0.01,-0.11 -0.02,-0.37 -0.18,-0.56 -0.47,-0.56 -0.05,-0.01 -0.1,-0.01 -0.18,0l-0.13 0 0 2.33c0,0.07 0.03,0.13 0.08,0.18 0.05,0.05 0.11,0.07 0.18,0.07l0.05 0 0 0.04 -1.22 0 0 -0.04 0.05 0c0.07,0 0.13,-0.02 0.18,-0.07 0.05,-0.05 0.08,-0.11 0.08,-0.18l0 -2.22c0,-0.07 -0.03,-0.13 -0.08,-0.18 -0.05,-0.05 -0.11,-0.07 -0.18,-0.07l-0.05 0 0 -0.04 1.38 0z" />
              <path className="fil1" d="M8.42 15.86c0.16,-0.23 0.24,-0.54 0.24,-0.94 0,-0.4 -0.08,-0.71 -0.24,-0.94 -0.17,-0.23 -0.39,-0.35 -0.68,-0.35 -0.28,0 -0.5,0.12 -0.67,0.35 -0.16,0.23 -0.24,0.54 -0.24,0.94 0,0.4 0.08,0.71 0.24,0.94 0.17,0.23 0.39,0.35 0.67,0.35 0.29,0 0.51,-0.12 0.68,-0.35zm0.47 -2c0.29,0.26 0.43,0.61 0.43,1.06 0,0.45 -0.14,0.8 -0.43,1.07 -0.28,0.26 -0.66,0.39 -1.15,0.39 -0.48,0 -0.86,-0.13 -1.15,-0.39 -0.28,-0.27 -0.42,-0.62 -0.42,-1.07 0,-0.45 0.14,-0.8 0.42,-1.06 0.29,-0.26 0.67,-0.4 1.15,-0.4 0.49,0 0.87,0.14 1.15,0.4z" />
              <path className="fil1" d="M12.28 13.52l0 0.04 -0.06 0c-0.16,0 -0.29,0.08 -0.4,0.23l-0.79 1.26 0 0.98c0,0.07 0.03,0.13 0.08,0.18 0.05,0.05 0.11,0.07 0.18,0.07l0.05 0 0 0.04 -1.22 0 0 -0.04 0.06 0c0.07,0 0.12,-0.02 0.17,-0.07 0.05,-0.05 0.08,-0.11 0.08,-0.18l0 -0.98 -0.76 -1.26c-0.1,-0.15 -0.23,-0.23 -0.4,-0.23l-0.05 0 0 -0.04 1.32 0 0 0.04 -0.05 0c-0.06,0 -0.11,0.03 -0.14,0.08 -0.03,0.06 -0.03,0.11 0,0.17l0.57 1.04 0.6 -1.04c0.03,-0.06 0.02,-0.11 -0.01,-0.17 -0.03,-0.05 -0.08,-0.08 -0.14,-0.08l-0.04 0 0 -0.04 0.95 0z" />
              <path className="fil1" d="M13.35 15.37l-0.38 -0.98 -0.42 0.98 0.8 0zm0.98 0.68c0.08,0.16 0.2,0.23 0.34,0.23l0.04 0 0 0.04 -1.28 0 0 -0.04 0.04 0c0.06,0 0.1,-0.02 0.14,-0.06 0.03,-0.05 0.04,-0.11 0.01,-0.19l-0.2 -0.49 -0.93 0 -0.21 0.49c-0.03,0.08 -0.03,0.14 0.01,0.19 0.04,0.04 0.09,0.06 0.14,0.06l0.04 0 0 0.04 -0.86 0 0 -0.04 0.04 0c0.14,0 0.25,-0.07 0.33,-0.22l0.93 -2.1c0,-0.01 0.01,-0.02 0.01,-0.03 0.01,-0.02 0.02,-0.04 0.03,-0.06 0.02,-0.05 0.05,-0.1 0.06,-0.15 0.06,-0.14 0.09,-0.23 0.1,-0.28l0.03 0 1.19 2.61z" />
              <path className="fil1" d="M16.83 16.32l-2.07 0 0 -0.04 0.05 0c0.07,0 0.13,-0.02 0.18,-0.07 0.05,-0.05 0.07,-0.11 0.07,-0.18l0 -2.22c0,-0.07 -0.02,-0.13 -0.07,-0.18 -0.05,-0.05 -0.11,-0.07 -0.18,-0.07l-0.05 0 0 -0.04 1.21 0 0 0.04 -0.05 0c-0.07,0 -0.13,0.02 -0.18,0.07 -0.05,0.05 -0.08,0.11 -0.08,0.18l0 2.34 0.53 0c0.39,0 0.65,-0.21 0.78,-0.64l0.04 0 -0.18 0.81z" />
              <path className="fil1" d="M20.3 16.32l-2.08 0 0 -0.04 0.05 0c0.07,0 0.13,-0.02 0.18,-0.07 0.05,-0.05 0.08,-0.11 0.08,-0.18l0 -2.23c0,-0.07 -0.03,-0.12 -0.08,-0.17 -0.05,-0.05 -0.11,-0.07 -0.18,-0.07l-0.05 0 0 -0.04 1.54 0c0.08,0 0.17,-0.01 0.27,-0.02 0.1,-0.02 0.17,-0.04 0.21,-0.05l0 0.7 -0.04 -0.01 0 -0.04c0,-0.12 -0.04,-0.22 -0.11,-0.29 -0.07,-0.07 -0.17,-0.11 -0.29,-0.12l-0.67 0 0 1.17 0.53 0c0.1,-0.01 0.18,-0.04 0.24,-0.1 0.07,-0.07 0.1,-0.15 0.1,-0.25l0 -0.03 0.04 0 0 0.92 -0.04 0 0 -0.03c0,-0.1 -0.03,-0.18 -0.09,-0.24 -0.07,-0.07 -0.15,-0.1 -0.24,-0.1l-0.54 0 0 1.12 0.53 0c0.38,0 0.64,-0.21 0.78,-0.64l0.04 0 -0.18 0.81z" />
              <path className="fil1" d="M23.61 16.32l-1.37 0 0 -0.04 0.05 0c0.06,0 0.1,-0.02 0.14,-0.08 0.03,-0.05 0.03,-0.11 0,-0.16l-0.56 -0.87 -0.59 0.86c-0.03,0.06 -0.03,0.11 0.01,0.17 0.03,0.06 0.08,0.08 0.13,0.08l0.05 0 0 0.04 -0.99 0 0 -0.04 0.06 0c0.15,0 0.28,-0.07 0.4,-0.22l0.79 -1.12 -0.75 -1.14c-0.1,-0.16 -0.24,-0.24 -0.4,-0.24l-0.06 0 0 -0.04 1.37 0 0 0.04 -0.06 0c-0.05,0 -0.1,0.03 -0.13,0.08 -0.03,0.06 -0.04,0.11 -0.01,0.16l0.5 0.78 0.5 -0.77c0.03,-0.05 0.03,-0.11 -0.01,-0.17 -0.03,-0.05 -0.08,-0.08 -0.13,-0.08l-0.06 0 0 -0.04 0.99 0 0 0.04 -0.06 0c-0.15,0 -0.29,0.08 -0.4,0.23l-0.68 1.02 0.81 1.24c0.1,0.16 0.24,0.23 0.4,0.23l0.06 0 0 0.04z" />
              <path className="fil1" d="M25.02 13.52c0.32,0 0.57,0.07 0.74,0.22 0.16,0.13 0.24,0.32 0.25,0.55 0.01,0.16 -0.03,0.32 -0.11,0.45 -0.07,0.13 -0.18,0.23 -0.31,0.3 -0.13,0.07 -0.27,0.1 -0.42,0.09 -0.16,0 -0.31,-0.05 -0.45,-0.14l0 -0.04 0.08 0c0.03,0 0.05,-0.01 0.08,-0.01 0.04,-0.01 0.07,-0.02 0.1,-0.03 0.08,-0.03 0.15,-0.07 0.21,-0.13 0.07,-0.07 0.12,-0.17 0.15,-0.29 0.03,-0.07 0.03,-0.15 0.03,-0.24 -0.01,-0.17 -0.05,-0.31 -0.14,-0.41 -0.09,-0.1 -0.22,-0.15 -0.37,-0.15l-0.27 0 0 2.34c0,0.07 0.02,0.13 0.07,0.18 0.05,0.05 0.11,0.07 0.18,0.07l0.06 0 0 0.04 -1.22 0 0 -0.04 0.05 0c0.07,0 0.13,-0.02 0.18,-0.07 0.05,-0.05 0.07,-0.11 0.08,-0.18l0 -2.24c0,-0.06 -0.03,-0.12 -0.08,-0.17 -0.05,-0.04 -0.11,-0.06 -0.18,-0.06l-0.05 0 0 -0.04 1.34 0z" />
              <path className="fil1" d="M28.62 15.86c0.17,-0.23 0.25,-0.54 0.25,-0.94 0,-0.4 -0.08,-0.71 -0.25,-0.94 -0.16,-0.23 -0.39,-0.35 -0.67,-0.35 -0.28,0 -0.51,0.12 -0.67,0.35 -0.16,0.23 -0.25,0.54 -0.25,0.94 0,0.4 0.09,0.71 0.25,0.94 0.16,0.23 0.39,0.35 0.67,0.35 0.28,0 0.51,-0.12 0.67,-0.35zm0.48 -2c0.29,0.26 0.43,0.61 0.43,1.06 0,0.45 -0.14,0.8 -0.43,1.07 -0.28,0.26 -0.67,0.39 -1.15,0.39 -0.48,0 -0.86,-0.13 -1.15,-0.39 -0.28,-0.27 -0.42,-0.62 -0.42,-1.07 0,-0.45 0.14,-0.8 0.42,-1.06 0.29,-0.26 0.67,-0.4 1.15,-0.4 0.48,0 0.87,0.14 1.15,0.4z" />
              <path className="fil1" d="M7.74 18.08l-0.01 0 0 -0.01c0,-0.04 -0.01,-0.06 -0.03,-0.08 -0.02,-0.02 -0.04,-0.03 -0.08,-0.03l-0.13 0 0 0.58c0,0.02 0,0.04 0.02,0.05 0.01,0.01 0.02,0.02 0.04,0.02l0.01 0 0 0.01 -0.32 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.05,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.05l0 -0.58 -0.14 0c-0.07,0 -0.11,0.04 -0.11,0.11l0 0.01 -0.01 0 0 -0.19c0.01,0.01 0.03,0.01 0.05,0.02 0.03,0 0.05,0 0.07,0l0.44 0c0.02,0 0.04,0 0.07,0 0.03,-0.01 0.04,-0.01 0.05,-0.02l0 0.19z" />
              <path className="fil1" d="M9.07 17.91l0 0.01 -0.02 0c-0.01,0 -0.03,0.01 -0.04,0.02 -0.01,0.01 -0.01,0.02 -0.01,0.03l0 0.39c0,0.09 -0.03,0.15 -0.08,0.2 -0.05,0.05 -0.13,0.07 -0.22,0.07 -0.11,0 -0.2,-0.02 -0.25,-0.07 -0.06,-0.04 -0.09,-0.11 -0.09,-0.2l0 -0.39c0,-0.01 0,-0.02 -0.01,-0.03 -0.01,-0.01 -0.03,-0.02 -0.04,-0.02l-0.02 0 0 -0.01 0.31 0 0 0.01 -0.01 0c-0.02,0 -0.03,0.01 -0.04,0.02 -0.01,0.01 -0.02,0.02 -0.02,0.03l0 0.39c0,0.07 0.02,0.12 0.05,0.16 0.04,0.05 0.08,0.07 0.14,0.07 0.06,0 0.11,-0.02 0.15,-0.06 0.03,-0.04 0.05,-0.09 0.05,-0.16l0 -0.4c0,-0.03 -0.02,-0.05 -0.06,-0.05l-0.01 0 0 -0.01 0.22 0z" />
              <path className="fil1" d="M10.03 17.91c0.07,0 0.13,0.02 0.17,0.04 0.06,0.04 0.08,0.09 0.08,0.16 0,0.04 -0.01,0.08 -0.03,0.12 -0.03,0.03 -0.08,0.06 -0.13,0.06 0.02,0.01 0.04,0.03 0.07,0.05 0.02,0.01 0.03,0.03 0.04,0.05 0.01,0.01 0.01,0.02 0.02,0.03 0,0.01 0.01,0.02 0.02,0.03 0.01,0.03 0.03,0.05 0.05,0.08 0.02,0.03 0.04,0.05 0.06,0.06 0.02,0.01 0.04,0.02 0.06,0.02l0 0.01 -0.1 0c-0.06,0 -0.11,-0.01 -0.15,-0.03 -0.03,-0.01 -0.06,-0.04 -0.09,-0.08 -0.02,-0.03 -0.03,-0.06 -0.05,-0.09 -0.02,-0.03 -0.03,-0.06 -0.03,-0.08 -0.02,-0.04 -0.04,-0.07 -0.07,-0.07l0 -0.01 0.03 0c0.03,0 0.05,0 0.07,-0.02 0.03,-0.02 0.04,-0.05 0.05,-0.09 0,-0.01 0,-0.02 0,-0.02 0,-0.01 0.01,-0.02 0.01,-0.03 -0.01,-0.06 -0.02,-0.09 -0.05,-0.11 -0.02,-0.01 -0.03,-0.02 -0.04,-0.02 -0.02,-0.01 -0.03,-0.01 -0.04,-0.01 -0.01,0 -0.03,0 -0.04,0l-0.03 0 0 0.58c0,0.02 0.01,0.04 0.02,0.05 0.01,0.01 0.03,0.02 0.05,0.02l0.01 0 0 0.01 -0.32 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.04,-0.02 0.02,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 0,-0.04 -0.02,-0.05 -0.01,-0.01 -0.02,-0.02 -0.04,-0.02l-0.01 0 0 -0.01 0.36 0z" />
              <path className="fil1" d="M11.63 18.5c-0.03,0.03 -0.07,0.06 -0.14,0.09 -0.06,0.03 -0.14,0.04 -0.22,0.04 -0.11,0 -0.21,-0.03 -0.28,-0.1 -0.07,-0.06 -0.1,-0.15 -0.1,-0.27 0,-0.11 0.03,-0.2 0.1,-0.27 0.07,-0.06 0.17,-0.09 0.29,-0.09 0.12,0 0.22,0.02 0.29,0.05l0 0.19 -0.01 0c-0.03,-0.13 -0.11,-0.2 -0.24,-0.2 -0.08,0 -0.15,0.03 -0.19,0.09 -0.04,0.06 -0.06,0.14 -0.06,0.24 0,0.1 0.02,0.18 0.05,0.23 0.04,0.06 0.1,0.09 0.17,0.09 0.04,0 0.07,-0.01 0.1,-0.03 0.04,-0.02 0.06,-0.05 0.07,-0.08l0 -0.14c0,-0.03 -0.02,-0.05 -0.05,-0.05l-0.02 0 0 -0.01 0.3 0 0 0.01 -0.01 0c-0.04,0 -0.05,0.02 -0.05,0.05l0 0.16z" />
              <path className="fil1" d="M13.04 17.91l0 0.01 -0.02 0c-0.04,0 -0.07,0.02 -0.1,0.06l-0.21 0.32 0 0.24c0,0.02 0.01,0.04 0.02,0.05 0.01,0.01 0.03,0.02 0.05,0.02l0.01 0 0 0.01 -0.33 0 0 -0.01 0.02 0c0.01,0 0.03,-0.01 0.04,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.05l0 -0.24 -0.21 -0.32c-0.02,-0.04 -0.06,-0.06 -0.1,-0.06l-0.01 0 0 -0.01 0.35 0 0 0.01 -0.01 0c-0.01,0 -0.03,0.01 -0.04,0.02 0,0.02 0,0.03 0,0.04l0.16 0.27 0.16 -0.27c0,-0.01 0,-0.02 -0.01,-0.04 0,-0.01 -0.02,-0.02 -0.03,-0.02l-0.01 0 0 -0.01 0.25 0z" />
              <path className="fil1" d="M14.43 17.91l0 0.01 -0.02 0c-0.02,0 -0.03,0.01 -0.04,0.02 -0.02,0.01 -0.02,0.03 -0.02,0.04l0 0.52c0,0.05 0,0.1 0.01,0.13l-0.01 0 -0.54 -0.47 0 0.39c0,0.01 0,0.03 0.02,0.04 0.01,0.01 0.02,0.02 0.04,0.02l0.02 0 0 0.01 -0.33 0 0 -0.01 0.02 0c0.02,0 0.03,-0.01 0.05,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.04l0 -0.52c0,-0.05 -0.01,-0.1 -0.02,-0.13l0.01 0 0.54 0.47 0 -0.39c0,-0.01 0,-0.03 -0.02,-0.04 -0.01,-0.01 -0.02,-0.02 -0.04,-0.02l-0.02 0 0 -0.01 0.33 0z" />
              <path className="fil1" d="M16.09 17.91l0 0.01 -0.02 0c-0.02,0 -0.03,0.01 -0.04,0.02 -0.01,0.01 -0.01,0.02 -0.01,0.03l0 0.39c0,0.09 -0.03,0.15 -0.08,0.2 -0.05,0.05 -0.13,0.07 -0.22,0.07 -0.11,0 -0.2,-0.02 -0.25,-0.07 -0.06,-0.04 -0.09,-0.11 -0.09,-0.2l0 -0.39c0,-0.01 0,-0.02 -0.01,-0.03 -0.01,-0.01 -0.03,-0.02 -0.04,-0.02l-0.02 0 0 -0.01 0.31 0 0 0.01 -0.01 0c-0.02,0 -0.03,0.01 -0.04,0.02 -0.01,0.01 -0.02,0.02 -0.02,0.03l0 0.39c0,0.07 0.02,0.12 0.05,0.16 0.04,0.05 0.08,0.07 0.14,0.07 0.06,0 0.11,-0.02 0.14,-0.06 0.04,-0.04 0.06,-0.09 0.06,-0.16l0 -0.4c0,-0.03 -0.02,-0.05 -0.06,-0.05l-0.01 0 0 -0.01 0.22 0z" />
              <path className="fil1" d="M16.68 18.62l0 -0.01 0.01 0c0.02,0 0.04,-0.01 0.05,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 -0.01,-0.04 -0.02,-0.05 -0.01,-0.01 -0.03,-0.02 -0.05,-0.02l-0.01 0 0 -0.01 0.33 0 0 0.01 -0.01 0c-0.02,0 -0.04,0.01 -0.05,0.02 -0.01,0.01 -0.02,0.03 -0.02,0.05l0 0.55c0,0.02 0.01,0.04 0.02,0.05 0.01,0.01 0.03,0.02 0.05,0.02l0.01 0 0 0.01 -0.33 0z" />
              <path className="fil1" d="M18.57 18.54c0.03,0.04 0.07,0.07 0.11,0.07l0 0.01 -0.11 0c-0.01,0 -0.02,0 -0.02,0 -0.03,0 -0.05,-0.01 -0.07,-0.01 -0.05,-0.02 -0.1,-0.04 -0.13,-0.08 0,-0.01 -0.01,-0.02 -0.03,-0.05l-0.02 -0.02 -0.01 -0.02c-0.01,-0.02 -0.02,-0.03 -0.03,-0.04 -0.05,-0.07 -0.08,-0.11 -0.08,-0.11l0.24 -0.32c0.01,-0.01 0.01,-0.02 0.01,-0.03 -0.01,-0.01 -0.02,-0.02 -0.03,-0.02l-0.01 0 0 -0.01 0.24 0 0 0.01 -0.01 0c-0.04,0 -0.07,0.02 -0.1,0.05l-0.2 0.23 0.25 0.34zm-0.35 0.08l-0.32 0 0 -0.01 0.01 0c0.02,0 0.04,-0.01 0.05,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 -0.01,-0.04 -0.02,-0.05 -0.01,-0.01 -0.03,-0.02 -0.05,-0.02l-0.01 0 0 -0.01 0.32 0 0 0.01 -0.01 0c-0.02,0 -0.03,0.01 -0.04,0.02 -0.02,0.01 -0.02,0.03 -0.02,0.05l0 0.55c0,0.02 0,0.04 0.02,0.05 0.01,0.01 0.02,0.02 0.04,0.02l0.01 0 0 0.01z" />
              <path className="fil1" d="M19.72 18.62l-0.55 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.04,-0.02 0.02,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 0,-0.04 -0.02,-0.05 -0.01,-0.01 -0.02,-0.02 -0.04,-0.02l-0.01 0 0 -0.01 0.41 0c0.02,0 0.04,0 0.07,0 0.02,-0.01 0.04,-0.01 0.05,-0.02l0 0.19 -0.01 0 0 -0.01c0,-0.07 -0.04,-0.11 -0.11,-0.11l-0.17 0 0 0.29 0.14 0c0.02,-0.01 0.05,-0.02 0.06,-0.03 0.02,-0.02 0.03,-0.04 0.03,-0.07l0 -0.01 0.01 0 0 0.25 -0.01 0 0 0c0,-0.03 -0.01,-0.05 -0.03,-0.07 -0.01,-0.02 -0.03,-0.03 -0.06,-0.03l-0.14 0 0 0.28 0.14 0c0.1,0 0.17,-0.06 0.2,-0.17l0.01 0 -0.04 0.22z" />
              <path className="fil1" d="M20.76 18.24c0.07,0.05 0.1,0.1 0.1,0.18 -0.01,0.07 -0.03,0.12 -0.08,0.16 -0.05,0.03 -0.12,0.05 -0.2,0.05 -0.11,0 -0.18,-0.02 -0.22,-0.06 -0.01,-0.02 -0.01,-0.05 0,-0.09 0,-0.04 0.01,-0.07 0.03,-0.09l0.01 0c-0.01,0.06 0.01,0.1 0.05,0.14 0.03,0.04 0.08,0.06 0.14,0.06 0.05,0 0.08,-0.01 0.1,-0.04 0.03,-0.02 0.04,-0.04 0.04,-0.07 0,-0.03 -0.03,-0.07 -0.09,-0.11l-0.17 -0.1c-0.07,-0.05 -0.11,-0.12 -0.1,-0.19 0,-0.06 0.03,-0.1 0.06,-0.14 0.04,-0.03 0.09,-0.04 0.15,-0.04 0.05,0 0.1,0 0.15,0.01l0.07 0 -0.02 0.15 -0.01 0c0,-0.03 -0.01,-0.06 -0.04,-0.08 -0.02,-0.02 -0.06,-0.04 -0.1,-0.04 -0.04,0 -0.07,0.01 -0.1,0.03 -0.02,0.02 -0.03,0.04 -0.03,0.07 0,0.02 0,0.03 0.02,0.05 0.01,0.01 0.02,0.02 0.05,0.04l0.19 0.11z" />
              <path className="fil1" d="M22.21 17.92c-0.02,0 -0.03,0.01 -0.05,0.02 -0.01,0.01 -0.02,0.03 -0.02,0.05l0 0.55c0,0.02 0.01,0.04 0.02,0.05 0.01,0.01 0.03,0.02 0.05,0.02l0.01 0 0 0.01 -0.32 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.04,-0.02 0.02,-0.01 0.02,-0.03 0.02,-0.05l0 -0.25 -0.31 0 0 0.25c0,0.02 0.01,0.04 0.02,0.05 0.02,0.01 0.03,0.02 0.05,0.02l0.01 0 0 0.01 -0.32 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.05,-0.02 0.01,-0.01 0.01,-0.03 0.01,-0.05l0 -0.55c0,-0.02 0,-0.04 -0.01,-0.05 -0.02,-0.01 -0.03,-0.02 -0.05,-0.02l-0.01 0 0 -0.01 0.32 0 0 0.01 -0.01 0c-0.02,0 -0.03,0.01 -0.05,0.02 -0.01,0.01 -0.02,0.03 -0.02,0.05l0 0.25 0.31 0 0 -0.25c0,-0.02 0,-0.04 -0.02,-0.05 -0.01,-0.01 -0.02,-0.02 -0.04,-0.02l-0.01 0 0 -0.01 0.32 0 0 0.01 -0.01 0z" />
              <path className="fil1" d="M23.38 18.62l-0.55 0 0 -0.01 0.01 0c0.02,0 0.03,-0.01 0.05,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 -0.01,-0.04 -0.02,-0.05 -0.02,-0.01 -0.03,-0.02 -0.05,-0.02l-0.01 0 0 -0.01 0.41 0c0.02,0 0.05,0 0.07,0 0.03,-0.01 0.04,-0.01 0.05,-0.02l0 0.19 -0.01 0 0 -0.01c0,-0.07 -0.03,-0.11 -0.11,-0.11l-0.16 0 0 0.29 0.13 0c0.03,-0.01 0.05,-0.02 0.06,-0.03 0.02,-0.02 0.03,-0.04 0.03,-0.07l0 -0.01 0.01 0 0 0.25 -0.01 0 0 0c0,-0.03 -0.01,-0.05 -0.02,-0.07 -0.02,-0.02 -0.04,-0.03 -0.07,-0.03l-0.13 0 0 0.28 0.14 0c0.1,0 0.16,-0.06 0.2,-0.17l0.01 0 -0.05 0.22z" />
              <path className="fil1" d="M24.85 17.91l0 0.01 -0.02 0c-0.01,0 -0.03,0.01 -0.04,0.02 -0.01,0.01 -0.02,0.03 -0.02,0.04l0 0.52c0,0.05 0,0.1 0.01,0.13l-0.01 0 -0.54 -0.47 0 0.39c0,0.01 0.01,0.03 0.02,0.04 0.01,0.01 0.03,0.02 0.05,0.02l0.02 0 0 0.01 -0.33 0 0 -0.01 0.02 0c0.01,0 0.03,-0.01 0.04,-0.02 0.01,-0.01 0.02,-0.03 0.02,-0.04l0 -0.52c0,-0.05 0,-0.1 -0.01,-0.13l0.01 0 0.54 0.47 0 -0.39c0,-0.01 -0.01,-0.03 -0.02,-0.04 -0.01,-0.01 -0.03,-0.02 -0.05,-0.02l-0.02 0 0 -0.01 0.33 0z" />
              <path className="fil1" d="M25.45 18.62l0 -0.01 0.02 0c0.01,0 0.03,-0.01 0.04,-0.02 0.02,-0.01 0.02,-0.03 0.02,-0.05l0 -0.55c0,-0.02 0,-0.04 -0.02,-0.05 -0.01,-0.01 -0.03,-0.02 -0.04,-0.02l-0.02 0 0 -0.01 0.34 0 0 0.01 -0.02 0c-0.02,0 -0.03,0.01 -0.05,0.02 -0.01,0.01 -0.02,0.03 -0.02,0.05l0 0.55c0,0.02 0.01,0.04 0.02,0.05 0.02,0.01 0.03,0.02 0.05,0.02l0.02 0 0 0.01 -0.34 0z" />
              <path className="fil2" d="M11.27 17.72l0 0c0.02,0.02 0.05,0.01 0.06,-0.01l0.07 -0.09c0.01,-0.02 0.01,-0.05 -0.01,-0.06l0 0c-0.02,-0.02 -0.05,-0.01 -0.06,0.01l-0.07 0.09c-0.02,0.02 -0.01,0.05 0.01,0.06z" />
              <path className="fil2" d="M15.72 17.72l0 0c0.02,0.02 0.04,0.01 0.06,-0.01l0.07 -0.09c0.01,-0.02 0.01,-0.05 -0.01,-0.06l0 0c-0.02,-0.02 -0.05,-0.01 -0.07,0.01l-0.06 0.09c-0.02,0.02 -0.02,0.05 0.01,0.06z" />
              <path className="fil1" d="M25.7 19.39l-18.45 0c-0.03,0 -0.06,-0.03 -0.06,-0.06 0,-0.03 0.03,-0.06 0.06,-0.06l18.45 0c0.03,0 0.06,0.03 0.06,0.06 0,0.03 -0.03,0.06 -0.06,0.06z" />
              <path className="fil1" d="M16.18 10.61l0.2 0.22 0.21 -0.22 -0.21 -0.23 -0.2 0.23zm0.2 0.55l-0.51 -0.55 0.51 -0.56 0.52 0.56 -0.52 0.55z" />
              <path className="fil1" d="M15.93 8.81l0.45 0.51 0.45 -0.51 -0.45 -0.51 -0.45 0.51zm13.27 2.58l-10.95 0 0.43 -2.53 -0.47 0.2 0.27 0.67 -0.01 0.04c-0.16,0.43 -0.61,0.68 -1.1,0.62 -0.43,-0.06 -0.75,-0.4 -0.99,-0.73 -0.23,0.33 -0.55,0.67 -0.99,0.73 -0.49,0.06 -0.94,-0.19 -1.09,-0.62l-0.01 -0.04 0.26 -0.67 -0.47 -0.2 0.43 2.53 -10.89 0 0 -0.22 10.63 0 -0.46 -2.69 1.05 0.46 -0.31 0.79c0.15,0.35 0.53,0.47 0.83,0.43 0.3,-0.04 0.57,-0.25 0.87,-0.67l-0.6 -0.67 0.75 -0.86 0.75 0.86 -0.6 0.67c0.3,0.42 0.58,0.63 0.87,0.67 0.31,0.05 0.69,-0.08 0.84,-0.43l-0.31 -0.79 1.04 -0.46 -0.45 2.69 10.68 0 0 0.22z" />
              <polygon className="fil1" points="3.61,11.9 29.2,11.9 29.2,11.73 3.61,11.73 " />
            </g>
          </g>
        </svg> 
      </div>
        <div className='header_right'>
        <div className='header_right_menu'>
            <ul>
            <li>Расположение</li>
            <li>Галерея</li>
            <li>Отдел продаж</li>
            </ul>
        </div>
        <div className='header_right_contacts'>
          <TelephoneForwardFill className='top_icon' />
        </div>
        </div>
        </div>
        <div className='top_carousel'>
          <CarouselFadeExample/>
        </div>
        <div className='complex_Royal_description'>
          <p className='complex_Royal_description_tittle'>Жилой комплекс «Royal Expo»</p>
          <p className='complex_Royal_description_text'>ROYAL EXPO — это олицветворение современного делового образа жизни и комфортного досуга.<br/>
          Архитектура комплекса выполнена в современном стиле с использованием классических элементов, которые подчеркивают благородство форм и статус жилого комплекса.
          <br/>
          Жилой комплекс «Royal Expo» - это дом, где вы можете жить так, как вам хочется – стильно, современно и безопасно!
          </p>
          <button className='ticket_button' type='button'>Отправить Заявку</button>
        </div>
        <div className='your_royal mt-5'>
          <p className='your_royal_tittle'>Ваш жилой комплекс «Royal Expo»</p>
          <div className='your_royal_items mt-5'>
          <div className='your_royal_text_box pt-5'>
            <p className='your_royal_text_box_tittle'>
              Выбор тех, кто хочет жить с комфортом
            </p>
            <p className='your_royal_text_box_text'>
            <br/>
            ROYAL EXPO — жилой комплекс премиум-класса, состоящий из 23 домов с небольшой этажностью 6-7-8 этажей, с квартирами площадью от 74,3 до 187,7 кв. м.
            <br/>
            Архитектура комплекса выполнена в современном стиле с использованием классических элементов, которые подчеркивают благородство форм и статус жилого комплекса.
            <br/>                                    
            Эффектная геометрия и минималистичный декор этого фасада создают впечатление современной роскоши.
            </p>
          </div>
          <div className='your_royal_img_box'>
          </div>
          </div>


        </div>
        <div className='advantages mt-5'>
              <div className='advantages_carousel'>
                <AdvCarousel/>
              </div>
              <div className='advantages_items mt-5'>
              <div className='advantages_item'>
                <img className='advantages_item_img' src={award} alt='award'/>
                <p className='advantages_item_desctiption'>Класс жилья «Премиум»
                </p>
              </div>
              <div className='advantages_item'>
                <img className='advantages_item_img' src={parking}/>
                <p className='advantages_item_desctiption'> Паркинг
                </p>
              </div>
              <div className='advantages_item'>
                <img className='advantages_item_img' src={windows}/>
                <p className='advantages_item_desctiption'>Дизайнерские холлы
                </p>
              </div>
              <div className='advantages_item'>
                <img className='advantages_item_img' src={park}/>
                <p className='advantages_item_desctiption'> Закрытая территория
                </p>
              </div>
              <div className='advantages_item'>
                <img className='advantages_item_img'src={footbal}/>
                <p className='advantages_item_desctiption'> Детская<br/> площадка
                </p>
              </div>
              <div className='advantages_item'>
                <img className='advantages_item_img'src={cctb}/>
                <p className='advantages_item_desctiption'> Безопасность 24/7
                </p>
              </div>
              </div>
              <div className='advantages_numbers mt-5'>
                <div className='advantages_number'>
                  <p className='advantages_number_bignumber'>
                  3,3
                  </p>
                  <p className='advantages_number_description'>
                  Высота<br/>
                  потолков
                  </p>
                </div>
                <div className='advantages_number'>
                  <p className='advantages_number_bignumber'>
                  24/7
                  </p>
                  <p className='advantages_number_description'>
                  Видеонаблюдение<br/>
двора и дома
                  </p>
                </div>
                <div className='advantages_number'>
                  <p className='advantages_number_bignumber'>
                  23
                  </p>
                  <p className='advantages_number_description'>
                  Количество<br/>
домов
                  </p>
                </div>
                <div className='advantages_number'>
                  <p className='advantages_number_bignumber'>
                  504
                  </p>
                  <p className='advantages_number_description'>
                  Паркомест<br/>
в паркинге
                  </p>
                </div>
              </div>
            </div>
        <div className='closed_area mt-5'>
          <p className='closed_area_tittle'>
          Дворовая территория
          </p>
          <p className='closed_area_description mt-3'>
          Дворовая территория жилого комплекса «Royal Expo» - это ощущение уединения и безопасности не покидает ни на секунду благодаря закрытости и надежной охранной системе.
<br/>
На дворовой территории квартала гармонично и изящно расположились все основные атрибуты для счастливой жизни. Светлое, уютное пространство с зелеными зонами, игровыми площадками и зонами отдыха помогут здесь найти каждому занятие по вкусу.
          </p>
          <button className='ticket_button'> отправить заявку</button>
          <AreaCarousel/>
        </div>
                  
        <div className='entrance mt-5'>
          <p className='entrance_tittle'>Подъездные холлы жилого комплекса</p>
            <div className='entrance_items mt-4'>
              <div className='entrance_text_box'>
                <div className='entrance_text_box_description mt-5'>
                Сочетание строгости и красоты классического интерьера с функциональностью современного. 
                <br/>
                <br/>

                Четкие, вертикальные линии визуально вытягивают пространство. Декоративные элементы задают динамику и глубину. Натуральное дерево, стекло, зеркала, полированный металл, керамогранит и конечно, продуманные световые решения создают универсальный код интерьеров общественных пространств Royal Expo.
                <br/>
                <br/>
                Эффектные детали, сочетания материалов и цветовых решений — смелый вызов стандартной классике. 
                </div>
              </div>
              <div className='entrance_img'>

              </div>
            </div>
        </div>
        <div className='location mt-5'>
          <p className='location_tittle'>
          Расположение
          </p>
          <p className='location_description'>
          Жилой комплекс «Royal Expo» в сердце столицы!
            Комплекс расположен в районе EXPO2017, с его современной архитектурой и не высотной застройкой, зелеными парками и бульварами, развитой инфраструктурой, широком выбором развлечений и шопинга.
            Всего в нескольких шагах от жилого комплекса расположен EXPO-парк с велосипедными дорожками, пешеходными аллеями, детский развлекательный парк, ТРЦ «Mega Silk Way».'</p>
            <button className='ticket_button'> отправить заявку</button>
            <div className='location_2gis mt-5'>
                {/* <LocationMap/> */}
                <div id="royalmap" style={{width:'70vw', height:'40vh'}}></div>
            </div>
        </div>
        <div className='gallery'>

        </div>
        <div className='nak-company mt-5'>
          <p className='nak-company_tittle'>
          Строительная компания «NAK»
          </p>
          <div className='nak-company_items mt-5'>
            <div className='nak-company_description'>
            «NAK» - динамично развивающаяся строительная компания, которая зарекомендовала себя как серьезный и надежный застройщик на казахстанском рынке.
            <br/>
            <br/>
            Начиная с 2006 года, мы достигли значительных результатов в проведении строительных работ разной сложности, научились решать практически любые задачи в области строительства и его организационно-технологического обеспечения, а также успешно реализовали разнообразные проекты в сферах жилищного, коммерческого и промышленного строительства.
            </div>
            <div className='nak-company_img'>
            </div>
          </div>
          <div className='nak-company_numbers'>
            <div className='nak-company_number'>
              <p className='nak-company_bignumber'>
              15
              </p>
              <p className='nak-company_number_description'>
              Лет <br/>
              на рынке
              </p>
            </div>
            <div className='nak-company_number'>
              <p className='nak-company_bignumber'>
              {`>5000
`}

              </p>
              <p className='nak-company_number_description'>
              Счастливых<br/>
новоселов
              </p>
            </div>
            <div className='nak-company_number'>
              <p className='nak-company_bignumber'>
              70+
              </p>
              <p className='nak-company_number_description'>
              Построенных<br/>
объектов
              </p>
            </div>

          </div>
        </div>
        <div className='sale-dep mt-5'>
            <p className='sale-dep_tittle'>
            Отдел продаж
            </p>
            <div className='sale-dep_items'>
                <div className='sale-dep_item'>
                <div className='sale-dep_item_icon'>
                <GeoAltFill className='sales-icons' />
                </div>
                <div className='sale-dep_item_description'>
                <p className='sale-dep_item_description_tittle'>
                Расположение
                </p>
                <p className='sale-dep_item_description_text'>
                Казахстан, г. Астана,<br/>
                  ул. Сыганак, 58<br/>
                <a href='#'>Проложить маршрут</a>
                </p>
                </div>
                </div>

                <div className='sale-dep_item'>
                <div className='sale-dep_item_icon'>
                <Calendar2 className='sales-icons' />
                </div>
                <div className='sale-dep_item_description'>
                <p className='sale-dep_item_description_tittle'>
                График работы
                </p>
                <p className='sale-dep_item_description_text'>
                Пн-Пт: 9:00-19:00<br/>
                  Сб-Вс: 10:00-19:00<br/>
                  Без обеда и выходных

                </p>
                </div>
                </div>
                <div className='sale-dep_item'>
                <div className='sale-dep_item_icon'>
                  <TelephoneForward className='sales-icons' />
                </div>
                <div className='sale-dep_item_description'>
                <p className='sale-dep_item_description_tittle'>
                Телефон:
                </p>
                <p className='sale-dep_item_description_text'>
                +7 (700) 519-99-99<br/>
                  <a href='#'>Написать в Whatsapp</a>
                  
                </p>
                </div>
                </div>
                <div className='sale-dep_item'>
                <div className='sale-dep_item_icon'>
                <Instagram  className='sales-icons'/>
                </div>
                <div className='sale-dep_item_description'>
                <p className='sale-dep_item_description_tittle'>
                Instagram:
                </p>
                <p className='sale-dep_item_description_text'>

                  <a href='#'>@nak.astana</a>
                  
                </p>
                </div>
                </div>
            </div>
            <div className=' gis mt-5'>
            <div id="map" style={{width:'80vw', height:'40vh'}}></div>
            </div>
        </div>
        <div className='Footer mt-5'>
                <p className='Footer_tittle'>
                Жилой комплекс «Royal Expo»
                </p>
                <p className='Footer_text'>
                  Данный материал носит исключительно информационный характер и ни при каких условиях не является публичной офертой. Архитектура жилого комплекса, изображения благоустройства, подъездных холлов, фасадов, отделки, применяемых материалов, их нумерация, инфраструктура проекта являются условными и может быть изменена в ходе проектирования, строительства и эксплуатации.
                </p>
        </div>

      </div>

)
}

export default App;