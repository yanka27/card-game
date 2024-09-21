document.addEventListener("DOMContentLoaded", () => {
    const readyBtn = document.getElementById("ready");
    const giveUpBtn = document.getElementById("give-up");
    const turnText = document.getElementById("turn-text");
    const healthDisplay = document.getElementById("health-display");
    const deckCountDisplay = document.getElementById("deck-count");
  
    const player1Cards = document.getElementById("player1-cards");
    const player2Cards = document.getElementById("player2-cards");
  
    let health = 100;
    let deckCount = 24;
    let isPlayerTurn = true; // Track who's turn it is
  
    // Card images for both players
    const player1Deck = [
      'card1.webp', 'card2.webp', 'card3.webp', 'card4.webp', 'card5.webp'
    ];
    const player2Deck = [
      'card6.webp', 'card7.webp', 'card8.webp', 'card9.webp', 'card10.webp'
    ];
  
    // Handle Ready button click
    readyBtn.addEventListener("click", () => {
      dealCards();
      readyBtn.style.display = 'none';
      turnText.textContent = "Your Turn";
    });
  
    // Function to deal cards with animation
    function dealCards() {
      player1Deck.forEach((card, index) => {
        setTimeout(() => {
          const cardImg = document.createElement("img");
          cardImg.src = `/path/to/cards/${card}`; // Path to your .webp images
          cardImg.classList.add("dealt");
          player1Cards.appendChild(cardImg);
        }, index * 200); // Add delay for animation
      });
  
      player2Deck.forEach((card, index) => {
        setTimeout(() => {
          const cardImg = document.createElement("img");
          cardImg.src = `../assets${card}`;
          cardImg.classList.add("dealt");
          player2Cards.appendChild(cardImg);
        }, index * 200); // Add delay for animation
      });
    }
  
    // Function to change turn
    function switchTurn() {
      isPlayerTurn = !isPlayerTurn;
      turnText.textContent = isPlayerTurn ? "Your Turn" : "Opponent's Turn";
    }
  
    // Simulate switching turns
    setTimeout(() => {
      switchTurn(); // Simulate opponent's turn
    }, 5000); // Switch turns after 5 seconds
  
    // Handle Give Up button click
    giveUpBtn.addEventListener("click", () => {
      window.location.href = '/lobby'; // Redirect to the lobby
    });
  
    // Function to update health dynamically
    function updateHealth(amount) {
      health += amount;
      healthDisplay.textContent = `Health: ${health}`;
      if (health <= 0) {
        alert('Game Over! You have no health left.');
        window.location.href = '/lobby'; // Return to lobby
      }
    }
  
    // Function to update deck count dynamically
    function updateDeckCount(amount) {
      deckCount += amount;
      deckCountDisplay.textContent = deckCount;
    }
  });
  