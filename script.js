var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");




button.addEventListener("click", function() {
    // !next line makes sure nothing happens if nothings entered
    // ! by making sure something only happens if somethings entered,
    // ! Code does nothing if the input has no length/value
    if (input.value.length > 0) {
    // !Next section of code makes a new li variable and appends it to the UL
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})

// !Next section of code adds the event listener for the keyboard Enter button

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.key === "Enter") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})

for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}


for(var i=0; i<list.length; i++){
    list[i].addEventListener("click", liClick);
   }

function liClick(){
    this.classList.toggle("done");
  }