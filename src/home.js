let homePage = function() {
    let content = document.querySelector("#content");
    
    
    let header = document.createElement("header");
    header.classList.add("header");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Layken's Cajun Restaurant"
    let headdiv = document.createElement("div");
    headdiv.classList.add("headerdiv");
    let tab1 = document.createElement("button");
    tab1.setAttribute("id","tab1");
    tab1.classList.add("tab");
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
    body.classList.add("homebody");
    let bodyContent = document.createElement("div");
    bodyContent.classList.add("homebodycontent");
    let p1 = document.createElement("p");
    p1.classList.add("homebodytext");
    p1.textContent = "The Finest Cajun Cuisine";
    let p2 = document.createElement("p");
    p2.classList.add("homebodytext");
    p2.textContent = "Made with passion since 2022";
    let bodyImg = document.createElement("img");
    bodyImg.classList.add("homepic");
    bodyImg.src = "../src/img/swamp-daddy.jpg";
    let p3 = document.createElement("p");
    p3.classList.add("homebodytext");
    p3.textContent = "Order online or visit us!";
    
    
    
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
    bodyContent.appendChild(p1);
    bodyContent.appendChild(p2);
    bodyContent.appendChild(bodyImg);
    bodyContent.appendChild(p3);
    content.appendChild(footer);
    footer.appendChild(footerText);
}

export {homePage};