import 'bootstrap/dist/css/bootstrap.min.css'
import area_carous_imgel1 from './images/topcarousel/royalexpo-3.jpg';
import area_carous_imgel2 from './images/topcarousel/royalexpo-4.jpg';
import area_carous_imgel3 from './images/topcarousel/royalexpo-5.jpg';

import Carousel from 'react-bootstrap/Carousel';
import { FiletypePdf } from 'react-bootstrap-icons';

function AreaCarousel() {
  return (
    <Carousel className='mt-5 area_carousel_box' fade touch={true} >
      <Carousel.Item interval={1500}>
        <img className='area_carous_img_img d-block w-100 h-90' src={area_carous_imgel1}/>
        <Carousel.Caption className='area_carous_img_text_box'>
          <h3 className='area_carous_img_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='area_carous_img_img_text'>Искуство жить в гармонии.</p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='area_carous_img_img d-block w-100 h-90' src={area_carous_imgel2}/>
        <Carousel.Caption className='area_carous_img_text_box'>
          <h3 className='area_carous_img_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='area_carous_img_img_text'>Быть свободным и выбирать самое лучшее</p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={1500}>
      <img className='area_carous_img_img d-block w-100 h-90' src={area_carous_imgel3}/>
        <Carousel.Caption className='area_carous_img_text_box'>
          <h3 className='area_carous_img_img_tittle'>Жилой комплекс «Royal Expo»</h3>
          <p className='area_carous_img_img_text'>
            Великолепие в каждой детали.
          </p>
          {/* <a className='download-file-link' href='#'>Скачать презентацию   <FiletypePdf color='white' size={32} className='download-file'/></a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AreaCarousel;