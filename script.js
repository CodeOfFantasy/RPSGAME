   document.addEventListener("DOMContentLoaded", function() {
            const choices = ["rock", "paper", "scissors"];
            let playerScore = 0;
            let computerScore = 0;
			

            function updateScore() {
                document.getElementById("player-score").textContent = playerScore;
                document.getElementById("computer-score").textContent = computerScore;
            }

            function playGame(playerChoice) {
                const computerChoice = choices[Math.floor(Math.random() * 3)];

                const resultElement = document.getElementById("result");

                const playerImage = document.getElementById("playerImage");
                const computerImage = document.getElementById("computerImage");

                playerImage.src = "" + playerChoice + ".png"; 

                computerImage.src = "" + computerChoice + ".png"; 

                setTimeout(function() {
                    if (playerChoice === computerChoice) {
                        resultElement.textContent = "It's a tie!";
                        resultElement.style.color = "orange";
                        resultElement.style.border = "2px solid orange";
                        resultElement.style.height = "22px";
                    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
                            (playerChoice === "paper" && computerChoice === "rock") ||
                            (playerChoice === "scissors" && computerChoice === "paper")) {
                        resultElement.textContent = "You win!";
                        resultElement.style.color = "green";
                        resultElement.style.border = "2px solid green";
                        resultElement.style.height = "22px";
                        playerScore++;
                    } else {
                        resultElement.textContent = "You lose!";
                        resultElement.style.color = "red";
                        resultElement.style.border = "2px solid red";
                        resultElement.style.height = "22px";
                        computerScore++;
                    }

                    updateScore();
                }, 1100);
            }

            document.getElementById("rock").addEventListener("click", function() {
                playGame("rock");
            });

            document.getElementById("paper").addEventListener("click", function() {
                playGame("paper");
            });

            document.getElementById("scissors").addEventListener("click", function() {
                playGame("scissors");
            });
        });
    