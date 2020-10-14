const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    addTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

const {
    loginUser,
    signUpUser
} = require('./APIs/users')


app.get('/todos', getAllTodos);
app.post('/todos', addTodo);
app.delete('/todos/:todoId', deleteTodo );
app.put('/todos/:todoId', editTodo);
app.post("/login", loginUser);
app.post("/signup",signUpUser)
exports.api = functions.https.onRequest(app);