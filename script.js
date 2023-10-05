const text = document.querySelectorAll(".texto");

const carouselItems = document.querySelectorAll(".carousel-item");

// FUNCION QUE ELIGE DE MANERA ALEATORIA UN PARRAFO

function randomArrayNumber (array){
    const x = Math.floor(Math.random()*array.length);
    return x;
}

// FUNCION QUE CUENTA LA CANTIDAD DE ESPACIOS QUE SE ENCUENTRAN EN ESE PARRAFO

function spacesNumber (array){
    let cont = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == ' '){
            cont++;
        }
    }
    return cont;
}

// FUNCION QUE GENERA UN LARGO ALEATORIO (ENTRE 3 Y 12) PARA LA FRASE QUE SE VA A AGREGAR AL CARRUSEL

function randomWordsNumber (spaces){
    let x = Math.floor (Math.random()*spaces);
    while (x < 3 || x > 12){
        x = Math.floor (Math.random()*spaces);
    }
    return x;
}

// FUNCION QUE GENERE UN NUMERO ALEATORIO (DONDE COMENZARA LA FRASE)

function randomStart (words, spaces){
    let x = Math.floor (Math.random()*spaces);
    while (x > (spaces - words)){
        x = Math.floor (Math.random()*spaces);
    }
    return x;
}

// FUNCION QUE LLAMA A LAS ANTERIORES PARA TOMAR UNA FRASE ALEATORIA Y PULIRLA

function getPhrase (array){
    const textArray = array[randomArrayNumber(array)].innerHTML;
    const spaces = spacesNumber(textArray);
    let words = randomWordsNumber(spaces);
    let start = randomStart(words, spaces);
    let i = 0;
    while (start > 0){
        if (textArray[i] == ' '){
            start--;
        }
        i++;
    }
    let phrase = "...";
    while (words > 0){
        if (textArray[i] == ' '){
            words--;
        }
        phrase += textArray[i];
        i++;
    }
    if (textArray[i-2] == ','){
        phrase = phrase.slice(0, -2);
    } else {
        phrase = phrase.slice(0, -1);
    }
    return phrase;
}

// FUNCION QUE AGREGA LA FRASE AL CARRUSEL DEL HTML

function setPhrase (array){
    for (const item of array) {
        item.innerHTML = getPhrase(text);
    }
}

setPhrase(carouselItems);

// FUNCION QUE TOMA EL BOTON "OPCIONES" Y CUANDO ESTE ES PRESIONADO, DESPLIEGA EL MENU OCULTO

const optionsMenu = document.querySelector("#options");

const menu = document.querySelector("#menu");

optionsMenu.addEventListener("click", function(){
    menu.classList.toggle("d-none");
});