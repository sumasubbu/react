const { db } = require("../util/admin");
// const { response } = require("express");

exports.getAllTodos = (request, response) => {
  db.collection("todos")
    //.orderBy("desc")
    .get()
    .then((data) => {
      let todos = [];
      data.forEach((doc) => {
        todos.push({
          todoId: doc.id,
          text: doc.data().text,
          completed: doc.data().completed,
      
        });
      });
      return response.json(todos);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.addTodo = (request, response) => {
  if (request.body.text.trim() === "") {
    return response.status(400).json({ title: "Must not be empty" });
  }
  const newTodoItem = {
    text: request.body.text,
    completed: request.body.completed,
    
  };
  db.collection("todos")
    .add(newTodoItem)
    .then((doc) => {
      const responseTodoItem = newTodoItem;
      responseTodoItem.id = doc.id;
      return response.json(responseTodoItem);
    })
    .catch((err) => {
      response.status(500).json({ error: 'Something went wrong'+ err.message });
      console.error(err);
    });
};

exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);
  document
    .get()
    .then((doc) => {
      //console.log(db.doc("/todos/${request.params.todoId}"))
      if (!doc.exists) {
      
        return response.status(404).json({ error: "Todo not found" });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: "Delete successful" });
    })
    .catch((err) => {
      console.error(err);
      response.status(500).json({ error: err.code });
    });
};

exports.editTodo = (request, response) => {
  if (request.body.todoId) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("todos").doc(`${request.params.todoId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated Successfully" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
