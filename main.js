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
    const data = await getSchedule();
    const tbody = document.querySelector("#dutyTable tbody");
    tbody.innerHTML = "";
    data.forEach(doc => {
    tbody.appendChild(createRow(doc));
    });
}

renderTable();
