// script.js

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDisplay = document.getElementById('score');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    let score = 0;

    // Collect user answers
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value
    ];

    // Compare user answers with correct answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25; // Each correct answer gives 25%
        }
    });

    // Update score display
    scoreDisplay.textContent = `${score}%`;
});
