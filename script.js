function get_anime(){

  //getting the spinner element
  var spinner = document.getElementById("spinner");

  //getting the button element
  var button_hide = document.getElementById("button");
  var reset_button = document.getElementById("reset");

  //To set the button to hide 
  button_hide.style.display = "none";
  reset_button.style.display ="none"

  //To set the spinner to display
  spinner.style.display = "block";

  //To Get the input elements
  var anime_name = document.getElementById("name");
  var character = document.getElementById("character");
  var quote = document.getElementById("quote");

  //Making the js to async using setTimeout
  setTimeout(async function(){
    var api = await fetch("https://animechan.vercel.app/api/random");
    var data  = await api.json();

    anime_name.value = data.anime;
    character.value = data.character;
    quote.value = data.quote;

    spinner.style.display = "none";
    button_hide.style.display = "block"
    reset_button.style.display = "block"
  },1000)
}

function resets(){
  var anime_name = document.getElementById("name");
  var character = document.getElementById("character");
  var quote = document.getElementById("quote");

  anime_name.value = "";
  character.value = "";
  quote.value = "";
  console.log("reset")
}