              /*===  Pop Up setting === */

var openbtn= document.querySelector('#open')
var closebtn = document.querySelectorAll('#back')

openbtn.addEventListener ('click',function (){
  document.querySelector('.popupcontaineur').style.left='-2%'
})

closebtn.forEach(function (btn) {
  btn.addEventListener ('click', function(){
    document.querySelector('.popupcontaineur').style.left='-1000px'
  })
})

/*VIRUTAL KEYBOARD*/
//Collect the keys, and match them
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".kbd-key");
  const story = document.querySelector("#story");

  const enterKey = document.querySelector("#enter");

  const deleteKey = document.querySelector("#backspc");


  let newValue = "";

  // The Story box
  kbdKey.forEach((value) => {
    value.addEventListener("click", (event) => {
      newValue = event.target.value;
      story.value += newValue;
    });
  });

  // Enter
  enterKey.addEventListener("click", () => {
    story.value += "\n";
  });

  // Delete
  deleteKey.addEventListener("click", () => {
    story.value = story.value.slice(0,-1);
  });

});

			/*WRITE TO ARRAY*/
// var keyboard=document.querySelector('.capskeyboard')
// var letter

// keyboard.addEventListener('click', function(){
// letter = document.getElementById("#Q").textContent
// alert(letter)
// })
