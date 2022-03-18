let aboutPage = function() {
    let content = document.querySelector("#content");
    
    
    let header = document.createElement("header");
    header.classList.add("header");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Layken's Cajun Restaurant"
    let headdiv = document.createElement("div");
    headdiv.classList.add("headerdiv");
    let tab1 = document.createElement("button");
    tab1.classList.add("tab");
    tab1.setAttribute("id","tab1");
    tab1.textContent = "Home";
    let tab2 = document.createElement("button");
    tab2.classList.add("tab");
    tab2.setAttribute("id","tab2");
    tab2.textContent = "Menu";
    let tab3 = document.createElement("button");
    tab3.classList.add("tab");
    tab3.setAttribute("id","tab3");
    tab3.textContent = "Contact";

    let body = document.createElement("div");
    body.classList.add("aboutbody");
    let bodyContent = document.createElement("div");
    bodyContent.classList.add("aboutbodycontent");
    let number = document.createElement("p");
    number.textContent = "Give us a call at 123-543-3321";
    number.classList.add("aboutnumber");
    let address = document.createElement("p");
    address.textContent = "We're at 12 Monroe Hwy, Pineville, LA, USA";
    address.classList.add("aboutaddress");
    let pic = document.createElement("img");
    pic.src = "./img/crawfish.jpeg";
    let sys = document.createElement("p");
    sys.textContent = "Hope to see you soon!";
    sys.classList.add("sys");

    let footer = document.createElement("footer");
    footer.classList.add("footer");
    let footerText = document.createElement("p");
    footerText.classList.add("footertext");
    footerText.textContent = "Copyright © 2022 LaykenV.dev";

    content.appendChild(header);
    header.appendChild(title);
    header.appendChild(headdiv);
    headdiv.appendChild(tab1);
    headdiv.appendChild(tab2);
    headdiv.appendChild(tab3);
    content.appendChild(body);
    body.appendChild(bodyContent);
    bodyContent.appendChild(number);
    bodyContent.appendChild(address);
    bodyContent.appendChild(pic);
    bodyContent.appendChild(sys);
    content.appendChild(footer);
    footer.appendChild(footerText);
}

export {aboutPage};