var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

// New List Items
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";
    li.appendChild(btn2);
    // ! Removes Element
    btn2.addEventListener("click", function() {
        li.parentNode.removeChild(li);
    });
    //! Marks code as done
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });
    // ! Finally Adds the element
    ul.appendChild(li);
    input.value = "";
    }

//Edits to existing line items to fit coursework

Array.from(items).forEach(function(item) {
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";
    item.appendChild(btn2);
    // REmoves element
    btn2.addEventListener("click", function() {
        item.parentNode.removeChild(item);
    })
    //
    item.addEventListener("click", function () {
        item.classList.toggle("done");
    })
})




function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);