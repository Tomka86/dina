const numbers = {
    ones : {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    },
    
     prefixes : {
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }
};

const form = document.getElementById("form");
const numInput = document.getElementById("numInput");
const convertedNum = document.getElementById("convertedNum");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", convert);

export default function convert(event){
    event.preventDefault();

    //convertedNum.innerHTML = numInput.value

    console.log(numInput.value);
    let result = converter(numInput.value);
    convertedNum.innerHTML = result;
    return result
}

function converter (digit){
    let result;
    let numberLength = digit.length;
    //let numArray = digit.split("");
    let numArray = digit.toString();

    if(numberLength === 0){
        result = "";
        console.log(result);
    }else if(numberLength === 1){
        result = numbers.ones[digit]
        console.log(result);
    }else if(numberLength === 2 && digit < 20){
        console.log(result);
        result = numbers.ones[digit];
    }else if(numberLength === 2){
        result = numbers.prefixes[numArray.slice(0, 1)] + " - " + numbers.ones[numArray.slice(1, 2)];
    }else if(numberLength === 3){
       let hundredPlus = numArray.slice(1,3);
        result = converter(numArray.slice(0, 1)) + (hundredPlus === "00" ? " hundred " : " hundred and " + converter(numArray.slice(1, 3)));
    }else if(numberLength > 3 && numberLength < 6){
        let thousandPlus = numArray.slice(-3);
        result = converter(numArray.slice(0, -3)) + (thousandPlus === "000" ? " thousand " : " thousand and " + converter(numArray.slice(-3))); 
    }else if(numberLength === 6){
        result = converter(numArray.slice(0, 1)) + " hundred and " + converter(numArray.slice(1, 3)) + " thousand " + converter(numArray.slice(3, 6));
    }else if(numberLength < 10){
        result = converter(numArray.slice(0, -6)) + " million " + converter(numArray.slice(-6));
    }
    return result;
}