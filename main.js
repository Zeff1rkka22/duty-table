async function initializeScheduleIfEmpty() {
  const snapshot = await db.collection("schedule").get();
  if (snapshot.empty) {
    const initialData = [
      { day: "Понедельник", name: "Юрьев Иван", group: "ПОВТ-23" },
      { day: "Понедельник", name: "Малышев Илья", group: "ПОВТ-23" },
      { day: "Вторник", name: "Нам Артем", group: "ПОВТ-23" },
      { day: "Вторник", name: "Подколзин Владислав", group: "ПОВТ-24" },
      { day: "Среда", name: "Мухаммед Али", group: "ПОВТ-24" },
      { day: "Среда", name: "Шишеня Виталий", group: "ПОВТ-24" },
      { day: "Четверг", name: "Филиппов Богдан", group: "ПОВТ-23" },
      { day: "Четверг", name: "Нам Артем", group: "ПОВТ-23" },
      { day: "Пятница", name: "Литвинова Кристина", group: "МДТ-24" },
      { day: "Пятница", name: "Вигуржинская Екатерина", group: "МДТ-24" },
      { day: "Суббота", name: "Юрьев Иван", group: "ПОВТ-23" },
      { day: "Суббота", name: "Шишеня Виталий", group: "ПОВТ-24" }
    ];

    for (const entry of initialData) {
      await db.collection("schedule").add({
        ...entry,
        gave: "",
        received: ""
      });
    }

    console.log("Начальные данные добавлены в Firestore.");
  } else {
    console.log("Данные уже существуют в Firestore.");
  }
}

async function getSchedule() {
  const snapshot = await db.collection("schedule").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function updateSchedule(id, data) {
  await db.collection("schedule").doc(id).update(data);
}

function createRow(doc) {
  const tr = document.createElement("tr");
  const fields = ["day", "name", "group", "gave", "received"];

  fields.forEach(field => {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.value = doc[field] || "";
    input.onchange = () => {
      doc[field] = input.value;
      updateSchedule(doc.id, doc);
    };
    td.appendChild(input);
    tr.appendChild(td);
  });

  return tr;
}

async function renderTable() {
  await initializeScheduleIfEmpty();  // Инициализация данных, если пусто
  const data = await getSchedule();
  const tbody = document.querySelector("#dutyTable tbody");
  tbody.innerHTML = "";
  data.forEach(doc => {
    tbody.appendChild(createRow(doc));
  });
}

renderTable();
