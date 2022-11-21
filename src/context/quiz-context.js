import { createContext } from "react";

const QuizContext = createContext({
  quiz: null,
  setQuiz: () => {}
});

export default QuizContext;
