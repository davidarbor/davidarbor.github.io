$(document).ready(function(){
    $('#contentformammals').hide();
    $('#contentforbirds').hide();
    $('#contentforplants').hide();
    $('#contentforfungi').hide();
    $('#tilden').html("<img width='500' height='500' src='img/Tilden%20Park.png'>");
    $('#redwood').html("<img width='500' height='500' src='img/Redwood%20Park.png'>");
    $('#wildcat').html("<img width='500' height='500' src='img/Wildcat%20Park.png'>");
    $('#claremont').html("<img width='500' height='500' src='img/Claremont%20Canyon%20Park.png'>");
    $('#tilden').hide();
    $('#redwood').hide();
    $('#wildcat').hide();
    $('#claremont').hide();

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
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').hide();
            break;

        case "2":
            $('#tilden').hide();
            $('#redwood').show();
            $('#wildcat').hide();
            $('#claremont').hide();
            break;

        case "3":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').show();
            $('#claremont').hide();
            break;

        case "4":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').show();
            break;
    }
}