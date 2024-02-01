import "./bingo.css";

export const bingoNumbers = [
    "B 1",
    "B 2",
    "B 3",
    "B 4",
    "B 5",
    "B 6",
    "B 7",
    "B 8",
    "B 9",
    "B 10",
    "B 11",
    "B 12",
    "B 13",
    "B 14",
    "B 15",
    "B 16",
    "B 17",
    "B 18",
    "I 19",
    "I 20",
    "I 21",
    "I 22",
    "I 23",
    "I 24",
    "I 25",
    "I 26",
    "I 27",
    "I 28",
    "I 29",
    "I 30",
    "I 31",
    "I 32",
    "I 33",
    "I 34",
    "I 35",
    "I 36",
    "N 37",
    "N 38",
    "N 39",
    "N 40",
    "N 41",
    "N 42",
    "N 43",
    "N 44",
    "N 45",
    "N 46",
    "N 47",
    "N 48",
    "N 49",
    "N 50",
    "N 51",
    "N 52",
    "N 53",
    "N 54",
    "G 55",
    "G 56",
    "G 57",
    "G 58",
    "G 59",
    "G 60",
    "G 61",
    "G 62",
    "G 63",
    "G 64",
    "G 65",
    "G 66",
    "G 67",
    "G 68",
    "G 69",
    "G 70",
    "G 71",
    "G 72",
    "O 73",
    "O 74",
    "O 75",
    "O 76",
    "O 77",
    "O 78",
    "O 79",
    "O 80",
    "O 81",
    "O 82",
    "O 83",
    "O 84",
    "O 85",
    "O 86",
    "O 87",
    "O 88",
    "O 89",
    "O 90",
  ];
  
 export let generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 90; i++) {
        const randomNumber = Math.floor(Math.random() * 90);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } else {
            let newRandomNumber;
            do {
                newRandomNumber = Math.floor(Math.random() * 90);
            } while (randomNumbers.includes(newRandomNumber));

            randomNumbers.push(newRandomNumber);
        }
      }
    return randomNumbers
}

export const setContainersB = () => {
    const appContainer = document.querySelector("#containerGames");
  
    const bingo = document.createElement("div");
    bingo.id = "bingo";
  
    appContainer.append(bingo)
  }


export const printStartButton = () => {
    localStorage.setItem('puntoRecarga', window.location.href);
  
    const divStartButton = document.createElement("div");
    const startButton = document.createElement("button");
  
    divStartButton.className = "startButton";
    divStartButton.id = "start"
    startButton.id = "startButton"
    startButton.textContent = "EMPEZAR JUEGO";
    startButton.addEventListener("click", () => {
      startButton.className = "none";
      divStartButton.className = "none";
     
      printSelectedNumber();
      SelectedNumber()
      printAllNumbers();
      printButtonPuse();
      printRestartButton();
  
      
    });
  
    divStartButton.append(startButton);
    document.querySelector("#bingo").append(divStartButton);
  };  

  export const printSelectedNumber = () => {
    const appContainer = document.querySelector("#bingo");

    const divSelectedNumber = document.createElement("div");
    const divNumber = document.createElement("div");
    const numberSelected = document.createElement("p");


    divSelectedNumber.className = "divSelectedNumber";
    divNumber.className = "divNumber"

    SelectedNumber()

    divNumber.append(numberSelected);
    divSelectedNumber.append(divNumber);
    appContainer.append(divSelectedNumber);
}

let paused = false;
let reset = false;

export function togglePause() {
    paused = !paused;
    console.log("pausa");
}


export const SelectedNumber = async () => {
  const selectedContainer = document.querySelector(".divNumber");

  const synth = window.speechSynthesis;

  if (selectedContainer) {
    const randomNumbers = generateRandomNumbers();
    const delay = 2000;

    for (let i = 0; i < randomNumbers.length; i++) {

      await new Promise((resolve) => setTimeout(resolve, delay));

      while (paused) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      selectedContainer.innerHTML = "";

      const numberSelected = document.createElement("p");
      const currentNumber = bingoNumbers[randomNumbers[i]];

      const utterThis = new SpeechSynthesisUtterance(`${currentNumber}`);

      synth.speak(utterThis);
      numberSelected.textContent = currentNumber;
      selectedContainer.append(numberSelected);

      const allNumberContainers = document.querySelectorAll(".divAllNumbers .divnumber");

      allNumberContainers.forEach((container) => {
        const containerNumber = container.querySelector("p").textContent;
        if (containerNumber === currentNumber) {
          container.classList.add("selected");
        }
      });
    }
  }
};

export const printAllNumbers = () => {
    const appContainer = document.querySelector("#bingo");

    const divAllNumbers = document.createElement("div");
    divAllNumbers.className = "divAllNumbers"

    const selected = document.querySelector("selected")

    for (let i = 0; i < bingoNumbers.length; i++) {
        const divnumber = document.createElement("div");
        const numberp = document.createElement("p");

        numberp.textContent = bingoNumbers[i]
        

        divnumber.className = "divnumber"
        divnumber.append(numberp);
        divAllNumbers.append(divnumber)
        
    }
 

    appContainer.append(divAllNumbers);
}

export const printButtonPuse = () => {
    const appContainer = document.querySelector("#bingo");

    const divPauseButton = document.createElement("div");
    const pauseButton = document.createElement("button");

    divPauseButton.className = "divPauseButton"
    pauseButton.textContent = "PAUSAR JUEGO";

    pauseButton.addEventListener("click", () => {
        togglePause()
    })


    divPauseButton.append(pauseButton);
    appContainer.append(divPauseButton);
}


export const printRestartButton = () => {

    const divButton = document.querySelector(".divPauseButton");
    const restartButton = document.createElement("button");

    restartButton.textContent = "REINICIAR JUEGO";

    restartButton.addEventListener("click", () => {
    document.querySelector("#bingo").innerHTML = ""
    location.reload()
    });


    divButton.append(restartButton)
}