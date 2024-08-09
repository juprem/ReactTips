import express from "express";
import cors from "cors";

const todos = [
    { id: 1, title: "Learn Vite 2" },
    { id: 2, title: "Learn React" },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.get("/api/todos/loading", (req, res) => {
    new Promise((resolve) => setTimeout(() => resolve(res.json(todos)), 1000));
});

app.get("/api/todos/error", (req, res) => {
    res.error(500);
});

app.get(`/api/todos/:id`, (req, res) => {
    res.json(todos.find(todo => todo.id === req.params.id));
});

app.post("/api/todos", (req, res) => {
    setTimeout(() => {
        const body = req.body || {};
        if (body?.text !== "error") {
            const todo = {
                id: todos.length + 1,
                text: body.text ?? "",
            };
            todos.push(todo);
            res.json(todo);
        } else {
            res.status(400).json({ error: "Failed to add todo" });
        }
    }, 3000);
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});