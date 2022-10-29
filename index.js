function addTask(event){
    event.preventDefault();
    let text = document.getElementById("task-input");
    db.collection("task-list").add({
        task: text.value,
        status: "active"
    })
}