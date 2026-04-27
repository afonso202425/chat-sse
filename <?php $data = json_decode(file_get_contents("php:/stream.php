<?php
$data = json_decode(file_get_contents("php://input"), true);

$messages = json_decode(file_get_contents("messages.json"), true);
$messages[] = $data;

file_put_contents("messages.json", json_encode($messages));
