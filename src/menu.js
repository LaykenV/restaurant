let menuPage = function() {
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
    body.classList.add("menubody");
    let bodyContent = document.createElement("div");
    bodyContent.classList.add("menubodycontent");
    let item1 = document.createElement("div");
    item1.classList.add("menuitem");
    let item1pic = document.createElement("img");
    item1pic.src = "./img/swamp-daddy.jpg";
    let item1title = document.createElement("p");
    item1title.classList.add("menuitemtitle");
    item1title.textContent = "Crawfish Platter";
    let item1D = document.createElement("p");
    item1D.textContent = "Spicy cajun crawfish in a 3lb platter or 5lb platter";

    let item2 = document.createElement("div");
    item2.classList.add("menuitem");
    let item2pic = document.createElement("img");
    item2pic.src = "./img/shrimpp.jpeg";
    let item2title = document.createElement("p");
    item2title.classList.add("menuitemtitle");
    item2title.textContent = "Boiled Shrimp";
    let item2D = document.createElement("p");
    item2D.textContent = "Spicy boiled shrimp sold by the pound";

    let item3 = document.createElement("div");
    item3.classList.add("menuitem");
    let item3pic = document.createElement("img");
    item3pic.src = "./img/pasta.jpeg";
    let item3title = document.createElement("p");
    item3title.classList.add("menuitemtitle");
    item3title.textContent = "Pastalaya";
    let item3D = document.createElement("p");
    item3D.textContent = "Cajun pastalaya made with chicken, pork, and tasso"

    let item4 = document.createElement("div");
    item4.classList.add("menuitem");
    let item4pic = document.createElement("img");
    item4pic.src = "./img/ett.jpeg";
    let item4title = document.createElement("p");
    item4title.classList.add("menuitemtitle");
    item4title.textContent = "Crawfish Ettoufee";
    let item4D = document.createElement("p");
    item4D.textContent = "Ettoufee made with in-house crawfish tails, served over white rice";

    let item5 = document.createElement("div");
    item5.classList.add("menuitem");
    let item5pic = document.createElement("img");
    item5pic.src = "./img/steak.jpeg";
    let item5title = document.createElement("p");
    item5title.classList.add("menuitemtitle");
    item5title.textContent = "Prime Ribeye";
    let item5D = document.createElement("p");
    item5D.textContent = "USDA Prime ribeye served with baked potato";

    let item6 = document.createElement("div");
    item6.classList.add("menuitem");
    let item6pic = document.createElement("img");
    item6pic.src = "./img/burger.jpeg";
    let item6title = document.createElement("p");
    item6title.classList.add("menuitemtitle");
    item6title.textContent = "House Burger";
    let item6D = document.createElement("p");
    item6D.textContent = "1/4lb patty on brioche bun with cheese and house sauce";

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
    bodyContent.appendChild(item1);
    item1.appendChild(item1pic);
    item1.appendChild(item1title);
    item1.appendChild(item1D);
    bodyContent.appendChild(item2);
    item2.appendChild(item2pic);
    item2.appendChild(item2title);
    item2.appendChild(item2D);
    bodyContent.appendChild(item3);
    item3.appendChild(item3pic);
    item3.appendChild(item3title);
    item3.appendChild(item3D);
    bodyContent.appendChild(item4);
    item4.appendChild(item4pic);
    item4.appendChild(item4title);
    item4.appendChild(item4D);
    bodyContent.appendChild(item5);
    item5.appendChild(item5pic);
    item5.appendChild(item5title);
    item5.appendChild(item5D);
    bodyContent.appendChild(item6);
    item6.appendChild(item6pic);
    item6.appendChild(item6title);
    item6.appendChild(item6D);
    content.appendChild(footer);
    footer.appendChild(footerText);
}

export {menuPage};