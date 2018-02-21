/*kode som viser dialogbokser som kun er relevant
om du krysser av for et spesielt alternativ,
eller fjerner den om det er trykket feil*/
// denne funksjonen funker på checkboox
function showHideCampus(){
  var x =document.getElementById("C").checked;
  if(x==true){
    document.getElementById("campus").style.display="inline";
  } else {document.getElementById("campus").style.display="none";}
}
// denne og neste funksjon funker på radio button, må ha en funksjon pr button
function showCampusTG(){
    document.getElementById("jaTGCampus").style.display="inline";
  }
function hideCampusTG(){
  document.getElementById("jaTGCampus").style.display="none";
}
function showCampusKKU(){
  document.getElementById("jaKKUCampus").style.display="inline";
}
function hideCampusKKU(){
  document.getElementById("jaKKUCampus").style.display="none";
}
function showHideAula(){
  var x =document.getElementById("A").checked;
  if(x==true){
    document.getElementById("jaAula").style.display="inline";
  } else {document.getElementById("jaAula").style.display="none";
}
}
function showAulaTG(){
  document.getElementById("jaTGAula").style.display="inline";
}
function hideAulaTG(){
  document.getElementById("jaTGAula").style.display="none";
}
function showAulaK7(){
  document.getElementById("jaK7Aula").style.display="inline";
}
function hideAulaK7(){
  document.getElementById("jaK7Aula").style.display="none";
}
function showHideFuken(){
  var x =document.getElementById("F").checked;
  if(x==true){
    document.getElementById("jaFuken").style.display="inline";
  } else {document.getElementById("jaFuken").style.display="none";
}
}
function showHideKlubben(){
  var x =document.getElementById("K").checked;
  if(x==true){
    document.getElementById("jaKlubben").style.display="inline";
  } else {document.getElementById("jaKlubben").style.display="none";
}
}
function showHideStudentkantinen(){
  var x =document.getElementById("S").checked;
  if(x==true){
    document.getElementById("jaStudentkantinen").style.display="inline";
  } else {document.getElementById("jaStudentkantinen").style.display="none";
}
}
function showStudentkantinenTG(){
  document.getElementById("jaTGStudentkantinen").style.display="inline";
}
function hideStudentkantinenTG(){
  document.getElementById("jaTGStudentkantinen").style.display="none";
}
function showStudentkantinenK7(){
  document.getElementById("jaK7Studentkantinen").style.display="inline";
}
function hideStudentkantinenK7(){
  document.getElementById("jaK7Studentkantinen").style.display="none";
}
function showHidePersonalkantinen(){
  var x =document.getElementById("P").checked;
  if(x==true){
    document.getElementById("jaPersonalkantinen").style.display="inline";
  } else {document.getElementById("jaPersonalkantinen").style.display="none";
}
}
