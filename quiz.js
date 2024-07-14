// Define the function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";

    // Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button is checked
    if (userAnswer) {
        userAnswer = userAnswer.value; // Get the value of the checked radio button
        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            // Provide feedback for correct answer
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Provide feedback for incorrect answer
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
