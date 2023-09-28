// Define global variables
let userSelects = document.getElementById("shape");
let parameterLabel = document.getElementsByClassName("paramLabel");
let parameterInput = document.getElementsByClassName("paramInput");
let calculated = document.getElementById("calculatedInpt");
let image = document.getElementById("shapeImage");

// Functions to run on page once loaded
setParameters();
calculated.disabled = true;


/// Functions to be used during execution

// Prep page for currently selected option
function setParameters(){
    let selection = userSelects.value;
    
    // Clear innerHTML for new option
    for(var i = 0; i< parameterLabel.length; i++){
        parameterLabel[i].innerHTML = "";
        parameterInput[i].value = "";
        parameterInput[i].hidden = true;
    }
    
    // Set HTML elements 
    switch(selection){
        // Rectangle/Square area
        case "rectArea":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Width:";
            parameterInput[1].hidden = false;
            image.src = "images/rectangle.png";
            image.alt = "(Rectangle Image)";
            break;
        // Triangle area
        case "triaArea":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Base:";
            parameterInput[1].hidden = false;
            image.src = "images/triangle.png";
            image.alt = "(Triangle Image)";
            break;
        // Trapazoid Area
        case "trapArea":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Base 1:";
            parameterInput[1].hidden = false;
            parameterLabel[2].innerHTML = "Base 2:";
            parameterInput[2].hidden = false;
            image.src = "images/trapazoid.png";
            image.alt = "(Trapazoid Image)";
            break;
        // Circle Area
        case "circArea":
            parameterLabel[0].innerHTML = "Radius:";
            parameterInput[0].hidden = false;
            image.src = "images/circle.png";
            image.alt = "(Circle Image)";
            break;
        // Rectangle Perimeter
        case "rectPeri":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Width:";
            parameterInput[1].hidden = false;
            image.src = "images/rectangle.png";
            image.alt = "(Rectangle Image)";
            break;
        // Triangle Perimeter
        case "triaPeri":
            parameterLabel[0].innerHTML = "Side 1:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Side 2:";
            parameterInput[1].hidden = false;
            parameterLabel[2].innerHTML = "Side 3:";
            parameterInput[2].hidden = false;
            image.src = "images/trianglePerimeter.png";
            image.alt = "(Triangle Image)";
            break;
        // Trapazoid Perimeter
        case "trapPeri":
            parameterLabel[0].innerHTML = "Base 1:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Base 2:";
            parameterInput[1].hidden = false;
            parameterLabel[2].innerHTML = "Side 1:";
            parameterInput[2].hidden = false;
            parameterLabel[3].innerHTML = "Side 2:";
            parameterInput[3].hidden = false;
            image.src = "images/trapazoidPerimeter.png";
            image.alt = "(Trapazoid Image)";
            break;
        // Circle Perimeter
        case "circPeri":
            parameterLabel[0].innerHTML = "Radius:";
            parameterInput[0].hidden = false;
            image.src = "images/circle.png";
            image.alt = "(Circle Image)";
            break;
        // Cube Surface Area
        case "cubeSA":
            parameterLabel[0].innerHTML = "Side Length:";
            parameterInput[0].hidden = false;
            image.src = "images/cube.png";
            image.alt = "(Cube Image)";
            break;
        // Rectangular Prism Surface Area
        case "rectSA":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Length:";
            parameterInput[1].hidden = false;
            parameterLabel[2].innerHTML = "Width:";
            parameterInput[2].hidden = false;
            image.src = "images/rectPrism.png";
            image.alt = "(Rectangular Prism Image)";
            break;
        // Cylinder Surface Area
        case "cyliSA":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Radius:";
            parameterInput[1].hidden = false;
            image.src = "images/cylinder.png";
            image.alt = "(Cylinder Image)";
            break;
        // Sphere Surface Area
        case "spheSA":
            parameterLabel[0].innerHTML = "Radius:";
            parameterInput[0].hidden = false;
            image.src = "images/sphere.png";
            image.alt = "(sphere Image)";
            break;
        // Cube Volume
        case "cubeVol":
            parameterLabel[0].innerHTML = "Side Length:";
            parameterInput[0].hidden = false;
            image.src = "images/cube.png";
            image.alt = "(Cube Image)";
            break;
        // Rectangular Prism Volume
        case "rectVol":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Length:";
            parameterInput[1].hidden = false;
            parameterLabel[2].innerHTML = "Width:";
            parameterInput[2].hidden = false;
            image.src = "images/rectPrism.png";
            image.alt = "(Rectangular Prism Image)";
            break;
        // Cylinder Volume
        case "cyliVol":
            parameterLabel[0].innerHTML = "Height:";
            parameterInput[0].hidden = false;
            parameterLabel[1].innerHTML = "Radius:";
            parameterInput[1].hidden = false;
            image.src = "images/cylinder.png";
            image.alt = "(cylinder Image)";
            break;
        // Sphere Volume
        case "spheVol":
            parameterLabel[0].innerHTML = "Radius:";
            parameterInput[0].hidden = false;
            image.src = "images/sphere.png";
            image.alt = "(sphere Image)";
            break;
        default:
            break;
    }
    
    image.height = 200;
    calculated.value = "";
    
}


