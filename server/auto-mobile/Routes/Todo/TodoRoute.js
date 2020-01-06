// const router = require('express').Router();
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var TodoController = require('../../Controllers/Todo/TodoController');

app.get('/todo/index', TodoController.getTodos);
app.post('/todo/store', TodoController.saveTodos);

module.exports = app;
