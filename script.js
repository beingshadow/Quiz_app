const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello to my land",
    b: "Hey Text MarkUp Language",
    c: "Hello Text MarkUp language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheet",
    b: "Cascading Style sheep",
    c: "Cartoon Style Sheet",
    d: "None of these",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "Hello to the Product",
    b: "Hyper Text Transfer Product",
    c: "Hyper Text Technology Protocol",
    d: "Hyper Text Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "Javasheet",
    c: "Javaship",
    d: "Javasiping",
    ans: "ans1",
  }
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore=document.querySelector("#showscore");

let questionCount = 0;
let score=0;

const loadquestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadquestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElement) => {
    if (curAnsElement.checked) 
    {answer = curAnsElement.id;}
  });
  return answer;
};

const deSelectAll=()=>
{
  answers.forEach((curAnsElement) => {
    curAnsElement.checked=false;
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer===quizDB[questionCount].ans)
  {
    score++;
  }

  questionCount++;

  deSelectAll();

  if(questionCount<quizDB.length)
  {
    loadquestion();
  }
  else
  {
    showScore.innerHTML=
      `<h3>Your score is ${score}/${quizDB.length} ✌️✌️ </h3>
      <button class="btn" onclick="location.reload()"> Playagain</button>`;
      showScore.classList.remove('scoreArea');
  }
});
