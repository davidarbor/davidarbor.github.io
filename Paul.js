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