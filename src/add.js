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
	console.log(nameTask)
	if (fs.existsSync(fullPath)) {
		try {
			const data = fs.readFileSync(fullPath, "utf8");
			const formattedData = JSON.parse(data);
			const newTask = new Task(nameTask.name);
			const tasks = [...formattedData.tasks];
            tasks.push(newTask);
            formattedData.tasks = tasks;
            addDatabase(JSON.stringify(formattedData));
		} catch (erro) {
			console.error(chalk.bgRed(erro));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}

function addDatabase(formattedData) {
	fs.writeFile(fullPath, formattedData, (erro) => {
		if (erro) throw erro;
		console.log("Arquivo criado com sucesso!");
	});
}
