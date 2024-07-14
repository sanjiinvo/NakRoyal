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

  const validatePhone = (phone) => {
    const phoneRegex = /^8-\d{3}-\d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка данных:', formData); // Добавлено для отладки

    if (!validatePhone(formData.phone)) {
      setResponseMessage('Пожалуйста, введите номер телефона в формате 8-***-***-**-**');
      return;
    }

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
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="8-***-***-**-**" />
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
