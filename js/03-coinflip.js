// 1. Create a variable called coinFlip and set it equal to a random number. 
let coinFlip = Math.round(Math.random())

// 2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
let headsTails = prompt('Enter Heads or Tails')

// 3. Check the result of the coin flip. If it’s zero, it will be heads.
if (coinFlip == 0)
{
    // 4. If the result is heads and the user selects heads
    if (headsTails == 'Heads')
        document.write('The flip was heads and you chose heads...you win!')
    // 5. If the result is heads and the user selects tails
    else
        document.write('The flip was heads but you chose tails...you lose!')
}    
// If it’s one, it will be tails.
else if (coinFlip == 1)
{
    // 6. If the result is tails and the user selects heads
    if (headsTails == 'Heads')
        document.write('The flip was tails but you chose heads...you lose!')
    // 7. If the result is tails and the user selects tails
    else
        document.write('The flip was tails and you chose tails...you win!')
}   