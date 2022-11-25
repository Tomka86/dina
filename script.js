const form = document.getElementById("form");
const numInput = document.getElementById("numInput");
const convertedNum = document.getElementById("convertedNum");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //convertedNum .innerHTML = numInput.value

    //one-digit number
    if (+numInput.value in ones) {
        convertedNum.innerHTML = ones[+numInput.value];
    }

    // two-digit numbers
    const numArray = numInput.value.split("")

    if (numInput.value.length === 2) {
        if (+numInput.value < 20) {                             // 19, 18, 17, 16 etc.
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")];
        } else if (+numArray[1] === 0) {                         // 20, 30, 40 etc.
            convertedNum.innerHTML = prefixes[numArray[0]]
        } else {                                                // 21, 35, 76, 99 etc.
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]]
        }
    }

    //three-digit numbers
    if (numInput.value.length === 3) {
        if (+numArray[1] === 0 && +numArray[2] === 0) {         // 100, 200, 300 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " hundred "
        } else if (+numArray[1] === 0) {                        // (1)01 - (1)09 
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + ones[numArray[2]]
        } else if (+numArray[1] < 2) {           // (1)10 - (1)19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")];
        } else if (+numArray[2] != 0) {                        // 121 - 999
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " " + ones[numArray[2]];
        } else {                                              // 120, 130, 140 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]]
        }
    }

    // four-digit numbers
    if (numInput.value.length === 4) {
        if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] === 0) {  // 1000, 2000, 3000 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " thousand "
        } else if (+numArray[2] === 0 && +numArray[3] === 0) {                   // 1100, 1200, 1300 etc. 
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + " and " + ones[numArray[1]] + " hundred"
        } else if (+numArray[1] === 0 && +numArray[2] === 0) {                    // 1001, 1002, 1003 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + " and " + ones[numArray[3]]
        } else if (+numArray[1] === 0 && +numArray[2] < 2) {                     // 1011, 1012, 1013 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + " and " + ones[+[numArray[2], numArray[3]].join("")]
        } else if (+numArray[1] === 0 && +numInput.value.slice(1, 3) < 20) {      // 1020, 1030, 1040 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + " and " + prefixes[numArray[2]]
        } else if (+numArray[3] === 0) {                                         // 1110, 1230, 3330 etc.
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]]
        } else if (+numArray[2] < 2) {                                           // (1)111 - (1)119
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")];
        } else {                                                                 // 1121, 1135, 1175
            convertedNum.innerHTML = ones[numArray[0]] + " thousand " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + ones[numArray[3]]
        }
    }

    // five-digit numbers 10000 - 99999
    if (numInput.value.length === 5) {

        // 10-19 first two digit
        if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[0] < 2) {                                                     // 10.000, 11.000 - 19.000
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand "
        } else if (+numArray[2] === 0 && +numArray[3] < 2 && +numArray[0] < 2) {                                                                     // 10.0.01 - 19.0.19
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + " and " + ones[+[numArray[3], numArray[4]].join("")]
        } else if (+numArray[2] === 0 && +numArray[4] === 0 && +numArray[3] >= 2 && +numArray[0] < 2) {                                              // 10.0.20, 10.0.30, 10.0.90, 19.0.90
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + " and " + prefixes[numArray[3]]
        } else if (+numArray[2] === 0 && +numArray[3] >= 2 && +numArray[0] < 2) {                                                                    // 10.0.21 - 19.0.99
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
        } else if (+numArray[3] < 2 && +numArray[0] < 2) {                                                                                           // 10.1.01 - 19.9.19
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + ones[numArray[2]] + " hundred " + " and " + ones[+[numArray[3], numArray[4]].join("")]
        } else if (+numArray[3] >= 2 && +numArray[4] === 0 && +numArray[0] < 2) {                                                                    // 10.1.20 - 19.9.90
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]]
        } else if (+numArray[3] >= 2 && +numArray[0] < 2) {                                                                                          // 10.1.21 - 19.9.99
            convertedNum.innerHTML = ones[+[numArray[0], numArray[1]].join("")] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

            // 20, 30, - 90 first two digit
        } else if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[0] >= 2) {                      // 20.000, 30.000 - 90.000
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand "
        } else if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] < 2 && +numArray[0] >= 2) {                                              // 20.0.01 - 90.0.19
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + " and " + ones[+[numArray[3], numArray[4]].join("")]
        } else if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] >= 2 && +numArray[0] >= 2 && +numArray[4] === 0) {                       // 20.0.20 - 90.0.90
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + " and " + prefixes[numArray[3]]
        } else if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] >= 2 && +numArray[0] >= 2) {                                             // 20.0.21 - 90.0.99
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
        } else if (+numArray[0] >= 2 && +numArray[3] < 2 && +numArray[1] === 0) {                                                                    // 20.1.01 - 90.9.19
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + ones[+[numArray[3], numArray[4]].join("")]
        } else if (+numArray[0] >= 2 && +numArray[1] === 0 && +numArray[3] >= 2 && +numArray[4] === 0) {                                             // 20.1.20 - 90.9.90
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]]
        } else if (+numArray[0] >= 2 && +numArray[1] === 0 && +numArray[3] >= 2) {                                                                   // 20.1.21 - 90.9.99
            convertedNum.innerHTML = prefixes[numArray[0]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // 21, 22, - 99 first two digit
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[0] >= 2) {                                            // 21.0.00, 22.0.00 - 99.0.00
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand "
        } else if (+numArray[0] >= 2 && +numArray[2] === 0 && +numArray[3] < 2) {                                                                    // 21.0.01 - 99.0.19
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + " and " + ones[+[numArray[3], numArray[4]].join("")]
        } else if (+numArray[0] >= 2 && +numArray[2] === 0 && +numArray[3] >= 2 && +numArray[4] === 0) {                                             // 21.0.20 - 99.0.90
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + " and " + prefixes[numArray[3]]
        } else if (+numArray[0] >= 2 && +numArray[2] === 0 && +numArray[3] >= 2) {                                                                   // 21.0.21 - 99.0.99
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
        } else if (+numArray[0] >= 2 && +numArray[3] < 2) {                                                                                          // 21.1.01 - 99.9.19                        
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + ones[numArray[4]]
        } else if (+numArray[0] >= 2 && +numArray[3] >= 2 && +numArray[4] === 0) {                                                                   // 21.1.20 - 21.9.90
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]]
        } else if (+numArray[0] >= 2 && +numArray[3] >= 2) {                                                                                         // 21.1.21 - 99.9.99
            convertedNum.innerHTML = prefixes[numArray[0]] + " - " + ones[numArray[1]] + " thousand " + ones[numArray[2]] + " hundred " + " and " + prefixes[numArray[3]] + " - " + ones[numArray[4]]
        }
    }

    // six-digit numbers 100000 - 999999

    /* 1 0 0 0 0 0
       
       0 1 2 3 4 5
  
    */
    if (numInput.value.length === 6) {

        // 1.10 - 9.19 first three digit

        if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0) {                              // 1.00.000 - 9.00.000
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " thousand "
        } else if (+numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[1] < 2) {                                               // 1.10.000, 1.11.000 - 9.19.000
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand "
        } else if (+numArray[3] === 0 && +numArray[4] < 2 && +numArray[1] < 2) {                                                                     // 1.10.0.01 - 9.19.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[3] === 0 && +numArray[5] === 0 && +numArray[4] >= 2 && +numArray[1] < 2) {                                              // 1.10.0.20, 1.10.0.30, 1.10.0.90, 9.19.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + " and " + prefixes[numArray[4]]
        } else if (+numArray[3] === 0 && +numArray[4] >= 2 && +numArray[1] < 2) {                                                                    // 1.10.0.21 - 9.19.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
        } else if (+numArray[4] < 2 && +numArray[1] < 2) {                                                                                           // 1.10.1.01 - 9.19.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + ones[numArray[3]] + " hundred " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[4] >= 2 && +numArray[5] === 0 && +numArray[1] < 2) {                                                                    // 1.10.1.20 - 9.19.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]]
        } else if (+numArray[4] >= 2 && +numArray[1] < 2) {                                                                                          // 1.10.1.21 - 9.19.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + ones[+[numArray[1], numArray[2]].join("")] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

            // 1.20, 1.30, - 9.90 first three digit
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[1] >= 2) {                      // 1.20.000, 1.30.000 - 9.90.000
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand "
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] < 2 && +numArray[1] >= 2) {                                              // 1.20.0.01 - 9.90.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] >= 2 && +numArray[1] >= 2 && +numArray[5] === 0) {                       // 1.20.0.20 - 9.90.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + " and " + prefixes[numArray[4]]
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] >= 2 && +numArray[1] >= 2) {                                             // 1.20.0.21 - 9.90.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
        } else if (+numArray[1] >= 2 && +numArray[4] < 2 && +numArray[2] === 0) {                                                                    // 1.20.1.01 - 9.90.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + ones[numArray[3]] + " hundred " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[1] >= 2 && +numArray[2] === 0 && +numArray[4] >= 2 && +numArray[5] === 0) {                                             // 1.20.1.20 - 9.90.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]]

        } else if (+numArray[1] >= 2 && +numArray[2] === 0 && +numArray[4] >= 2) {                                                                   // 1.20.1.21 - 9.90.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // 1.21, 1.22, - 9.99 first three digit
        } else if (+numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[1] >= 2) {                                            // 1.21.0.00, 1.22.0.00 - 9.99.0.00
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand "
        } else if (+numArray[1] >= 2 && +numArray[3] === 0 && +numArray[4] < 2) {                                                                    // 1.21.0.01 - 9.99.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[1] >= 2 && +numArray[3] === 0 && +numArray[4] >= 2 && +numArray[5] === 0) {                                             // 1.21.0.20 - 9.99.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + " and " + prefixes[numArray[4]]
        } else if (+numArray[1] >= 2 && +numArray[3] === 0 && +numArray[4] >= 2) {                                                                   // 1.21.0.21 - 9.99.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
        } else if (+numArray[1] >= 2 && +numArray[4] < 2) {                                                                                          // 1.21.1.01 - 9.99.9.19                        
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + " and " + ones[numArray[3]] + " hundred " + " and " + ones[+[numArray[4], numArray[5]].join("")]
        } else if (+numArray[1] >= 2 && +numArray[4] >= 2 && +numArray[5] === 0) {                                                                   // 1.21.1.20 - 9.21.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]]
        } else if (+numArray[1] >= 2 && +numArray[4] >= 2) {                                                                                         // 1.21.1.21 - 9.99.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " hundred " + " and " + prefixes[numArray[1]] + " - " + ones[numArray[2]] + " thousand " + ones[numArray[3]] + " hundred " + " and " + prefixes[numArray[4]] + " - " + ones[numArray[5]]
        }
    }

    // seven-digit numbers 1000000 - 9999999

    /* 1 0 0 0 0 0 0
       
       0 1 2 3 4 5 6
  
    */
    if (numInput.value.length === 7) {

        // 1.1.10 - 9.9.19 first four digit

        // if 2 digit is != 0

        if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0) {
            convertedNum.innerHTML = ones[numArray[0]] + " million "
        } else if (+numArray[2] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0) {                              // 1.1.00.000 - 9.9.00.000
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[0]] + " hundred " + " thousand "
        } else if (+numArray[1] != 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] < 2) {                                               // 1.1.10.000, 1.1.11.000 - 9.9.19.000
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand "
        } else if (+numArray[1] != 0 && +numArray[4] === 0 && +numArray[5] < 2 && +numArray[2] < 2) {                                                                     // 1.1.10.0.01 - 9.9.19.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] != 0 && +numArray[4] === 0 && +numArray[6] === 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                                              // 1.1.10.0.20, 1.1.10.0.30, 1.1.10.0.90, 9.9.19.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] != 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                                                                    // 1.1.10.0.21 - 9.9.19.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (+numArray[1] != 0 && +numArray[5] < 2 && +numArray[2] < 2) {                                                                                           // 1.1.10.1.01 - 9.9.19.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] != 0 && +numArray[5] >= 2 && +numArray[6] === 0 && +numArray[2] < 2) {                                                                    // 1.1.10.1.20 - 9.9.19.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] != 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                                                                                          // 1.1.10.1.21 - 9.9.19.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

            // 1.1.20, 1.1.30, - 9.9.90 first four digit
        } else if (+numArray[1] != 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] >= 2) {                      // 1.1.20.000, 1.1.30.000 - 9.9.90.000
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand "
        } else if (numArray[1] != 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] < 2 && +numArray[2] >= 2) {                                              // 1.1.20.0.01 - 9.9.90.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (numArray[1] != 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] >= 2 && +numArray[6] === 0) {                       // 1.1.20.0.20 - 9.9.90.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (numArray[1] != 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] >= 2) {                                             // 1.1.20.0.21 - 9.9.90.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[5] < 2 && +numArray[3] === 0) {                                                                    // 1.1.20.1.01 - 9.9.90.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[3] === 0 && +numArray[5] >= 2 && +numArray[6] === 0) {                                             // 1.1.20.1.20 - 9.9.90.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[3] === 0 && +numArray[5] >= 2) {                                                                   // 1.1.20.1.21 - 9.9.90.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // 1.1.21, 1.1.22, - 9.9.99 first four digit
        } else if (numArray[1] != 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] >= 2) {                                            // 1.1.21.0.00, 1.1.22.0.00 - 9.9.99.0.00
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand "
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] < 2) {                                                                    // 1.1.21.0.01 - 9.9.99.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[6] === 0) {                                             // 1.1.21.0.20 - 9.9.99.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] >= 2) {                                                                   // 1.1.21.0.21 - 9.9.99.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[5] < 2) {                                                                                          // 1.1.21.1.01 - 9.9.99.9.19                        
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[5] >= 2 && +numArray[6] === 0) {                                                                   // 1.1.21.1.20 - 9.9.21.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (numArray[1] != 0 && +numArray[2] >= 2 && +numArray[5] >= 2) {                                                                                         // 1.1.21.1.21 - 9.9.99.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[numArray[1]] + " hundred " + " and " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            /*
            if digit 2 === 0
            */
            // 1.0.10 - 9.0.19 first four digit

        } else if (+numArray[1] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] < 2) {                         // 1.0.10.000, 1.0.11.000 - 9.0.19.000
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand "
        } else if (+numArray[1] === 0 && +numArray[4] === 0 && +numArray[5] < 2 && +numArray[2] < 2) {                                               // 1.0.10.0.01 - 9.0.19.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[4] === 0 && +numArray[6] === 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                        // 1.0.10.0.20, 1.0.10.0.30, 1.0.10.0.90, 9.0.19.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                                              // 1.0.10.0.21 - 9.0.19.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (+numArray[1] === 0 && +numArray[5] < 2 && +numArray[2] < 2) {                                                                     // 1.0.10.1.01 - 9.0.19.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[5] >= 2 && +numArray[6] === 0 && +numArray[2] < 2) {                                              // 1.0.10.1.20 - 9.0.19.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[5] >= 2 && +numArray[2] < 2) {                                                                    // 1.0.10.1.21 - 9.0.19.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + ones[+[numArray[2], numArray[3]].join("")] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

            // 1.1.20, 1.1.30, - 9.9.90 first four digit
        } else if (+numArray[1] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] >= 2) {   // 1.0.20.000, 1.0.30.000 - 9.0.90.000
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand "
        } else if (+numArray[1] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] < 2 && +numArray[2] >= 2) {                           // 1.0.20.0.01 - 9.0.90.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] >= 2 && +numArray[6] === 0) {    // 1.0.20.0.20 - 9.0.90.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[3] === 0 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[2] >= 2) {                          // 1.0.20.0.21 - 9.0.90.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[5] < 2 && +numArray[3] === 0) {                                                 // 1.0.20.1.01 - 9.0.90.9.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[3] === 0 && +numArray[5] >= 2 && +numArray[6] === 0) {                          // 1.0.20.1.20 - 9.0.90.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[3] === 0 && +numArray[5] >= 2) {                                                // 1.0.20.1.21 - 9.0.90.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // 1.1.21, 1.1.22, - 9.9.99 first four digit
        } else if (+numArray[1] === 0 && +numArray[4] === 0 && +numArray[5] === 0 && +numArray[6] === 0 && +numArray[2] >= 2) {                         // 1.0.21.0.00, 1.0.22.0.00 - 9.0.99.0.00
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand "
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] < 2) {                                                 // 1.0.21.0.01 - 9.0.99.0.19
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] >= 2 && +numArray[6] === 0) {                          // 1.0.21.0.20 - 9.0.99.0.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[4] === 0 && +numArray[5] >= 2) {                                                // 1.0.21.0.21 - 9.0.99.0.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[5] < 2) {                                                                       // 1.0.21.1.01 - 9.0.99.9.19                        
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + ones[+[numArray[5], numArray[6]].join("")]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[5] >= 2 && +numArray[6] === 0) {                                                // 1.0.21.1.20 - 9.0.21.9.90
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]]
        } else if (+numArray[1] === 0 && +numArray[2] >= 2 && +numArray[5] >= 2) {                                                                      // 1.1.21.1.21 - 9.9.99.9.99
            convertedNum.innerHTML = ones[numArray[0]] + " million " + prefixes[numArray[2]] + " - " + ones[numArray[3]] + " thousand " + ones[numArray[4]] + " hundred " + " and " + prefixes[numArray[5]] + " - " + ones[numArray[6]]
        }
    }
});

const ones = {
    0: "zero",
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
};

const prefixes = {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

