function TurnOnOff(){
    var Image = document.getElementById('image');

    if(Image.src.match()) {
        Image.src="imagens/ONLampada.jpg";

    }else{
       Image.src="imagens/OFFLampada.jpg";
    }
}