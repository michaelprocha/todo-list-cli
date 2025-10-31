import Enquirer from "enquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import Task from "./task.js";

const fullPath = path.join(process.cwd(), "src/database/db.json");
const enquirer = new Enquirer();

export default async function add() {
	const nameTask = await enquirer.prompt({
		type: "input",
		name: "name",
		message: "Escreva o nome da tarefa",
	});
	if (fs.existsSync(fullPath)) {
		try {
			const data = fs.readFileSync(fullPath, "utf8");
			const formattedData = JSON.parse(data);
			const newTask = new Task(nameTask.name);
			const tasks = [...formattedData.tasks];
			tasks.push(newTask);
			formattedData.tasks = tasks;
			await addDatabase(formattedData);
		} catch (erro) {
			console.error(chalk.bgRed(erro.message));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}

async function addDatabase(formattedData) {
	try {
		await fs.promises.writeFile(fullPath, JSON.stringify(formattedData, null, 2));
		console.log(chalk.bgGreen("Tarefa adicionada com sucesso!"));
	} catch (erro) {
		console.error(chalk.bgRed(erro.message));
	}
}
