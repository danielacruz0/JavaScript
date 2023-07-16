function Sum(){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber + SNumber   
    
    alert('Resultado da soma entre os dois números:' + result)
}

function Sub(){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber - SNumber    

    alert('Resultado da subtração entre os dois números:' + result)
}

function Mult(){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber * SNumber    

    alert('Resultado da multiplicação entre os dois números:' + result)
}

function Div(){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber / SNumber    

    alert('Resultado da divisão entre os dois números:' + result)
}