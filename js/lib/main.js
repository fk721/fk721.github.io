var flag = true;

function switchStyles() {
    var body  = document.getElementsByTagName("BODY")[0];
    var links = document.getElementsByTagName("a");
    var sun   = document.getElementById("sunIcon");
    var moon  = document.getElementById("moonIcon");
    if (flag) {
        body.style = "color:white; background:black";
        for (var i = 0; i < links.length; ++i) {
            links[i].style = "color:white;"
            links[i].addEventListener("mouseover", function() {
                this.style.color = "#a9aaba";
            });
            links[i].addEventListener("mouseout", function() {
            this.style.color = "white";
            });
        }
        sun.style = "display: inline";
        moon.style = "display: none";
    } else {
        body.style = "color:black; background:white";
        for (var i = 0; i < links.length; ++i) {
            links[i].style = "color:black;"
            links[i].addEventListener("mouseover", function() {
                this.style.color = "#a9aaba";
            });
            links[i].addEventListener("mouseout", function() {
                this.style.color = "black";
            });
        }
        sun.style = "display: none";
        moon.style = "display: inline";
    }
    flag = !(flag);
}

