// Accepts two integers within two separate prompts.
let firstInteger = parseInt(prompt('Enter first integer'))
let secondInteger = parseInt(prompt('Enter second integer'))

// Display only the larger of the two within the browser window.
if (firstInteger > secondInteger)
    document.write(firstInteger + ' is the larger integer')
else if (firstInteger < secondInteger)
    document.write(secondInteger + ' is the larger integer')
else
    // Handle the fact that the two could be equal.
    document.write('Both integers have the value of ' + firstInteger)