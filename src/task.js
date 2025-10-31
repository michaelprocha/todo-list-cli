import fs from "fs";
import path from "path";
import chalk from "chalk";

const fullPath = path.join(process.cwd(), "src/database/db.json");

export default class Task {
	constructor(name) {
		if (fs.existsSync(fullPath)) {
			try {
				const data = fs.readFileSync(fullPath, "utf8");
				const tasks = JSON.parse(data).tasks;
				this.id = assignId(...tasks);
			} catch (erro) {
				console.error(chalk.bgRed(erro.message));
			}
		} else {
			console.error(chalk.bgRed("Banco de dados não encontrado."));
		}
		this.task = name;
		this.createdAt = new Date().toLocaleDateString("pt-BR");
		this.done = false;
	}
}

function randomId() {
	return Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
}

function assignId() {
	const tasks = Array.from(arguments);
	const id = randomId();
	let repeated = false;
	tasks.forEach((task) => {
		if (task === id) {
			repeated = true;
		}
	});
	if (!repeated) {
		return id;
	}
	assignId();
}
