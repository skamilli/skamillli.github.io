import "./App.css";
import { subscribe } from "../push";

function App() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
    showNotification();
  }

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

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Test Push Notification", {
          body: "Hello!",
        });
      });
    }
  });
}
