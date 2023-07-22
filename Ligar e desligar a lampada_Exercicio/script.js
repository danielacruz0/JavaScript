function TurnOnOff(){
    var Image = document.getElementById('image');

    if(Image.src.match('OFFLampada')) {
        Image.src="imagens/ONLampada.jpg";

    }else{
       Image.src="imagens/OFFLampada.jpg";
    }
}