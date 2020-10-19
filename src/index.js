
module.exports = function toReadable (n) {
    if (n === 0) {
        return 'zero';
    }

    let words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let dozenWords = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let extraWords = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let nString = n.toString().split('');

    if (n < 21) {
        return words[n];
    }

    if(nString.length === 2) {
        if(nString[1] !== '0') {
            return `${dozenWords[nString[0]]} ${words[nString[1]]}`;
        } else if(nString[1] === '0') {
            return `${dozenWords[nString[0]]}`;
        }
    }

    if(nString.length === 3) {
        if(nString[1] > '1' && nString[2] !== '0') {
            return `${words[nString[0]]} hundred ${dozenWords[nString[1]]} ${words[nString[2]]}`;
        } else if(nString[1] === '0' && nString[2] !== '0') {
            return `${words[nString[0]]} hundred ${words[nString[2]]}`;
        } else if(nString[1] > '1' && nString[2] === '0') {
            return `${words[nString[0]]} hundred ${dozenWords[nString[1]]}`;
        } else if(nString[1] === '0' && nString[2] === '0') {
            return `${words[nString[0]]} hundred`;
        } else if(nString[1] === '1') {
            return `${words[nString[0]]} hundred ${extraWords[nString[2]]}`;
        }
    }

}
