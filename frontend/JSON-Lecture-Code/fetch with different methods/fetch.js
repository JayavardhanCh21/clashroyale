// fetch("https://jayavardhanch21.github.io/clashroyale-cards/db.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Fetch Error:", error));

fetch("https://jayavardhanch21.github.io/clashroyale-cards/db.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const cardsContainer = document.getElementById("cards-container");

    // Assuming 'cards' is the key that contains your array of card objects
    data.cards.forEach((card) => {
      // Create a div for each card
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      // Add card title
      const cardTitle = document.createElement("h3");
      cardTitle.textContent = card.name;
      cardDiv.appendChild(cardTitle);

      // Add card details (Rarity, Type, etc.)
      const cardRarity = document.createElement("p");
      cardRarity.textContent = `Rarity: ${card.rarity}`;
      cardDiv.appendChild(cardRarity);

      const cardType = document.createElement("p");
      cardType.textContent = `Type: ${card.type}`;
      cardDiv.appendChild(cardType);

      const cardElixir = document.createElement("p");
      cardElixir.textContent = `Elixir: ${card.elixir}`;
      cardDiv.appendChild(cardElixir);

      const cardEvolution = document.createElement("p");
      cardEvolution.textContent = `Evolution: ${card.evolution ? "Yes" : "No"}`;
      cardDiv.appendChild(cardEvolution);

      const cardTargets = document.createElement("p");
      cardTargets.textContent = `Targets: ${card.targets}`;
      cardDiv.appendChild(cardTargets);

      // Append the card div to the main container
      cardsContainer.appendChild(cardDiv);
    });
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });
