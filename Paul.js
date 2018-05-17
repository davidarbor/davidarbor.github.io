$(document).ready(function(){
    $('#contentformammals').hide();
    $('#contentforbirds').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').hide();
    $('#tilden').html("<img width='500' height='500' src='img/Tilden.png'>");
    $('#tilden').hide();

});

function displayArea(){
    var selectValue=document.getElementById("selectBox").value;
    if(selectValue == 1){
        displayPlants();
    }
    if(selectValue == 2){
        displayBirds();
    }
    if(selectValue == 3){
        displayMammals();
    }
    if(selectValue == 4){
        displayFungi();
    }


}

function displayPlants(){
    $('#contentformammals').hide();
    $('#contentforbirds').hide();
    $('#contentforfungi').hide();
    $('#contentforplants').show();
}
function displayBirds(){
    $('#contentformammals').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').hide();
    $('#contentforbirds').show();
}
function displayMammals(){
    $('#contentforbirds').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').hide();
    $('#contentformammals').show();
}
function displayFungi(){
    $('#contentformammals').hide();
    $('#contentforbirds').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').show();
}

function displayMap(){
    $("body").pagecontainer("change", "#page2", {});
    var area=document.getElementById("selectBox").value;
    switch(area){
        case "1":
            $('#tilden').show();
            break;

        case "2":
            return "<img src='img/Aquarius.jpg'>";

        case "3":
            return "<img src='img/Pisces.jpg'>";

        case "4":
            return "<img src='img/Aries.jpg'>";
    }
}