import { firestore, auth } from "./config.js";

export function addEntry(name) {
  firestore.collection("schedule").add({
    user: auth.currentUser ? auth.currentUser.displayName : "Гость",
    name: name
  }).then(() => {
    alert("Запись добавлена!");
  }).catch((error) => {
    console.error("Ошибка при добавлении:", error);
  });
}
