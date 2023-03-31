import "./App.css";

function App() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
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
