import {

  PrintResetButton,
  printCounter,
  printPaperRockScissors,
  setContainers
} from "./pages/piedraPapelTIjeras/piedraPapelTijeras";
import "./style.css";

const printheader = () => {
  const app = document.querySelector("#app");
  const containergames = document.querySelector("#containerGames");

  const header = document.createElement("header");

  const PPTButton = document.createElement("button");
  const triviaButton = document.createElement("button");
  const bingoButton = document.createElement("button");

  PPTButton.textContent = "Piedra, Papel o Tijeras";
  triviaButton.textContent = "Trivia";
  bingoButton.textContent = "Bingo";

  PPTButton.addEventListener("click", () => {
    containergames.innerHTML= ""
 setContainers();
 printCounter();
 printPaperRockScissors();
 PrintResetButton()
  });

  header.append(PPTButton);
  header.append(triviaButton);
  header.append(bingoButton);

  app.append(header);
  app.append(containergames);
};

printheader();
