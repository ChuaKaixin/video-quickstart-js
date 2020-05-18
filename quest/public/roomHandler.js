function buttonToggle(disableElementId, enableElementId) {
    var x = document.getElementById(disableElementId);
    x.style.display = "none";
    var y = document.getElementById(enableElementId);
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
}