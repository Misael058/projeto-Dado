function Jogouu() {
       let img = document.getElementById("dadoImg");

    img.classList.add("giro-360");

    setTimeout(function() {
        img.classList.remove("giro-360");
    }, 1000);
    var sorteio = Math.floor(Math.random() * 6 + 1);
    

    switch (sorteio) {
        case 1:
            img.src = "img/face1.png";
            break;
        case 2:
            img.src = "img/face2.png";
            break;
        case 3:
            img.src = "img/face3.png";
            break;
        case 4:
            img.src = "img/face4.png";
            break;
        case 5:
            img.src = "img/face5.png";
            break;
        case 6:
            img.src = "img/face6.png";
            break;
        default:
            break;
    }


}