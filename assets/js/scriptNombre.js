console.log ("sesión1 Web");

function  changeGreeting () {
    // TODO obtener nombre cliente 
        // console.log ("Cliente: " , getNameOfClient());
    const nombreCliente= getNameOfClient();

    // TODO obtener referencia de label h1
    const greetingReference = getReferenceOfGreeting();

    //TODO cambiar el salud 
    greetingReference.innerHTML ="Hola " + nombreCliente +" !";
}

function getNameOfClient () {
    const clientName= prompt("Escribe tu nombre")
    return clientName;
}

function getReferenceOfGreeting () {
    return document.getElementById("greeting");
} 
