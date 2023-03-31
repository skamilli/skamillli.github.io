export function subscribe() {
  const promise =new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      // Поддержка устаревшей версии с функцией обратного вызова.
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== "granted") {
      throw new Error("Permission not granted.");
    }
  });
  console.log(promise);
  return promise;
}
