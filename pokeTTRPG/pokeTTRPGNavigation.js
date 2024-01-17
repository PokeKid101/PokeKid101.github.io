// Name of the element holding this navigation bar
let pokeTTRPGBar = "pokeTTRPGNavigationBar";

// List of all pages on navigation bar
let pokeTTRPG_Links = 
    ["mainPages/pokeTTRPG.html",
     "pokeTTRPG/stats.html"
];
// List of all text displayed in navigation bar
// Text alligns with links on href_Links
let pokeTTRPG_DisplayText = 
    ["PokeTTRPG Home",
     "Stat System"
];

function updatePokeTTRPGNavBar(){
    let navElement = document.getElementById(pokeTTRPGBar);
    let navHTML = "<nav>";
    let hrefLinks = pokeTTRPG_Links;
    let displayText = pokeTTRPG_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}