console.log("Holis desde un script externos");

/* 
Codigo mal elaborado porque no sintetiso ni preveengo cambios de ids
function changeColorToRed () {
    const refName = document.getElementById("nombre");
    refName.style.color = "red";
}

function changeColorToBlue () {
    const refName = document.getElementById("nombre");
    refName.style.color = "blue";
}

function changeColorToGreen () {
    const refName = document.getElementById("nombre");
    refName.style.color = "green";
} 
*/

/* 
function changeColorTo(color) {
    refName.style.color = color;
}
 */
function changeColorTo(color) {
    const refName = getReferenceFullName ();
    refName.style.color = color;
}

function getReferenceFullName() {
    return document.getElementById("fullname");
}


/* 
Si lo dejo aspi cambia de color , pero solo en un texto porque solo lo estopy referenciando
function changeColorParagraph (color){
    const refTxtGreen = document.getElementById("verde");
    refTxtGreen.style.color = color;
} */

// esta primera es para resetear color
function resetColor () {
    const colorCollection = document.getElementsByClassName ("text-color");
    console.log(colorCollection);
    for (let i = 0; i < colorCollection.length; i++) {
        const element = colorCollection [i];
        element.style.color = "violet";
    }

}

// esta primera es para establecer color dependiendo del this
function changeColorParagraph (color, refObj) {
    console.log(refObj);
    refObj.style.color = color;
}