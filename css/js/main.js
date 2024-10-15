function myMenufunction() {
    var menuBtn = document.getElementById("myNavMenu")

    if(menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }

}