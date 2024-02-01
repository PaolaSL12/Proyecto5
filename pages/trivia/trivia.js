import "./trivia.css";

export const preguntasCulturaGeneral = [
    {
      pregunta: "¿Cuál es la capital de Japón?",
      opciones: ["Pekín", "Seúl", "Tokio", "Bangkok"],
      respuestaCorrecta: "Tokio"
    },
    {
      pregunta: "¿En qué año se inauguró la Torre Eiffel en París?",
      opciones: ["1889", "1901", "1920", "1955"],
      respuestaCorrecta: "1889"
    },
    {
      pregunta: "¿Quién escribió 'Cien años de soledad'?",
      opciones: ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa", "Pablo Neruda"],
      respuestaCorrecta: "Gabriel García Márquez"
    },
    {
      pregunta: "¿Cuál es el océano más grande?",
      opciones: ["Atlántico", "Índico", "Antártico", "Pacífico"],
      respuestaCorrecta: "Pacífico"
    },
    {
      pregunta: "¿En qué país se encuentra la Gran Barrera de Coral?",
      opciones: ["Brasil", "Australia", "México", "India"],
      respuestaCorrecta: "Australia"
    },
    {
      pregunta: "¿Cuál es la montaña más alta del mundo?",
      opciones: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Vinson"],
      respuestaCorrecta: "Monte Everest"
    },
    {
      pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
      opciones: ["1942", "1945", "1950", "1939"],
      respuestaCorrecta: "1945"
    },
    {
      pregunta: "¿Cuál es el país más grande del mundo por área terrestre?",
      opciones: ["China", "Estados Unidos", "Rusia", "Canadá"],
      respuestaCorrecta: "Rusia"
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      respuestaCorrecta: "Leonardo da Vinci"
    },
    {
      pregunta: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
      opciones: ["Oxígeno", "Hierro", "Aluminio", "Silicio"],
      respuestaCorrecta: "Oxígeno"
    },
    {
      pregunta: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
      opciones: ["1942", "1945", "1950", "1939"],
      respuestaCorrecta: "1945"
    },
    {
      pregunta: "¿Cuál es el río más largo de América del Sur?",
      opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
      respuestaCorrecta: "Amazonas"
    },
    {
      pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
      opciones: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      respuestaCorrecta: "George Washington"
    },
    {
      pregunta: "¿En qué año se llevó a cabo la Revolución Rusa?",
      opciones: ["1905", "1917", "1923", "1930"],
      respuestaCorrecta: "1917"
    },
    {
      pregunta: "¿Cuál es la ciudad más poblada del mundo?",
      opciones: ["Nueva York", "Tokio", "Shanghái", "Mumbai"],
      respuestaCorrecta: "Tokio"
    },
    {
      pregunta: "¿Qué famosa obra literaria fue escrita por William Shakespeare?",
      opciones: ["Don Quijote", "Hamlet", "Orgullo y prejuicio", "Matar a un ruiseñor"],
      respuestaCorrecta: "Hamlet"
    },
    {
      pregunta: "¿Cuál es el desierto más grande del mundo?",
      opciones: ["Desierto del Sahara", "Desierto de Atacama", "Desierto de Gobi", "Desierto de Kalahari"],
      respuestaCorrecta: "Desierto del Sahara"
    },
    {
      pregunta: "¿Cuál es la capital de Australia?",
      opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
      respuestaCorrecta: "Canberra"
    },
    {
      pregunta: "¿En qué año se llevó a cabo la Revolución Francesa?",
      opciones: ["1776", "1789", "1800", "1812"],
      respuestaCorrecta: "1789"
    },
    {
      pregunta: "¿Quién es el autor de 'El principito'?",
      opciones: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Herman Melville", "Jane Austen"],
      respuestaCorrecta: "Antoine de Saint-Exupéry"
    },
  ];

export let generateRandomNumbers = (numbers) => {
    const randomNumbers = [];
    for (let i = 0; i < numbers; i++) {
        const randomNumber = Math.floor(Math.random() * 20);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } else {
            let newRandomNumber;
            do {
                newRandomNumber = Math.floor(Math.random() * 20);
            } while (randomNumbers.includes(newRandomNumber));

            randomNumbers.push(newRandomNumber);
        }
      }
    return randomNumbers
}


export const randomNumbers =  generateRandomNumbers(10);

export let selection = ""


const containerGames = document.querySelector("#containerGames")





export const PrintEstructure = () => {
    const containerTrivia = document.createElement("div");
    containerTrivia.id = "containerGame"

    containerGames.append(containerTrivia)

   let questions = randomQuiz()

   for (const question of questions) {
    const containerCard = document.createElement("div");
    const divQuestion = document.createElement("div");
    const questionp = document.createElement("p");
    containerCard.className = "containerCard";
    divQuestion.className = "divQuestion"

    questionp.textContent = question.pregunta

    const ul = document.createElement("ul");
    ul.className= "myul"

   
    for (const option of question.opciones) {
        const li = document.createElement("li")
        li.textContent = option
        ul.append(li)
    }

    ul.addEventListener("click", (e) => {
        const targetLi = e.target.closest("li");

        ul.querySelectorAll("li").forEach(li => {
            li.classList.remove("selected");
        });

        if (targetLi && !targetLi.classList.contains("selected")) {
            targetLi.classList.add("selected");
            selection = targetLi.textContent; 
        } else {
            selection = ""; 
        }
    });


    divQuestion.append(questionp);
    containerCard.append(divQuestion);
    containerCard.append(ul)
    containerTrivia.append(containerCard)
   }
   
}


export const randomQuiz = () => {

    let ramdomQuestions = [];

    for (let i = 0; i < randomNumbers.length; i++) {
        const number = randomNumbers[i];
        
        ramdomQuestions.push(preguntasCulturaGeneral[number])
    
      }

    return ramdomQuestions
    
}



export const ComprobationButton = () => {
    
    const containerT = document.querySelector("#containerGame")

    const containerButton = document.createElement("div");
    containerButton.className = "containerButton";

    const comprobationButton = document.createElement("button");

    comprobationButton.textContent = "COMPROBAR"

    let score = 0;

    const quiz = randomQuiz()

    const myuls = document.querySelectorAll(".myul");

    comprobationButton.addEventListener("click", () => {
        for (let i = 0; i < myuls.length; i++) {
            const ul = myuls[i];
            const selectedLi = ul.querySelector("li.selected");
            if (selectedLi) {
                if (selectedLi.textContent === quiz[i].respuestaCorrecta) {
                    score++;
                };
        };
    
    };
    alert(`Tu puntuación es de: ${score} puntos 🎉🏆`)
    containerGames.innerHTML = "";

    PrintEstructure();
    ComprobationButton();
}
)

    
    containerButton.append(comprobationButton)
    containerT.append(containerButton)

}

