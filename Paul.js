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
    console.log("wus poppin");
}
function displayBirds(){
    console.log("wus poppin b");
}
function displayMammals(){
    console.log("wus poppin boo");
}
function displayFungi(){
    console.log("wus poppin blood");
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