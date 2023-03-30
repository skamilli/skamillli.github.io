import { vapidKeys } from "./const";

export function subscribe() {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      // Поддержка устаревшей версии с функцией обратного вызова.
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
      const pushSubscription = subscribeUserToPush();
      pushSubscription.then((data) => console.log(data));
    }
  }).then(function (permissionResult) {
    if (permissionResult !== "granted") {
      throw new Error("Permission not granted.");
    }
  });
}

async function subscribeUserToPush() {
  const registration = await navigator.serviceWorker.register("sw.js");
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: btoa(vapidKeys.public),
  };
  const pushSubscription = await registration.pushManager.subscribe(
    subscribeOptions
  );
  console.log("PushSubscription: ", JSON.stringify(pushSubscription));
  return pushSubscription;
}
