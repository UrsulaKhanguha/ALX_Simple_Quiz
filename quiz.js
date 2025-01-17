//Declare the correct answer
function checkAnswer(){
    correctAnswer = "4";

//Retrieve the user's answer
const selectedOption = document.querySelector('input[name="quiz"]:checked')
let userAnswer = "";
if (selectedOption)
{
    userAnswer = selectedOption.value;
}
 
//Compare the user's answer with the correct answer
const feedbackElement = document.getElementById("feedback");
if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
} else {
    feedbackElement.textContent = "That's incorrect. Try again!"
}

}

//Add an event listener to the submit button
const submitButton = document.getElementById("submit - answer") ;
submitButton.addEventListener ("click", checkAnswer) ;
