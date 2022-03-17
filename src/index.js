console.log("win");
import {homePage} from "./home.js";
import {menuPage} from "./menu.js";
import {aboutPage} from "./about.js";
homePage();
let content = document.querySelector("#content");
let tab1 = document.getElementById("#tab1");
let tab2 = document.getElementById("#tab2");
let tab3 = document.getElementById("#tab3");

document.body.addEventListener("click", function(e) {
    if(e.target.id == "tab1") {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        homePage();
    }
    else if (e.target.id == "tab2") {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        menuPage();
    }
    else if (e.target.id == "tab3") {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        aboutPage();
    }
})