import "./piedraPapelTijeras.css";

export const paperRockScissors = [
  {
    name: "Piedra",
    img: "https://res.cloudinary.com/daowiromv/image/upload/v1706434606/game-hub/fist_lpdfte.png",
  },
  {
    name: "Papel",
    img: "https://res.cloudinary.com/daowiromv/image/upload/v1706434607/game-hub/hand_1_k6s8sf.png",
  },
  {
    name: "Tijeras",
    img: "https://res.cloudinary.com/daowiromv/image/upload/v1706434606/game-hub/peace_rmrq0e.png",
  },
];

export let UserCount = localStorage.getItem("USER") || 0;
export let CpuCount = localStorage.getItem("CPU") || 0;



const containerGames = document.querySelector("#containerGames");


export const setContainers = () => {
  const container = document.createElement("div");
  container.className = "container"

  containerGames.append(container)
}






export const printCounter = () => {
  const container = document.querySelector(".container")
    container.innerHTML = "";
    setContainers()
    const divCounter = document.createElement("div");
    const user = document.createElement("p");
    const boxCounter = document.createElement("div");
    const counter = document.createElement("p");
    const compu = document.createElement("p");

    divCounter.className = "divCounter"
    boxCounter.className = "counter";
    
  
    counter.textContent = `${UserCount}:${CpuCount}`;

    user.textContent = "USER";
    compu.textContent = "CPU";

    boxCounter.append(counter)
    divCounter.append(user);
    divCounter.append(boxCounter);
    divCounter.append(compu);

    container.append(divCounter);
}


export const printPaperRockScissors = () => {
  const divContainer = document.createElement("div");
  divContainer.className = "paperRockScissorsContainer";

  const divMessage = document.createElement("div");
  let message = document.createElement("p");

  divMessage.className = "message";
  message.id = "message";

  const divSelection = document.createElement("div");
  divSelection.className = "selection";

  for (const element of paperRockScissors) {
    const divElement = document.createElement("div");
    const elementImg = document.createElement("img");

    divElement.className = "divElement";
    elementImg.src = element.img;

    divElement.addEventListener("click", () => {
        message.textContent = `${GameFunction(element)}`;
        printCounter();
    });

    divElement.append(elementImg);
    divContainer.append(divElement);
  }
  divMessage.append(message);
  console.log(message);
  containerGames.append(divSelection);
  containerGames.append(divMessage);
  containerGames.append(divContainer);
};

export const PrintResetButton = () => {
  const divButton = document.createElement("div");
  const resetButton = document.createElement("button");

  divButton.className = "divButton";
  resetButton.className = "resetButton";

  resetButton.textContent = "Reiniciar Marcador";

  resetButton.addEventListener("click", () => {
    localStorage.removeItem("CPU");
    localStorage.removeItem("USER");
    UserCount = 0;
    CpuCount = 0;
    printCounter()
  });

  divButton.append(resetButton);
  document.querySelector("#containerGames").append(divButton);
};

export let GameFunction = (selection) => {
  let selectionCpu = Math.floor(Math.random() * 3);
  let cpuSelection = paperRockScissors[selectionCpu].name;

  const selectionContainer = document.querySelector(".selection");
  console.log(selectionContainer);
  selectionContainer.innerHTML = "";

  const divselectionCpu = document.createElement("div");
  const selectionCpuImg = document.createElement("img");

  const divselectionUser = document.createElement("div");
  const selectionUserImg = document.createElement("img");

  divselectionCpu.className = "divselectionCpu";
  divselectionUser.className = "divselectionCpu";
  selectionCpuImg.src = `${paperRockScissors[selectionCpu].img}`;
  selectionUserImg.src = selection.img;

  divselectionUser.append(selectionUserImg);
  divselectionCpu.append(selectionCpuImg);
  selectionContainer.append(divselectionUser);
  selectionContainer.append(divselectionCpu);

  let result = "";

  if (selection.name === "Piedra") {
    if (cpuSelection === selection.name) {
      result = "Empate, intente de nuevo.";
    } else if (cpuSelection === "Papel") {
      result = "Papel gana a Piedra. Punto para CPU.";
      CpuCount++;
      localStorage.setItem("CPU", `${CpuCount}`);
    } else if (cpuSelection === "Tijeras") {
      result = "Piedra gana a Tijeras. Punto para USER.";
      UserCount++;
      localStorage.setItem("USER", `${UserCount}`);
    }
  } else if (selection.name === "Papel") {
    if (cpuSelection === selection.name) {
      result = "Empate, intente de nuevo.";
    } else if (cpuSelection === "Tijeras") {
      result = "Tijeras ganan a Papel. Punto para CPU.";
      CpuCount++;
      localStorage.setItem("CPU", `${CpuCount}`);
    } else if (cpuSelection === "Piedra") {
      result = "Papel gana a Piedra. Punto para USER.";
      UserCount++;
      localStorage.setItem("USER", `${UserCount}`);
    }
  } else if (selection.name === "Tijeras") {
    if (cpuSelection === selection.name) {
      result = "Empate, intente de nuevo.";
    } else if (cpuSelection === "Piedra") {
      result = "Piedra gana a Tijeras. Punto para CPU.";
      CpuCount++;
      localStorage.setItem("CPU", `${CpuCount}`);
    } else if (cpuSelection === "Papel") {
      result = "Tijeras ganan a Papel. Punto para USER.";
      UserCount++;
      localStorage.setItem("USER", `${UserCount}`);
    }
  }

  return result;
};
