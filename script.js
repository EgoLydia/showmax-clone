var myQuestions = document.getElementsByClassName("faq-quest-holder")[0]
var myAnswer = document.getElementsByClassName("faq-ans")[0]
var icon = myQuestions.getElementsByTagName("i")[0]

myQuestions.addEventListener("click", myFunction)
var none = ""
function myFunction() {
    var display = myAnswer.style.display;
    if (display == none) {
        myAnswer.style.display = "block";
        icon.classList.remove("ri-add-fill")
        icon.classList.add("ri-subtract-line")
    } else {
        myAnswer.style.display = none;
        icon.classList.remove("ri-subtract-line")
        icon.classList.add("ri-add-fill")
    }

}

var myQuestion2 = document.getElementsByClassName("faq-quest-holder")[1]
var myAnswer2 = document.getElementsByClassName("faq-ans")[1]
var icon1 = myQuestion2.getElementsByTagName("i")[0]


myQuestion2.addEventListener("click", myFunction1)
function myFunction1() {
    var display = myAnswer2.style.display;
    if (display == none) {
        myAnswer2.style.display = "block";
        icon1.classList.remove("ri-add-fill")
        icon1.classList.add("ri-subtract-line")


    } else {
        myAnswer2.style.display = none;
        icon1.classList.remove("ri-subtract-line")
        icon1.classList.add("ri-add-fill")


    }

}

var myQuestion3 = document.getElementsByClassName("faq-quest-holder")[2]
var myAnswer3 = document.getElementsByClassName("faq-ans")[2]
var icon2 = myQuestion3.getElementsByTagName("i")[0]


myQuestion3.addEventListener("click", myFunction2)
function myFunction2() {
    var display = myAnswer3.style.display;
    if (display == none) {
        myAnswer3.style.display = "block";
        icon2.classList.remove("ri-add-fill")
        icon2.classList.add("ri-subtract-line")

    } else {
        myAnswer3.style.display = none;
        icon2.classList.remove("ri-subtract-line")
        icon2.classList.add("ri-add-fill")

    }

}

var myQuestion4 = document.getElementsByClassName("faq-quest-holder")[3]
var myAnswer4 = document.getElementsByClassName("faq-ans")[3]
var icon3 = myQuestion4.getElementsByTagName("i")[0]


myQuestion4.addEventListener("click", myFunction3)
function myFunction3() {
    var display = myAnswer4.style.display;
    if (display == none) {
        myAnswer4.style.display = "block";
        icon3.classList.remove("ri-add-fill")
        icon3.classList.add("ri-subtract-line")
    } else {
        myAnswer4.style.display = none;
        icon3.classList.remove("ri-subtract-line")
        icon3.classList.add("ri-add-fill")

    }

}

var myQuestion5 = document.getElementsByClassName("faq-quest-holder")[4]
var myAnswer5 = document.getElementsByClassName("faq-ans")[4]
var icon4 = myQuestion5.getElementsByTagName("i")[0]


myQuestion5.addEventListener("click", myFunction4)
function myFunction4() {
    var display = myAnswer5.style.display;
    if (display == none) {
        myAnswer5.style.display = "block";
        icon4.classList.add("ri-subtract-line")
        icon4.classList.remove("ri-add-fill")

    } else {
        myAnswer5.style.display = none;
        icon4.classList.remove("ri-subtract-line")
        icon4.classList.add("ri-add-fill")

    }

}

var myQuestion6 = document.getElementsByClassName("faq-quest-holder")[5]
var myAnswer6 = document.getElementsByClassName("faq-ans")[5]
var icon5 = myQuestion6.getElementsByTagName("i")[0]


myQuestion6.addEventListener("click", myFunction5)
function myFunction5() {
    var display = myAnswer6.style.display;
    if (display == none) {
        myAnswer6.style.display = "block";
        icon5.classList.add("ri-subtract-line")
        icon5.classList.remove("ri-add-fill")

    } else {
        myAnswer6.style.display = none;
        icon5.classList.remove("ri-subtract-line")
        icon5.classList.add("ri-add-fill")

    }

}

var myQuestion7 = document.getElementsByClassName("faq-quest-holder")[6]
var myAnswer7 = document.getElementsByClassName("faq-ans")[6]
var icon6 = myQuestion7.getElementsByTagName("i")[0]


myQuestion7.addEventListener("click", myFunction6)
function myFunction6() {
    var display = myAnswer7.style.display;
    if (display == none) {
        myAnswer7.style.display = "block";
        icon6.classList.add("ri-subtract-line")
        icon6.classList.remove("ri-add-fill")

    } else {
        myAnswer7.style.display = none;
        icon6.classList.remove("ri-subtract-line")
        icon6.classList.add("ri-add-fill")

    }

}

var myQuestion8 = document.getElementsByClassName("faq-quest-holder")[7]
var myAnswer8 = document.getElementsByClassName("faq-ans")[7]
var icon7 = myQuestion8.getElementsByTagName("i")[0]


myQuestion8.addEventListener("click", myFunction7)
function myFunction7() {
    var display = myAnswer8.style.display;
    if (display == none) {
        myAnswer8.style.display = "block";
        icon7.classList.add("ri-subtract-line")
        icon7.classList.remove("ri-add-fill")

    } else {
        myAnswer8.style.display = none;
        icon7.classList.remove("ri-subtract-line")
        icon7.classList.add("ri-add-fill")

    }

}

var myQuestion9 = document.getElementsByClassName("faq-quest-holder")[8]
var myAnswer9 = document.getElementsByClassName("faq-ans")[8]
var icon8 = myQuestion9.getElementsByTagName("i")[0]

myQuestion9.addEventListener("click", myFunction8)
function myFunction8() {
    var display = myAnswer9.style.display;
    if (display == none) {
        myAnswer9.style.display = "block";
        icon8.classList.add("ri-subtract-line")
        icon8.classList.remove("ri-add-fill")

    } else {
        myAnswer9.style.display = none;
        icon8.classList.remove("ri-subtract-line")
        icon8.classList.add("ri-add-fill")

    }

}