import React, { useEffect, useState } from "react";
import './popupdiscont.scss'

    const PopUp = ({ isVisible, onClose }) => {
        if (!isVisible) return null;

        return (
            <div className="popup-overlay" onClick={onClose}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Специальное предложение!</h2>
                <p className="popup-text">Цена снизилась с <span className="old-price">690 тыс. тенге</span> за кв.м до <span className="new-price">550 тыс. тенге</span> за кв.м!</p>
                {/* <img src="/images/discount.jpg" alt="Discount" /> */}
              </div>
            </div>
          )
    }

    export default PopUp;
