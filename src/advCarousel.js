import 'bootstrap/dist/css/bootstrap.min.css'
import adv_carousel1 from './images/advcarousel/re-expo-1.jpg';
import adv_carousel2 from './images/advcarousel/re-expo-2.jpg';
import adv_carousel3 from './images/advcarousel/re-expo-3.jpg';
import adv_carousel4 from './images/advcarousel/re-expo-4.jpg';
import adv_carousel5 from './images/advcarousel/re-expo-5.jpg';


import Carousel from 'react-bootstrap/Carousel';
import { FiletypePdf } from 'react-bootstrap-icons';
import { useState } from 'react';

function AdvCarousel() {
const [index, setIndex] = useState(0)

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='adv_carousel_box'>
        <div className='carous-extra-text'>
        <Carousel variant='dark'  controls={false} activeIndex={index} onSelect={handleSelect}  touch>
      <Carousel.Item interval={1500}>
        {/* <img className='adv_carous_img_extra d-block w-100' src={adv_carousel1}/> */}
        <div className='extra_text_box'>
            <p>Дизайнерские холлы</p>
            <p>Сочетание строгости и красоты классического интерьера с функциональностью современного <br/>Эффектные детали, сочетания материалов и цветовых решений — смелый вызов стандартной классике</p>
        </div>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
        {/* <img className='adv_carous_img_extra d-block w-100' src={adv_carousel2}/> */}
        <div className='extra_text_box'>
            <p>Паркинг</p>
            <p>Чтобы Вы не переживали за сохранность автомобиля, в ЖК запланирован большой паркинг на 504 машиноместа с системой распознавания номеров и удобной навигацией<br/>
            Комфортные для машины условия, помогут содержать её в надлежащем виде и надолго продлить срок службы всех её механизмов</p>
            
        </div>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      {/* <img className='adv_carous_img_extra d-block w-100' src={adv_carousel3}/> */}
      <div className='extra_text_box'>
            <p>Все для комфортного семейного досуга!</p>
            <p>Резидентов квартала «Royal Expo» ждут детские комплексы для разных возрастов, озеленение, ухоженные клумбы, тропинки, где можно бегать и гулять, отдыхать и полноценно наслаждаться активной жизнью</p>
        </div>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      {/* <img className='adv_carous_img_extra d-block w-100' src={adv_carousel4}/> */}
      <div className='extra_text_box'>
            <p>Архитектура</p>
            <p>Жилой комплекс "Royal Expo" строится с применением самых современных технологий.Каждая деталь внешнего облика комплекса продумана ведущими архитекторами Казахстана и дает абсолютное ощущение комфорта дома бизнесс-класса</p>

        </div>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      {/* <img className='adv_carous_img_extra d-block w-100 h-90' src={adv_carousel5}/> */}
      <div className='extra_text_box'>
            <p>Безопасность 24/7</p>
            <p>Ультрасовременная система охраны и видеонаблюдения, безупречное техническое обслуживание и ощущение полной безопасности в вашем собственном доме обеспечат: закрытая территория комплекса; двор без машин;
            система контроля доступа; 24/7 видеонаблюдение и охрана по периметру комплекса</p>

        </div>
      </Carousel.Item>
    </Carousel>
        </div>

        

    <Carousel activeIndex={index} onSelect={handleSelect}  touch>
      <Carousel.Item interval={1500}>
        <img className='adv_carous_img d-block w-100' src={adv_carousel1}/>
        <Carousel.Caption className='adv_carous_text_box'>
          <h3 className='adv_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='adv_carous_img_text'>Искуство жить в гармонии.</p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
        <img className='adv_carous_img d-block w-100' src={adv_carousel2}/>
        <Carousel.Caption className='adv_carous_text_box'>
          <h3 className='adv_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='adv_carous_img_text'>Искуство жить в гармонии.</p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='adv_carous_img d-block w-100' src={adv_carousel3}/>
        <Carousel.Caption className='adv_carous_text_box'>
          <h3 className='adv_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='adv_carous_img_text'>Быть свободным и выбирать самое лучшее</p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='adv_carous_img d-block w-100' src={adv_carousel4}/>
        <Carousel.Caption className='adv_carous_text_box'>
          <h3 className='adv_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='adv_carous_img_text'>
            Великолепие в каждой детали.
          </p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='adv_carous_img d-block w-100 h-90' src={adv_carousel5}/>
        <Carousel.Caption className='adv_carous_text_box'>
          <h3 className='adv_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='adv_carous_img_text'>
            Великолепие в каждой детали.
          </p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default AdvCarousel;