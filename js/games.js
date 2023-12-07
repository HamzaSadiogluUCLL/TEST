const game1 = {
  name: "Elden Ring",
  type: "Fantasy",
  rating: 10,
  isFavourite: true,
};
const game2 = {
  name: "Mafia I",
  type: "Action, RPG",
  rating: 8.6,
  isFavourite: true,
};
const game3 = {
  name: "Witcher 3",
  type: "Open World, Action, RPG",
  rating: 9.4,
  isFavourite: true,
};
const game4 = {
  name: "Devil May Cry 5",
  type: "Hack and Slash",
  rating: 8.2,
  isFavourite: true,
};

const granTurismo = {
  name: "Gran Turismo",
  type: "Racing",
  rating: 5,
  isFavourite: true,
};

const mijnGames = [game1, game2, game3, game4, granTurismo];

async function fetchGames() {
  const response = await fetch("http://localhost:3000/games");
  const result = await response.json();
  mijnGames.push(...result);
}

function toString(game) {
  return `Name: ${game.name} - Type: ${game.type} - Rating: ${game.rating} - Favorite:${granTurismo.isFavourite}`;
}

function printAllGames() {
  // Assuming you have a div with id 'status' in your HTML
  let statusDiv = document.getElementById("status");

  // Assuming addStatus is a function that adds text to the status div
  function addStatus(message) {
    statusDiv.innerHTML += `<p>${message}</p>`;
  }
  addStatus(toString(game1));
  addStatus(toString(game2));
  addStatus(toString(game3));
  addStatus(toString(game4));
  addStatus(toString(granTurismo));

  const avgRating = averageRating(mijnGames);
  const highestRate = highestRating(mijnGames);

  addStatus(`<p>Average Rating: ${avgRating}</p>`);
  addStatus(`<p>Highest Rating: ${highestRate}</p>`);
}

function averageRating(games) {
  let totalRating = 0;
  for (const game of games) {
    totalRating += game.rating;
  }
  return totalRating / games.length;
}

function highestRating(games) {
  let maxRating = 0;
  for (const game of games) {
    if (game.rating > maxRating) {
      maxRating = game.rating;
    }
  }
  return maxRating;
}

printAllGames();

// const averageRating = () => {
//let totalRating = 0;
//for (const i of mijnGames) {
// totalRating += i.rating;
//}
//return totalRating / mijnGames.length;

// changes the string without needing "refresh"
// for the original example we used "p" instead of  "h2"
const p = document.querySelector("h2");
setTimeout(() => {
  p.textContent = "<3";
}, 5000);
p.style.color = "red";

//You can only see the diffrence if u check the console :)
const getFilm = 2;
const apiUrl = `https://swapi.dev/api/films/${getFilm}`;

fetch(apiUrl) // ga naar de API url en haal gegevens op
  .then((response) => response.json()) //kijk wat er in de API zit
  .then((data) => {
    //doe iets met de gegevens

    console.log(`Filmtitel: ${data.title}`);
  })

  .catch((error) => {
    //soort fallback, als er iets foutloopt toon dat een error
    console.error("Er is een fout opgetreden:", error);
  });

// fetch(url)
//    .then(response) => {
//      if (!response.ok) {
//        throw new Error(
//          `Fout bij het ophalen van de gegevens. Status: ${response.status}`
//        );
//      }
//
//   return response.json();

//  }

//  .then(data) => {
//    const gameListElement = document.getElementById("gameList");
//    data.forEach((game) => {
//     const listItem = document.createElement("li");
//      listItem.textContent = game.name;
//      gameListElement.appendChild(listItem)
//    });
//  };
