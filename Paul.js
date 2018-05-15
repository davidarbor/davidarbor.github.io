$(document).ready(function(){
    $('#contentformammals').hide();
    $('#contentforbirds').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').hide();
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

function displayMap(area){
    switch(area){
        case "Area 1":
            return "<img src='img/Cap.jpg'>";

        case "Area 2":
            return "<img src='img/Aquarius.jpg'>";

        case "Area 3":
            return "<img src='img/Pisces.jpg'>";

        case "Area 4":
            return "<img src='img/Aries.jpg'>";
    }
}