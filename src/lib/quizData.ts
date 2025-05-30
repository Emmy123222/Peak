// quizData.ts
import { QuizQuestion } from "../../type/type"

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the value of x in the equation 2x + 5 = 11?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "2" },
      { id: "C", text: "1" },
      { id: "D", text: "4" },
    ],
    correctAnswer: "A",
  },
  {
    id: 2,
    question: "Simplify: 3(2x - 4) + 5x",
    type: "text-input",
    correctAnswer: "11x - 12",
  },
  {
    id: 3,
    question: "If f(x) = 2x^2 + 3x - 5, find f(-2).",
    type: "text-input",
    correctAnswer: "1",
  },
  {
    id: 4,
    question: "What is the area of a triangle with base 10 cm and height 8 cm?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "80 cm²" },
      { id: "B", text: "40 cm²" },
      { id: "C", text: "20 cm²" },
      { id: "D", text: "60 cm²" },
    ],
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "A rectangle has length 12 cm and width 8 cm. What is its area?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "20 cm²" },
      { id: "B", text: "96 cm²" },
      { id: "C", text: "40 cm²" },
      { id: "D", text: "64 cm²" },
    ],
    correctAnswer: "B",
  },
  {
    id: 6,
    question: "Evaluate: 3² + 4²",
    type: "text-input",
    correctAnswer: "25",
  },
  {
    id: 7,
    question: "Solve: 5x - 7 = 18",
    type: "text-input",
    correctAnswer: "5",
  },
  {
    id: 8,
    question: "What is the mean of: 4, 8, 6, 10, 12?",
    type: "text-input",
    correctAnswer: "8",
  },
  {
    id: 9,
    question: "Convert 0.75 to a percentage",
    type: "text-input",
    correctAnswer: "75%",
  },
  {
    id: 10,
    question: "What is 15% of 200?",
    type: "text-input",
    correctAnswer: "30",
  },
  {
    id: 11,
    question: "What is the value of π (pi) correct to 2 decimal places?",
    type: "text-input",
    correctAnswer: "3.14",
  },
  {
    id: 12,
    question: "Solve: 2x² = 18",
    type: "text-input",
    correctAnswer: "3",
  },
  {
    id: 13,
    question: "Which is a prime number?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "12" },
      { id: "C", text: "17" },
      { id: "D", text: "21" },
    ],
    correctAnswer: "C",
  },
  {
    id: 14,
    question: "What is the square root of 144?",
    type: "text-input",
    correctAnswer: "12",
  },
  {
    id: 15,
    question: "Simplify: (2x + 3x) - (x - 5)",
    type: "text-input",
    correctAnswer: "4x + 5",
  },
  {
    id: 16,
    question: "Factorize: x² - 5x + 6",
    type: "text-input",
    correctAnswer: "(x - 2)(x - 3)",
  },
  {
    id: 17,
    question: "If angle A in a triangle is 60° and angle B is 70°, what is angle C?",
    type: "text-input",
    correctAnswer: "50°",
  },
  {
    id: 18,
    question: "Find the LCM of 4 and 6.",
    type: "text-input",
    correctAnswer: "12",
  },
  {
    id: 19,
    question: "Simplify: 4(3x + 2) - 2x",
    type: "text-input",
    correctAnswer: "10x + 8",
  },
  {
    id: 20,
    question: "Solve: 7x + 2 = 30",
    type: "text-input",
    correctAnswer: "4",
  },
  // === More Questions (21–40) ===
  ...Array.from({ length: 20 }, (_, i): QuizQuestion => {
    const id = i + 21;
    return {
      id,
      question: `Real Math Question ${id}: Find the solution to x + ${id} = ${id * 2}`,
      type: "text-input",
      correctAnswer: `${id}`,
    };
  }),
];

export default quizData;
