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

var tableHeader = ("<tr> <th width='100px'>Kingdom</th> <th width='100px'>Phylum</th> <th width='100px'>Class</th> <th width='100px'>Order</th> <th width='100px'>Family</th><th width='100px'>Genus</th> <th width='100px'>Species</th> <th width='100px'>Common name</th> </tr>");

function fungi(){
    $("body").pagecontainer("change", "#page3", {});
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<tildenFungi.length; i++){
        var row=('<tr class="data">'+makeCell(tildenFungi[i].kingdom, tildenFungi[i].phylum, tildenFungi[i].class, tildenFungi[i].order, tildenFungi[i].family, tildenFungi[i].genus, tildenFungi[i].taxon_name, tildenFungi[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function plants(){
    $("body").pagecontainer("change", "#page3", {});
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<tildenPlants.length; i++){
        var row=('<tr class="data">'+makeCell(tildenPlants[i].kingdom, tildenPlants[i].phylum, tildenPlants[i].class, tildenPlants[i].order, tildenPlants[i].family, tildenPlants[i].genus, tildenPlants[i].taxon_name, tildenPlants[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function birds(){
    $("body").pagecontainer("change", "#page3", {});
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<tildenBirds.length; i++){
        var row=('<tr class="data">'+makeCell(tildenBirds[i].kingdom, tildenBirds[i].phylum, tildenBirds[i].class, tildenBirds[i].order, tildenBirds[i].family, tildenBirds[i].genus, tildenBirds[i].taxon_name, tildenBirds[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}
function animals(){
    $("body").pagecontainer("change", "#page3", {});
    var $table=$('#displayTable');
    $table.empty();
    $table.append(tableHeader);
    for(i=0; i<tildenOther.length; i++){
        var row=('<tr class="data">'+makeCell(tildenOther[i].kingdom, tildenOther[i].phylum, tildenOther[i].class, tildenOther[i].order, tildenOther[i].family, tildenOther[i].genus, tildenOther[i].taxon_name, tildenOther[i].taxon_common_name) + '</tr>');
        $table.append(row);
    }
}

function makeCell(kingdom, phylum, sclass, order,family, genus, species, common){
    return '<td>'+kingdom+'</td><td>'+phylum+'</td><td>'+sclass+'</td><td>'+order+'</td><td>'+family+'</td>'+'</td><td>'+genus+'</td>'+'</td><td>'+species+'</td>'+'</td><td>'+common+'</td>'
}