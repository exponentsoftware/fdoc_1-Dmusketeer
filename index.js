// 1.a.Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters.It compare  which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

var a, b;
let countWords = (paragraph, word1, word2) => {
    a = paragraph.split(word1).length - 1;
    b = paragraph.split(word2).length - 1;
    if (a > b) {
        console.log(a)
        return `The word '${word1}' more frequently occurred than word '${word2}'.`
    } else {
        return `The word '${word2}' more frequently occurred than word '${word1}'.`
    }

}

console.log(countWords(paragraph, 'love', 'you'));



// 1.b.Write a function called *** cleanText ***.The function takes raw text as a parameter and returns the clean text.


// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(sentence) {
    let a = sentence.replace(/[^a-zA-Z ]/g, "");
    console.log(a)
    // just for assurence here what we did is
    // we used regex to filter which is not a - z and A - Z then replace them by "" which is empty
}
cleanText(sentence);



// 1.c.After cleaning the text in the sentence from question number b you will get the following text.Count the number of words in this text.Don't include words with only one letter.

const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
function countWords(sentence) {
    let arr = sentence.split(" ").map(w => w.length);
    let count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= 2) {
            if (arr[i].length >= 2) {
                count++

            }
            console.log(arr[i])
        }
        console.log(count)
    }
}
console.log(countWords(sentence));


// 1.d.How many words were used to construct this sentence.Now, don't exclude one letter words.
function verietyOfWords(sentence) {
    arr = sentence.split(" ")
    let aSet = new Set();
    for (let i = 0; i <= arr.length; i++) {
        aSet.add(arr[i])
    }
    console.log(aSet.size)
}
verietyOfWords(sentence);



// 2.a.Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(rows) {
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j = 0; j < i + 1; j++) output += '#';
        console.log(output);
    }
}
triangle(7)


// 2.b.Write a function which returns array of seven random numbers in a range of 0 - 9. All the numbers must be unique

function sevenRandomNumbers() {
    arr = []
    for (var i = 0; arr.length <= 6; i++) {
        let a = Math.floor(Math.random() * 10);
        if (!arr.includes(a)) {
            arr.push(a);
        }
    }
    console.log(arr);
};
sevenRandomNumbers();


// 2c.Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear.For this exercise, write a function, reverseArray.The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.Without reverse method.
function reverseArray(arr) {
    var a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i]);
    }
    console.log(a)
}
arr = [A, B, C];
reverseArray(arr);



// 2.d.Write a function which check if items of an array are unique ?

function checkUniqueness(arr) {
    let aSet = new Set();
    for (let i = 0; i <= arr.length - 1; i++) {
        aSet.add(arr[i])
    }
    let a = aSet.size;
    let b = arr.length;
    // console.log(a,b);
    //if{aSet.size==arr.length} not working this way
    if (a == b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

const arrOne = [1, 4, 6, 2, 1];
checkUniqueness(arrOne);

const arrTwo = [1, 4, 6, 2, 3]
checkUniqueness(arrTwo)