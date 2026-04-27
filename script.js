const messagesDiv = document.getElementById("messages");

// RECEBER MENSAGENS EM TEMPO REAL
const evtSource = new EventSource("/stream.php");

evtSource.onmessage = function(event) {
    const data = JSON.parse(event.data);

    messagesDiv.innerHTML = ""; // limpar

    data.forEach(msg => {
        if (msg.type === "text") {
            const div = document.createElement("div");
            div.textContent = msg.message;
            messagesDiv.appendChild(div);
        }

        if (msg.type === "image") {
            const img = document.createElement("img");
            img.src = msg.data;
            messagesDiv.appendChild(img);
        }
    });
};

// ENVIAR TEXTO
function sendText() {
    const msg = document.getElementById("msg").value;

    fetch("/send.php", {
        method: "POST",
        body: JSON.stringify({ type: "text", message: msg })
    });

    document.getElementById("msg").value = "";
}

// ENVIAR IMAGEM
document.getElementById("imgInput").addEventListener("change", function() {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function() {
        fetch("/send.php", {
            method: "POST",
            body: JSON.stringify({
                type: "image",
                data: reader.result
            })
        });
    };
    reader.readAsDataURL(file);
});
