async function getSchedule() {
    const snapshot = await db.collection("schedule").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function updateSchedule(id, data) {
    await db.collection("schedule").doc(id).update(data);
}
