import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { scoreAnswers, type Answers } from "./utils/scoring";

type Screen = "home" | "quiz" | "result";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [result, setResult] = useState<{ type: string; axisResults: ReturnType<typeof scoreAnswers>["axisResults"] } | null>(
    null,
  );

  function handleComplete(answers: Answers) {
    setResult(scoreAnswers(answers));
    setScreen("result");
  }

  function handleRetake() {
    setResult(null);
    setScreen("home");
  }

  return (
    <div className="app-shell">
      {screen === "home" && <Home onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && <Quiz onComplete={handleComplete} />}
      {screen === "result" && result && (
        <Result type={result.type} axisResults={result.axisResults} onRetake={handleRetake} />
      )}
    </div>
  );
}
