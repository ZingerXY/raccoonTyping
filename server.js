const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

class Application {
	constructor() {
		this.expressApp = express();
		this.attachRoutes();
	}

	attachRoutes() {
		let app = this.expressApp;
		let jsonParser = bodyParser.json();

		app.get('/', this.root.bind(this));

		app.get('/task.php', jsonParser, this.task.bind(this));

		app.use(express.static('public'));
	}

	/**
	 * Возвращает главную страницу
	 * @param {*} req 
	 * @param {*} res 
	 */
	root(req, res) {
		fs.readFile('./public/index.html', 'utf8', (err, text) => {
			res.send(text);
		});
	}

	/**
	 * Возваращает все задания
	 * @param {*} req 
	 * @param {*} res 
	 */
	task(req, res) {
		fs.readFile('./public/tasks.json', 'utf8', (err, data) => {
			let taskList = JSON.parse(data);
			let result = [];
			switch (req.query.type) {
				case 'task': 
					let task = taskList.filter(task => task.id == req.query.id).pop();
					if (task) {
						result = task;
					}
					break;
				case 'tasks':
					result = taskList;
					break;
				case 'names': 
				default:
					result = taskList.map(task => {
						return {
							id: task.id,
							name: task.name
						}
					})
					break;
			}
			res.json(result);
		})
	}
}

module.exports = Application;