let input = prompt("What would you like to do?");
const todos = ["Wake up at 5am", "HIIT for 15 minutes"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("----------------------------------------");
        for (let i = 0; i <= todos.length - 1; i = i + 1) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("----------------------------------------");
    }
    else if (input === "new") {
        const newTodo = prompt("ok, what is your new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("enter the index you want to delete"));
        if (!Number.isNaN(index)) {
            const deletedItem = todos.splice(index, 1);
            console.log(`deleted ${index} : ${deletedItem[0]}`);
        }
        else {
            console.log("unknown index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");

