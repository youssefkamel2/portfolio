//style switcher

var links = document.querySelectorAll(".atrernate-style");

function setActiveStyle(color) {
    
    for (var i = 0; i < links.length ; i++) {

        if (color === links[i].getAttribute("title") ) {

            links[i].removeAttribute("disabled")

        }else {

            links[i].setAttribute("disabled", "true")

        }

    }

}

// body skin
var bodyskin = document.querySelectorAll(".body-skin");

for (var i = 0; i < bodyskin.length ; i++) {

    bodyskin[i].addEventListener("click", function() {

        if (this.value === "light") {

            $("body").removeClass("dark")

        } else {

            $("body").addClass("dark");

        }

    })

}

$(".body-skin2").on("click",function() {

    $("body").toggleClass("dark")
    $(this).toggleClass("dark")

})


// toggle style switcher

$(".toggle-style-switcher").on("click", function() {

    $(".style-switcher").toggleClass("styleopen");

});