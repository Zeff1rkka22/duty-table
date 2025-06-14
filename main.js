import { firestore } from "./config.js";

window.onload = function () {
  loadSchedule();
};

export function loadSchedule() {
  const header = document.getElementById("schedule-table-header");
  const body = document.getElementById("schedule-table-body");

  header.innerHTML = `<th>Пользователь</th><th>ФИО</th>`;

  firestore.collection("schedule").get().then((querySnapshot) => {
    body.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const row = document.createElement("tr");
      row.innerHTML = `<td>${docData.user || "—"}</td>` +
                      `<td>${docData.name || ""}</td>`;
      body.appendChild(row);
    });
  });
}
