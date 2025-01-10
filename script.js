// Questions Array
const questions = [
    "Hey Suhana, it's Shahrukh here! Do you have time to answer some questions for me?",
    "Am I the luckiest person alive because I have you?",
    "Will you be my forever sunshine?",
    "Would you let me be the reason behind your smile every day?",
    "Will you hold my hand and never let go, even if I’m annoying sometimes?",
    "Would you ever let me win an argument just because you love me?",
    "Do you think I’ll ever stop teasing you just to see you smile?",
    "Would you ever admit that I’m better at making you laugh than you are at making me?",
    "Do you love me as much as I love you?"
  ];
  
  // DOM Elements
  const questionContainer = document.getElementById("question");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const endingMessage = document.getElementById("ending-message");
  const specialButton = document.getElementById("special-button");
  
  let currentQuestionIndex = 0;
  
  // Function to Show Next Question
  yesButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      questionContainer.innerText = questions[currentQuestionIndex];
    } else {
      document.getElementById("question-container").style.display = "none";
      endingMessage.style.display = "block";
    }
  });
  
  // Function to Move "No" Button
  noButton.addEventListener("mouseover", () => {
    const container = document.querySelector(".button-container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    const randomX = Math.random() * (containerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (containerHeight - noButton.offsetHeight);
  
    noButton.style.position = "absolute";
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
  
  // Surprise Button Alert
  specialButton.addEventListener("click", () => {
    alert("Suhana, you are my world. I love you to infinity and beyond! 💕");
  });
  