

let minValue = parseInt(prompt('Минимальное знание числа для игры','0'))
{
    minValue = minValue || 0; 
};
minValue = (minValue > -1000)? minValue : -999 ;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'))
{
    maxValue = maxValue || 100; 
};
maxValue = (maxValue < 1000)? maxValue : 999 ;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); 
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText =`Ваше число ${(answerNumber)} ?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let messages1 = [ [`Вы загадали число ${numToWord(answerNumber)}?`], [ `Наверное, это число ${numToWord(answerNumber)}?`],
            [ `А, может быть, число ${numToWord(answerNumber)}?`]];
            let message1  = messages1 [Math.round(Math.random() * 2)];
            answerField.innerText = message1 [0];
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let messages2 = [ [`Вы загадали число ${numToWord(answerNumber)}?`], [`Наверное, это число ${numToWord(answerNumber)}?`],
            [ `А, может быть, число ${numToWord(answerNumber)}?`]];
            let message2  = messages2 [Math.round(Math.random() * 2)];
            answerField.innerText = message2 [0];
        }
    }
})

let assocArr = [];
 
assocArr[0] = new Array("", "один", "два", "три", "четыри", "пять", "шесть", "семь","восемь", "девять");
assocArr["d"] = new Array("десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать","пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать");
assocArr[1] = new Array("", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто");
assocArr[2] = new Array("", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот");
assocArr["s"] = new Array("минус");
 
function numToWord(answerNumber) {
     let resp = "",
         numArr = [],
         flag = true;
 
    if (isNaN(answerNumber)) {
         return "Invalid input!";
     }
    if (answerNumber==0) {
        return "ноль"; 
     }
       if (answerNumber<0) {
      // number= Math.abs(number);
        return ("минус" + (answerNumber)); 
            } 
          
    // Рассчет
 
    for (; answerNumber != 0; answerNumber = Math.floor(answerNumber / 10)) {
         numArr.push(answerNumber % 10);
     }
 
    // Все цифры с конца
     for (let i = numArr.length - 1; i >= 0 ; i--) {
         if (flag) {
             if (numArr[i] == 1 && i == 1 || numArr[i] == 1 && i == 4) {
                 flag = false;
             } else {
                 resp += digitToWord(i, numArr[i], 0);
             }
         } else {
             resp += digitToWord("d", numArr[i], i);
             flag = true;
         }
     }
     return resp.trim();
    }

 function digitToWord(digit, offset, char,s) {
 
    let resp = "";
     switch (digit) {
         case 4:
             digit = 1;
             break;
         case "d":
             resp += assocArr[digit][offset] + " ";
             digit = char;
             offset = 0;
             break;
     }

   return resp + assocArr[digit][offset] + " " 
  }

  document.getElementById('btnEqual').addEventListener('click', function () {
    let quotes  =  [[ `Разгадал число \n\u{1F600}`], [`Я всегда угадываю\n\u{1F600}`],
    [`Победа\n\u{1F600}`]]; 
    let quote = quotes[ Math.floor( Math.random() * quotes.length )];
        
        answerField.innerText = quote[0];       
        gameRun = false;
       })

document.querySelector('#btnRetry').onclick=function reset() {
   location.reload();
 }
 $(document).ready(function(){
    $("#myModal").modal('show');
});

