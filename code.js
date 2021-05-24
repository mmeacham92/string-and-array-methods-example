// grab the paragraph element from our HTML
let paragraphElement = document.querySelector('.target');
console.log(`paragraphElement: ${paragraphElement}`);

// create a text variable from the innerText of our element
let paragraphText = paragraphElement.innerText;

// use .replace to change the first instance of dog. to cat. It is crucial to remember that .replace RETURNS A NEW STRING, so we must capture that new value with a variable, or reassign the original variable to the new value.
let newParagraph = paragraphText.replace('dog.', 'cat.')
// reassign the innerText of our element to the new string.
paragraphElement.innerText = newParagraph;


// Switching from a string into an array, and back again!

// the .split method can be used to separate a string into pieces, then returns an array composed of those pieces (elements)
let paragraphArray = paragraphText.split(' ');

// now we can loop through our array of strings - we will determine if the current element of the array is equal to the string we are looking for and if so, we change the current item to a new one.
for (let index = 0; index < paragraphArray.length; index += 1) {
    let currentWord = paragraphArray[index];

    if (currentWord === 'dog.') {
        paragraphArray[index] = 'cat.';
    }
}

console.log(paragraphArray);

// now we join our array of strings back together, similar to how we used .split() to separate it.
let newestParagraph = paragraphArray.join(' ');
console.log(newestParagraph);

// we reassign the innerText of our paragrahElement to the newParagraph text we joined together in the line above.
paragraphElement.innerText = newestParagraph;


