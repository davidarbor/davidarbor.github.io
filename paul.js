$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
        $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});
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
    $('#fungiPlaceholder').hide();
    $('#plantsPlaceholder').hide();
    $('#birdsPlaceholder').hide();
    $('#animalsPlaceholder').hide();
    $('#fungiProtect').hide();
    $('#plantsProtect').hide();
    $('#birdsProtect').hide();
    $('#animalsProtect').hide();

    fungiArray=[];
    plantsArray=[];
    birdsArray=[];
    animalsArray=[];
});

function displayMapOne(){
    $("body").pagecontainer("change", "#page2", {});
    var area=document.getElementById("selectBox1").value;
    switch(area){
        case "1":
            fungiArray=tildenFungi;
            plantsArray=tildenPlants;
            birdsArray=tildenBirds;
            animalsArray=tildenOther;
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
            fungiArray=redwoodFungi;
            plantsArray=redwoodPlants;
            birdsArray=redwoodBirds;
            animalsArray=redwoodOther;
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
            fungiArray=wildcatFungi;
            plantsArray=wildcatPlants;
            birdsArray=wildcatBirds;
            animalsArray=wildcatOther;
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
            fungiArray=claremontFungi;
            plantsArray=claremontPlants;
            birdsArray=claremontBirds;
            animalsArray=claremontOther;
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
            fungiArray=tildenFungi;
            plantsArray=tildenPlants;
            birdsArray=tildenBirds;
            animalsArray=tildenOther;
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
            fungiArray=redwoodFungi;
            plantsArray=redwoodPlants;
            birdsArray=redwoodBirds;
            animalsArray=redwoodOther;
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
            fungiArray=wildcatFungi;
            plantsArray=wildcatPlants;
            birdsArray=wildcatBirds;
            animalsArray=wildcatOther;
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
            fungiArray=claremontFungi;
            plantsArray=claremontPlants;
            birdsArray=claremontBirds;
            animalsArray=claremontOther;
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

var tableHeader=("<tr><th width='100px'>Kingdom</th><th width='100px'>Phylum</th><th width='100px'>Class</th><th width='100px'>Order</th><th width='100px'>Family</th><th width='100px'>Genus</th><th width='100px'>Species</th><th width='100px'>Common name</th></tr>");

function fungi(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiProtect').show();
    $('#plantsProtect').hide();
    $('#birdsProtect').hide();
    $('#animalsProtect').hide();
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<fungiArray.length; i++){
        var row=('<tr class="data">'+makeCell(fungiArray[i].kingdom, fungiArray[i].phylum, fungiArray[i].class, fungiArray[i].order, fungiArray[i].family, fungiArray[i].genus, fungiArray[i].taxon_name, fungiArray[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function plants(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiProtect').hide();
    $('#plantsProtect').show();
    $('#birdsProtect').hide();
    $('#animalsProtect').hide();
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<plantsArray.length; i++){
        var row=('<tr class="data">'+makeCell(plantsArray[i].kingdom, plantsArray[i].phylum, plantsArray[i].class, plantsArray[i].order, plantsArray[i].family, plantsArray[i].genus, plantsArray[i].taxon_name, plantsArray[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function birds(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiProtect').hide();
    $('#plantsProtect').hide();
    $('#birdsProtect').show();
    $('#animalsProtect').hide();
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<birdsArray.length; i++){
        var row=('<tr class="data">'+makeCell(birdsArray[i].kingdom, birdsArray[i].phylum, birdsArray[i].class, birdsArray[i].order, birdsArray[i].family, birdsArray[i].genus, birdsArray[i].taxon_name, birdsArray[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function animals(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiProtect').hide();
    $('#plantsProtect').hide();
    $('#birdsProtect').hide();
    $('#animalsProtect').show();
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<animalsArray.length; i++){
        var row=('<tr class="data">'+makeCell(animalsArray[i].kingdom, animalsArray[i].phylum, animalsArray[i].class, animalsArray[i].order, animalsArray[i].family, animalsArray[i].genus, animalsArray[i].taxon_name, animalsArray[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}

function makeCell(kingdom, phylum, sclass, order,family, genus, species, common){
    return '<td>'+kingdom+'</td><td>'+phylum+'</td><td>'+sclass+'</td><td>'+order+'</td><td>'+family+'</td>'+'</td><td>'+genus+'</td>'+'</td><td>'+species+'</td>'+'</td><td>'+common+'</td>'
}

function protect(){
    $("body").pagecontainer("change", "#page4", {});
}