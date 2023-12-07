document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = parseInt(document.getElementById('number').value);
    random(guess);
 });



 function random(userInput){
   let rand = Math.floor(Math.random() * 101);

    if (rand === userInput){
        displayMessage('you are correct!')
    } else{
        displayMessage('unfortunately not! the random number was: '+ rand +' and your guess was ' + userInput);
    }
    
    return (rand);
}

function displayMessage(message){
    const finalElement = document.getElementById('finalMessage');

    finalElement.textContent = message;
}