<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Chat PHP SSE</title>
    <style>
        #messages {
            width: 400px;
            height: 300px;
            border: 1px solid #ccc;
            overflow-y: auto;
            padding: 10px;
            margin-bottom: 10px;
        }
        img {
            max-width: 200px;
            margin: 5px 0;
            border-radius: 4px;
        }
    </style>
</head>
<body>

<h2>Chat em Tempo Real (PHP + SSE)</h2>

<div id="messages"></div>

<input type="text" id="msg">
<button onclick="sendText()">Enviar</button>

<br><br>

<input type="file" id="imgInput" accept="image/*">

<script src="script.js"></script>

</body>
</html>
