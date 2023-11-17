// Template for a reusable navigation bar
// NOTE: change variable names, function names, and declarations to match

// Name of the element holding this navigation bar
let templateBar = "";

// List of all pages on navigation bar
let template_Links = 
    ["", 
     ""
];
// List of all text displayed in navigation bar
// Text alligns with links on href_Links
let template_DisplayText = 
    ["",
     ""
];

function updateNavBar(){
    let navElement = document.getElementById(navigationBar);
    let navHTML = "<nav>";
    let hrefLinks = template_Links;
    let displayText = template_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}