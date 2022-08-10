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
		app.use(express.static('public'));
		
		let jsonParser = bodyParser.json();

		app.get('/', this.root.bind(this));

		app.get('/task', jsonParser, this.task.bind(this));
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
		// console.log(req.query);
		// res.send(req.query.id);
		fs.readFile('./tasks.json', 'utf8', (err, data) => {
			let taskList = JSON.parse(data);
			res.json(taskList);
		})
	}
}

module.exports = Application;