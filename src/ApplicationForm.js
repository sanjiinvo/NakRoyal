import React from 'react';

const RequestForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="request-form-overlay">
      <div className="request-form">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Отправить заявку</h2>
        <form>
          <label>
            Имя:
            <input type="text" name="name" />
          </label>
          <label>
            Телефон:
            <input type="text" name="phone" />
          </label>
          <label>
            Сообщение:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
