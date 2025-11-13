function displayRadioValue(){
   var elemento = document.getElementsByName('gender')

   for(i = 0; i < elemento.length; i++){
    if(elemento[i].checked)
        document .getElementsByName("result").innerHTML = "genero: " +elemento[i].value 
   }








}