import "./App.css";
import { subscribe } from "../push";

const title = "Push notification";
const options = {
    body: "test push"
 };

navigator.serviceWorker.ready.then(function(serviceWorker) {
  serviceWorker.showNotification(title, options);
});

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
