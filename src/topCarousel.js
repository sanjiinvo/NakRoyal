import 'bootstrap/dist/css/bootstrap.min.css'
import top_carousel1 from './images/topcarousel/royalexpo-3.jpg';
import top_carousel2 from './images/topcarousel/royalexpo-4.jpg';
import top_carousel3 from './images/topcarousel/royalexpo-5.jpg';

import Carousel from 'react-bootstrap/Carousel';
import { FiletypePdf } from 'react-bootstrap-icons';

function CarouselFadeExample() {
  return (
    <Carousel fade touch>
      <Carousel.Item interval={1500}>
        <img className='top_carous_img d-block w-100 h-90' src={top_carousel1}/>
        <Carousel.Caption className='top_carous_text_box'>
          <h3 className='top_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='top_carous_img_text'>Искуство жить в гармонии.</p>
          <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='top_carous_img d-block w-100 h-90' src={top_carousel2}/>
        <Carousel.Caption className='top_carous_text_box'>
          <h3 className='top_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='top_carous_img_text'>Быть свободным и выбирать самое лучшее</p>
          <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='top_carous_img d-block w-100 h-90' src={top_carousel3}/>
        <Carousel.Caption className='top_carous_text_box'>
          <h3 className='top_carous_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='top_carous_img_text'>
            Великолепие в каждой детали.
          </p>
          <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;