// Name of the element holding this navigation bar
let teritaBar = "teritaNavigationBar";

// List of all pages on navigation bar
let terita_Links = 
    ["mainPages/teritaProject.html", 
     "teritaProject/characters.html",
     "teritaProject/peoples.html",
     "teritaProject/locations.html",
     "teritaProject/lore.html"
];
// List of all text displayed in navigation bar
// Text alligns with links on href_Links
let terita_DisplayText = 
    ["Terita Home",
     "Characters",
     "Peoples",
     "Locations",
     "Lore"
];

function updateTeritaNavBar(){
    let navElement = document.getElementById(teritaBar);
    let navHTML = "<nav>";
    let hrefLinks = terita_Links;
    let displayText = terita_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}