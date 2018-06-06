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

function fungi(){
    $("body").pagecontainer("change", "#page3", {});
    displayFungi();
    $('#fungiPlaceholder').show();
    $('#plantsPlaceholder').hide();
    $('#birdsPlaceholder').hide();
    $('#animalsPlaceholder').hide();
}
function plants(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiPlaceholder').hide();
    $('#plantsPlaceholder').show();
    $('#birdsPlaceholder').hide();
    $('#animalsPlaceholder').hide();
}
function birds(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiPlaceholder').hide();
    $('#plantsPlaceholder').hide();
    $('#birdsPlaceholder').show();
    $('#animalsPlaceholder').hide();
}
function animals(){
    $("body").pagecontainer("change", "#page3", {});
    $('#fungiPlaceholder').hide();
    $('#plantsPlaceholder').hide();
    $('#birdsPlaceholder').hide();
    $('#animalsPlaceholder').show();
}

function displayFungi(){
    var $table=$('#displayTable');
    for(i=0; i<tildenFungi.length; i++){
        var kingdom=tildenFungi[i].kingdom;
        var phylum=tildenFungi[i].phylum;
        var sclass=tildenFungi[i].class;
        var order=tildenFungi[i].order;
        var family=tildenFungi[i].family;
        var genus=tildenFungi[i].genus;
        var species=tildenFungi[i].taxon_name;
        var common=tildenFungi[i].taxon_common_name;
        var cell=('<td>'+kingdom+'</td><td>'+phylum+'</td><td>'+sclass+'</td><td>'+order+'</td><td>'+family+'</td>'+'</td><td>'+genus+'</td>'+'</td><td>'+species+'</td>'+'</td><td>'+common+'</td>');
        var row = ('<tr class="data">' + cell + '</tr>');
        $table.append(row);
    }
}