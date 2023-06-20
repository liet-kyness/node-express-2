const process = require('process');

const data = process.argv[2].toString();
let hour = data.slice(0, 2);
let min = data.slice(3, 5);
//let minOne = min.slice(0,1);
//let minTwo = min.slice(1);

//console.log(hour, min);
//console.log(minOne, minTwo);

function toWord (hour, min) {
    let minOne = min.slice(0,1);
    let minTwo = min.slice(1);
    let hourWord;
    let minWordOne;
    let minWordTwo;
    let result;
    let amPm;

    //console.log(hour, min);
    //console.log(minOne, minTwo);

    //AM/PM configuration
    if (hour > 12) {
        hour -= 12;
        amPm = 'PM';
    }
    else if (hour == 12) {
        amPm = 'PM'
    }
    else {
        amPm = 'AM'
    }

    //Noon/Midnight handler
    if (hour == '00' && min == '00') {
        result = 'midnight'
        console.log(result);
        return result;
    } 
    else if (hour == '12' && min == '00') {
        result = 'noon';
        console.log(result);
        return result;
    }
    //set hours to words
    if (hour == '01') {
        hourWord = 'one';
    }
    else if (hour == '02') {
        hourWord = 'two';
    }
    else if (hour == '03') {
        hourWord = 'three';
    }
    else if (hour == '04') {
        hourWord = 'four';
    }
    else if (hour == '05') {
        hourWord = 'five';
    }
    else if (hour == '06') {
        hourWord = 'six';
    }
    else if (hour == '07') {
        hourWord = 'seven';
    }
    else if (hour == '08') {
        hourWord = 'eight';
    }
    else if (hour == '09') {
        hourWord = 'nine';
    }
    else if (hour == '10') {
        hourWord = 'ten';
    }
    else if (hour == '11') {
        hourWord = 'eleven';
    }
    else {
        hourWord = 'twelve'
    }

    //minute hndler

    
    
    
    if (minOne == '0') {
        minWordOne = 'oh';
    }
    else if (minOne == '2') {
        minWordOne = 'twenty';
    }
    else if (minOne == '3') {
        minWordOne = 'thirty';
    }
    else if (minOne == '4') {
        minWordOne = 'forty';
    }
    else {
        minWordOne = 'fifty';
    }

    if (minOne != '1') {
        if (minTwo == '0') {
            minWordTwo = '';
        }
        else if (minTwo == '1') {
            minWordTwo = 'one';
        }
        else if (minTwo == '2') {
            minWordTwo = 'two';
        }
        else if (minTwo == '3') {
            minWordTwo = 'three';
        }
        else if (minTwo == '4') {
            minWordTwo = 'four';
        }
        else if (minTwo == '5') {
            minWordTwo = 'five';
        }
        else if (minTwo == '6') {
            minWordTwo = 'six';
        }
        else if (minTwo == '7') {
            minWordTwo = 'seven';
        }
        else if (minTwo == '8') {
            minWordTwo = 'eight';
        }
        else {
            minWordTwo = 'nine';
        }
    }
    
    if (minOne == '1' && minTwo == '0') {
        minWord = 'ten';
    }
    else if (minOne == '1' && minTwo == '1') {
        minWord = 'eleven';
    }
    else if (minOne == '1' && minTwo == '2') {
        minWord = 'twelve';
    }
    else if (minOne == '1' && minTwo == '3') {
        minWord = 'thirteen';
    }
    else if (minOne == '1' && minTwo == '4') {
        minWord = 'fourteen';
    }
    else if (minOne == '1' && minTwo == '5') {
        minWord = 'fifteen';
    }
    else if (minOne == '1' && minTwo == '6') {
        minWord = 'sixteen';
    }
    else if (minOne == '1' && minTwo == '7') {
        minWord = 'seventeen';
    }
    else if (minOne == '1' && minTwo == '8') {
        minWord = 'eighteen';
    }
    else if (minOne == '1' && minTwo == '9') {
        minWord = 'nineteen'
    }
    else {
        minWord = `${minWordOne} ${minWordTwo}`
    }
    
    //minWord = `${minWordOne} ${minWordTwo}`;
    
    result = `${hourWord} ${minWord} ${amPm}`;
    
    



    console.log(result)
}
toWord(hour, min);