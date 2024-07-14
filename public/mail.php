<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    if (!empty($name) && !empty($phone) && !empty($message)) {
        $to = "sanzhar_sattybaev@mail.ru";
        $subject = "Новая заявка с сайта ROYAL EXPO";
        $body = "Имя: $name\nТелефон: $phone\nСообщение: $message";

        $headers = "Content-type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: royalexpo@nak.kz\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Сообщение отправлено успешно!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке сообщения.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля.', 'name' => $name, 'phone' => $phone, 'message' => $message]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Неверный метод запроса.']);
}

?>
