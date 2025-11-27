window.onload = function() {
var panel = document.querySelector(".panel");
if (panel) {
    var header = document.createElement("div");
    header.innerHTML = "<div style = 'text-align:center;'>Условные обозначения</div>";
    header.style.margin = "15px"
    panel.insertBefore(header, panel.firstChild);
    

} 
}