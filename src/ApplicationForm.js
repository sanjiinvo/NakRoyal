import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка данных:', formData); // Добавлено для отладки

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);


    axios.post('mail.php', formDataToSend)
      .then(response => {
        console.log('Сообщение отправлено успешно:', response.data);
        setResponseMessage(response.data.message);
        onClose();
      })
      .catch(error => {
        console.error('Ошибка при отправке сообщения:', error);
        setResponseMessage('Ошибка при отправке сообщения.');
      });
  };

  if (!isVisible) return null;

  return (
    <div className="request-form-overlay">
      <div className="request-form">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Отправить заявку</h2>
        {responseMessage && <p>{responseMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Телефон:
            <input type="text" placeholder='8-123-456-78-90' name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Сообщение:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
