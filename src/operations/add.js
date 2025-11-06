import { questAdd } from "./quest.js";
import { readDatabase, writeDatabase } from "../file/file.js";
import Task from "../task/task.js";
import chalk from "chalk";
import clear from "clear";

export default async function add() {
	try {
		const response = await questAdd();
		const newTask = await Task.create(response);
		const data = await readDatabase();
		data.tasks.push(newTask);
		await writeDatabase(data);
		clear();
		console.log(chalk.bgGreen('Tarefa adiciona com sucesso!'));
	} catch (error) {
		clear();
		console.error(chalk.bgRed(error.message));
	}
}
