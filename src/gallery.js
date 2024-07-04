import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import './gallery.scss';
import g1_1 from './images/gallery/r1-1.jpg';
import g1_2 from './images/gallery/r1-2.jpg';
import g1_3 from './images/gallery/r1-3.jpg';
import g2_1 from './images/gallery/r2-1.jpg';
import g2_2 from './images/gallery/r2-2.jpg';
import g2_3 from './images/gallery/r2-3.jpg';
import g3_1 from './images/gallery/r3-1.jpg';
import g3_2 from './images/gallery/r3-2.jpg';
import g3_3 from './images/gallery/r3-3.jpg';
import g4_1 from './images/gallery/r4-1.jpg';
import g4_2 from './images/gallery/r4-2.jpg';
import g4_3 from './images/gallery/r4-3.jpg';

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <>
      <div className="gallery">
        <div className="line1">
          <div style={{ backgroundImage: `url(${g1_1})` }} className="item gallery_item" onClick={() => handleShow(g1_1)}></div>
          <div style={{ backgroundImage: `url(${g1_2})` }} className="item gallery_item" onClick={() => handleShow(g1_2)}></div>
          <div style={{ backgroundImage: `url(${g1_3})` }} className="item gallery_item" onClick={() => handleShow(g1_3)}></div>
        </div>
        <div className="line2">
          <div style={{ backgroundImage: `url(${g2_1})` }} className="item_l gallery_item" onClick={() => handleShow(g2_1)}></div>
          <div style={{ backgroundImage: `url(${g2_2})` }} className="item_w gallery_item" onClick={() => handleShow(g2_2)}></div>
          <div style={{ backgroundImage: `url(${g2_3})` }} className="item_l gallery_item" onClick={() => handleShow(g2_3)}></div>
        </div>
        <div className="line3">
          <div style={{ backgroundImage: `url(${g3_1})` }} className="item_l gallery_item" onClick={() => handleShow(g3_1)}></div>
          <div style={{ backgroundImage: `url(${g3_2})` }} className="item_w gallery_item" onClick={() => handleShow(g3_2)}></div>
          <div style={{ backgroundImage: `url(${g3_3})` }} className="item_l gallery_item" onClick={() => handleShow(g3_3)}></div>
        </div>
        <div className="line4">
          <div style={{ backgroundImage: `url(${g4_1})` }} className="item gallery_item" onClick={() => handleShow(g4_1)}></div>
          <div style={{ backgroundImage: `url(${g4_2})` }} className="item gallery_item" onClick={() => handleShow(g4_2)}></div>
          <div style={{ backgroundImage: `url(${g4_3})` }} className="item gallery_item" onClick={() => handleShow(g4_3)}></div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
