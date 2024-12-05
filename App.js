window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function myFunction() {   
  //Añade una clase al elemento que tenga el id myDropdown
  document.getElementById("myDropdown").classList.toggle("show");
}

//Cierra el submenu si se clica fuera
window.onclick = function(event){
  if(!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0;  i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      //Busca dentro de drop-content los elementos con la clase show
      if (openDropdown.classList.contains('show')){
        //elimina la clase show de los elementos dentro de drop-content
        openDropdown.classList.remove('show');
      }
    }
  }
}