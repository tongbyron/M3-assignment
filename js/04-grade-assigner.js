// 1. Collect the a number between 1 and 100 from the user.
let score = prompt('Enter a number between 1 and 100')

// 2. Make sure that number is between 1 and 100, 
// if it is not, let the user know that only numbers between 1 and 100 are accepted.
if (score < 1 || score > 100)
    document.write('Only numbers between 1 and 100 are accepted.')
// If the score is less than 60
else if (score < 60)
    document.write('You received a F')
// If the score is between 60 and 69
else if (score < 70)
    document.write('You received a D')
// If the score is between 70 and 79
else if (score < 80)
    ocument.write('You received a C')
// If the score is between 80 and 89
else if (score < 90)
    document.write('You received a B')
// If the score is between 90 and 100
else
    document.write('You received an A')