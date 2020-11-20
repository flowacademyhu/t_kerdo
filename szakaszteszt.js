1 // 
const obj = {
//string
const text = "szoveg",
//boolean
const isTrue = true,
//szám
const num = 1
};



//2.
//Ha a változó konstans akkor értéket kell adnunk neki mindenképp, és ezt nem tudjuk változtatni, különben hibát kapunk.
const text = 'konstans';


//Ha a változót a let kulcsszóval definiálunk, akkor nem kell feltétlenül kezdőértéket adni, de ha adunk is azt később megváltoztathatjuk.
let text5 = 'anything';
text5 = 'different';  // ha ezt adom meg utána akkor az értéke megváltozik erre

//3
// Referencia szerinti átadás esetén az eredeti értéke is megváltozik, azaz ha egy fv-n belül változtatjuk a paramétert akkor a külső fv-ben is változik az érték. Tömböt, objektumot adunk át így.
//Ha érték szerint adunk át akkor forditva, tehát a fv-n belül vátoztatunk akkor az a külső fv-ben nem látszik. Boolen string, suám.

//4
const kereses = (arr, number) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === number) {
          return [i, j];
        }
      }
    }
    return -1;


//6. 3-mal osztható negatív 2 számjegyű

const  = (source) => {
    let answerArray = []
    for (let k = 0; k < source.length; k++) {
        if (source[k] < 0 && source[k] % 3 === 0 && source[k].toString().length === 2) {
            answerArray.push(source[k]);
        }
    }
    return answerArray;

//7.
const section = (arr1,arr2) => {
    const dst = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !dst.includes(arr1[i])) {
                dst.push(arr1[i]);
            }
        }
    }
    return dst;
  };


 8//
const osszeadas = (first, second) => {
    return first + second
}

const szorzas = (first, second) => {
    return first * second
}

const hatvanyozas = (base, power) => {
    let outcome = 1;
    for (let i = 1; i < power; i++) {
        outcome = outcome * base
    } 
    return outcome
}

module.exports = {
    osszeadas,
    szorzas,
    hatvanyozas
  }

  // 5 nem biztos, hogy tökéletes, nem volt elég időm ellenőrizni
  const (objArray) = {
      planet = 'venus',
      diameter = 7000
  }
 nincs elég időm erre sajnos

 const legkisebb = (objArray) => {
    let minDia = objArray[0].diameter;
    let minIndex = 0;
    for (let i = 1; i < objArray.length; i++) {
      if (objArray[i].diameter> minDia) {
        minDia = objArray[i].diameter;
        minIndex = i;
      }
    }
    return objArray[minIndex].planet;
  }