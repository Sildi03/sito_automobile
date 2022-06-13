
//alert("BENVENUTI IN QUESTO MONDO FANTASTICO: MERCEDES BENZ");

function ciao(){
  //document.getElementsByClassName("lista").innerHTML = "ciao";

  alert("hai cliccato su di me");
}


function placeholdergiallo() {
  document.getElementById("cerca").style.backgroundColor = "yellow";
}

function amg_giallo(){
  document.getElementById("amgbox").style.color = "yellow";
}

function g(){
  document.getElementById("testo_rosso").style.color = "red";
}

function colore_sfondo_suv(){
  document.getElementById("suv").style.backgroundColor = "red";
}

function colore_sfondo_a45(){
  document.getElementById("a45").style.backgroundColor = "red";
}

function apri_chiudi_hamburgher(){
  var hamburgher = document.getElementsByClassName("hamburgher_menu")[0].classList.contains("prova");
  if (hamburgher){
    document.getElementsByClassName("hamburgher_menu")[0].classList.remove("prova")
  } else {
    document.getElementsByClassName("hamburgher_menu")[0].classList.add("prova")
  };


 

  /*function apri_chiudi_menu(){
        var headermenuhc = document.getElementsByClassName("header__menu")[0].classList.contains("header__menu--open");
        if (headermenuhc){
          document.getElementsByClassName("header__menu")[0].classList.remove("header__menu--open");
        } else {
          document.getElementsByClassName("header__menu")[0].classList.add("header__menu--open");
        }
      }*/
}