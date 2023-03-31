import "./App.css";
import Push from "push.js"

function App() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.ts");
  }

  return (
    <>
      {navigator.serviceWorker ? (
        <button onClick={showNotification}>Получить уведомление</button>
      ) : (
        <h1>Браузер не поддерживает</h1>
      )}
    </>
  );
}

export default App;

function showNotification() {
  Push.create("test notification", {
    body:"Привет"
  })
}
