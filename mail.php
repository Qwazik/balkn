<?php
$to = "mail@mail.ru";
$sitename = "Современные балконы";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);

$message = "Имя: $name \nТелефон: $phone";
$pagetittle = "Новая заявка с \"$sitename\"";
mail($to,$pagetittle,$message, "Content-type: text/plain; charset=\"utf-8\"\n From: $sitename");
?>