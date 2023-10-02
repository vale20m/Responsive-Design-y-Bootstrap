const text = document.querySelectorAll(".texto");

const carouselItems = document.querySelectorAll(".carousel-item");

// let phrasesArray = [];

// function getPhrases(array){
//     let phrase = "";
//     for (const text of array) {
//         phrase = "";
//         for (i = 0; i < text.innerHTML.length; i++){
//             if (text.innerHTML[i] != '.' && text.innerHTML[i] != ','){
//                 phrase += text.innerHTML[i];
//             } else {
//                 if (phrase[0] == ' '){
//                     phrase = phrase.slice(1);
//                 }
//                 phrasesArray.push(phrase);
//                 phrase = "";
//             }
//         }
//     }
// }

// function randomNumber (array){
//     const x = Math.floor (Math.random()*array.length);
//     return x;
// }

// function addPhrases (array){
//     for (const item of array) {
//         item.innerHTML = "...";
//         item.innerHTML += phrasesArray[randomNumber(phrasesArray)].toLowerCase();
//         item.innerHTML;
//     }
// }

// getPhrases(text);

// addPhrases(carouselItems);

function randomArrayNumber (array){
    const x = Math.floor(Math.random()*array.length);
    return x;
}

function spacesNumber (array){
    let cont = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == ' '){
            cont++;
        }
    }
    return cont;
}

function randomWordsNumber (spaces){
    let x = Math.floor (Math.random()*spaces);
    while (x < 3 || x > 12){
        x = Math.floor (Math.random()*spaces);
    }
    return x;
}

function randomStart (words, spaces){
    let x = Math.floor (Math.random()*spaces);
    while (x > (spaces - words)){
        x = Math.floor (Math.random()*spaces);
    }
    return x;
}

function getPhrase (array){
    const textArray = array[randomArrayNumber(array)].innerHTML;
    console.log(array.length);
    console.log(randomArrayNumber(array));
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

function setPhrase (array){
    for (const item of array) {
        item.innerHTML = getPhrase(text);
    }
}

setPhrase(carouselItems);