const fs = require('fs');

fs.readFile('quran.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const wordsArr = data.split(" "); 

    
    const wordsString = wordsArr.join("  \n  ");
    console.log(wordsString)
    
    fs.writeFile('output.txt', wordsString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }

        console.log('File successfully written: output.txt');
    });
});

/* 
"لٓ".split("").forEach(ele=>console.log(ele))
const without = withDiacritics.replace(/َ|ُ|ِ|ّ|ْ|َ|ً|ٍ|ٌ/g, '')
const withoutSpecailA = without.replace("ٱ","ا")
const withoutSpecailANoNum = withoutSpecailA.replace(/\n/g, '')
const withoutSpecailANoNum = withoutSpecailA.replace(/\d|\n/g, '')
console.log(withoutSpecailANoNum)
const arr = withoutSpecailA.split(" ")
const filteredArray = arr.filter(item => !/^\d+$/.test(item));
console.log(filteredArray) 
*/