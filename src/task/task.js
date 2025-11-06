import chalk from "chalk";
import { readDatabase } from "../file/file.js";

export default class Task {
	constructor(id, name) {
		this.id = id;
		this.task = name;
		this.createdAt = new Date().toLocaleDateString("pt-BR");;
		this.done = false;
	}

	static async create(name) {
		try {
			const data = await readDatabase();
			// const tasksArray = [...data.tasks];
			const id = assignId(...data.tasks);
			const createdAt = new Date().toLocaleDateString("pt-BR");
			const done = false;
			return new Task(id, name);
		} catch (error) {
			console.error(chalk.bgRed(error.message));
			throw error;
		}
	}
}

function randomId() {
	return (Math.floor(Math.random() * (1000000 - 1 + 1)) + 1).toString();
}

function assignId() {
	const tasks = Array.from(arguments);
	const id = randomId();
	let repeated = false;
	tasks.forEach((task) => {
		if (task.id === id) {
			repeated = true;
		}
	});
	if (!repeated) {
		return id;
	}
	assignId();
}
