function changeText() {
    document.getElementById("text").innerHTML = "Text changed!";
    document.getElementById("text").style.color = "red";
}
function addListItem() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("New Item"));
    ul.appendChild(li);
}
function toggleVisibility() {
    let para = document.getElementById("text");
    if (para.style.display === "none") {
        para.style.display = "block";
    }
    else {
        para.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleBtn").addEventListener("click", toggleVisibility);
    document.getElementById("addItemBtn").addEventListener("click", addListItem);
});
