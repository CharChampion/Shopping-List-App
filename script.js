function Add(){
    var item_input = document.getElementById("input");
    var item_text = item_input.value.trim();
    if (item_text == ""){
        alert("Please enter an item on your shopping list.")
    }
    const li = document.createElement("li");
    li.textContent = item_text;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    const DLT_Button = document.createElement("button");
    DLT_Button.textContent = "X";
    DLT_Button.className = "delete";
    DLT_Button.addEventListener("click", function(e){
    e.stopPropagation();
    li.remove();
})

    li.appendChild(DLT_Button);
    document.getElementById("shopping-list").appendChild(li);
}

