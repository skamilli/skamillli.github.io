import "./App.css";
import { subscribe } from "../push";

function App() {
  return (
    <>
      {navigator.serviceWorker ? (
        <button onClick={subscribe}>Подписаться на уведомления</button>
      ) : (
        <h1>Браузер не поддерживает</h1>
      )}
    </>
  );
}

export default App;