function geometryFunctions(){
    let selection = userSelects.value;
    
    // Calculate selected option 
    switch(selection){
        // Rectangle/Square Area
        case "rectArea":
            let heightRect = parseFloat(parameterInput[0].value);
            let widthRect = parseFloat(parameterInput[1].value);
            calculated.value = heightRect * widthRect;
            break;
        // Triangle Area
        case "triaArea":
            let heightTria = parseFloat(parameterInput[0].value);
            let baseTria = parseFloat(parameterInput[1].value);
            calculated.value = (heightTria * baseTria) / 2;
            break;
        // Trapazoid Area
        case "trapArea":
            let heightTrap = parseFloat(parameterInput[0].value);
            let baseTrap1 = parseFloat(parameterInput[1].value);
            let baseTrap2 = parseFloat(parameterInput[2].value);
            calculated.value = (baseTrap1 + baseTrap2) * heightTrap / 2;
            break;
        // Circle Area
        case "circArea":
            let radiusCirc = parseFloat(parameterInput[0].value);
            calculated.value = 3.14 * radiusCirc * radiusCirc;
            break;
        // Rectangle Perimeter
        case "rectPeri":
            let heightRectPeri = parseFloat(parameterInput[0].value);
            let widthRectPeri = parseFloat(parameterInput[1].value);
            calculated.value = (2 * heightRectPeri) + (2 * widthRectPeri);
            break;
        // Triangle Perimeter
        case "triaPeri":
            let side1Tri = parseFloat(parameterInput[0].value);
            let side2Tri = parseFloat(parameterInput[1].value);
            let side3Tri = parseFloat(parameterInput[2].value);
            calculated.value = side1Tri + side2Tri + side3Tri;
            break;
        // Trapazoid Perimeter
        case "trapPeri":
            let base1Trap = parseFloat(parameterInput[0].value);
            let base2Trap = parseFloat(parameterInput[1].value);
            let side1Trap = parseFloat(parameterInput[2].value);
            let side2Trap = parseFloat(parameterInput[3].value);
            calculated.value = base1Trap + base2Trap + side1Trap + side2Trap;
            break;
        // Circle Perimeter
        case "circPeri":
            let radiusCircPeri = parseFloat(parameterInput[0].value);
            calculated.value = 2 * 3.14 * radiusCircPeri;
            break;
        // Cube Surface Area
        case "cubeSA":
            let sideCubeSA = parseFloat(parameterInput[0].value);
            calculated.value = 6 * (sideCubeSA * sideCubeSA);
            break;
        // Rectangular Prism Surface Area
        case "rectSA":
            let heightRectPrismSA = parseFloat(parameterInput[0].value);
            let lengthRectPrismSA = parseFloat(parameterInput[1].value);
            let widthRectPrismSA = parseFloat(parameterInput[2].value);
            calculated.value = (2 * (heightRectPrismSA * lengthRectPrismSA)) + (2 * (lengthRectPrismSA * widthRectPrismSA)) + (2 * (widthRectPrismSA * heightRectPrismSA));
            break;
        // Cylinder Surface Area
        case "cyliSA":
            let heightCyliSA = parseFloat(parameterInput[0].value);
            let radiusCyliSA = parseFloat(parameterInput[1].value);
            calculated.value = (2 * (3.14 * radiusCyliSA * radiusCyliSA)) + (heightCyliSA * (2 * 3.14 * radiusCyliSA));
            break;
        // Sphere Surface Area
        case "spheSA":
            let radiusSpheSA = parseFloat(parameterInput[0].value);
            calculated.value = 4 * 3.14 * radiusSpheSA * radiusSpheSA;
            break;
        // Cube Volume
        case "cubeVol":
            let sideCubeVol = parseFloat(parameterInput[0].value);
            calculated.value = sideCubeVol * sideCubeVol * sideCubeVol;
            break;
        // Rectangular Prism Volume
        case "rectVol":
            let heightRectPrismVol = parseFloat(parameterInput[0].value);
            let lengthRectPrismVol = parseFloat(parameterInput[1].value);
            let widthRectPrismVol = parseFloat(parameterInput[2].value);
            calculated.value = heightRectPrismVol * lengthRectPrismVol * widthRectPrismVol;
            break;
        // Cylinder Volume
        case "cyliVol":
            let heightCyliVol = parseFloat(parameterInput[0].value);
            let radiusCyliVol = parseFloat(parameterInput[1].value);
            calculated.value = 3.14 * radiusCyliVol * radiusCyliVol * heightCyliVol;
            break;
        // Sphere Volume
        case "spheVol":
            let radiusSpheVol = parseFloat(parameterInput[0].value);
            calculated.value = (4 / 3) * 3.14 * radiusSpheVol * radiusSpheVol * radiusSpheVol;
            break;
        default:
            calculated.value = 0;
            break;
    }
    
}
