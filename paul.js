$(document).ready(function(){
    $('#tilden').html("<img width='400' height='400' src='img/Tilden%20Park.png'>");
    $('#redwood').html("<img width='400' height='400' src='img/Redwood%20Park.png'>");
    $('#wildcat').html("<img width='400' height='400' src='img/Wildcat%20Park.png'>");
    $('#claremont').html("<img width='400' height='400' src='img/Claremont%20Canyon%20Park.png'>");
    $('#tilden').hide();
    $('#redwood').hide();
    $('#wildcat').hide();
    $('#claremont').hide();
    $('#tildenInfo').hide();
    $('#redwoodInfo').hide();
    $('#wildcatInfo').hide();
    $('#claremontInfo').hide();
});

function displayMapOne(){
    $("body").pagecontainer("change", "#page2", {});
    var area=document.getElementById("selectBox1").value;
    switch(area){
        case "1":
            $('#tilden').show();
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').hide();
            $('#tildenInfo').show();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').hide();
            $('#claremontInfo').hide();
            break;
        case "2":
            $('#tilden').hide();
            $('#redwood').show();
            $('#wildcat').hide();
            $('#claremont').hide();
            $('#tildenInfo').hide();
            $('#redwoodInfo').show();
            $('#wildcatInfo').hide();
            $('#claremontInfo').hide();
            break;
        case "3":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').show();
            $('#claremont').hide();
            $('#tildenInfo').hide();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').show();
            $('#claremontInfo').hide();
            break;
        case "4":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').show();
            $('#tildenInfo').hide();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').hide();
            $('#claremontInfo').show();
            break;
    }
}
function displayMapTwo(){
    var area=document.getElementById("selectBox2").value;
    switch(area){
        case "1":
            $('#tilden').show();
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').hide();
            $('#tildenInfo').show();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').hide();
            $('#claremontInfo').hide();
            break;
        case "2":
            $('#tilden').hide();
            $('#redwood').show();
            $('#wildcat').hide();
            $('#claremont').hide();
            $('#tildenInfo').hide();
            $('#redwoodInfo').show();
            $('#wildcatInfo').hide();
            $('#claremontInfo').hide();
            break;
        case "3":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').show();
            $('#claremont').hide();
            $('#tildenInfo').hide();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').show();
            $('#claremontInfo').hide();
            break;
        case "4":
            $('#tilden').hide();
            $('#redwood').hide();
            $('#wildcat').hide();
            $('#claremont').show();
            $('#tildenInfo').hide();
            $('#redwoodInfo').hide();
            $('#wildcatInfo').hide();
            $('#claremontInfo').show();
            break;
    }
}

function fungi(){
    $("body").pagecontainer("change", "#page3", {});
}
function plants(){
    $("body").pagecontainer("change", "#page3", {});
}
function birds(){
    $("body").pagecontainer("change", "#page3", {});
}
function mammals(){
    $("body").pagecontainer("change", "#page3", {});
}