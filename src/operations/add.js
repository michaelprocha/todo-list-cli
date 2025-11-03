import { questAdd } from "./quest.js";
import { readDatabase, writeDatabase } from "../file/file.js";
import Task from "../task/task.js";
import chalk from "chalk";

export default async function add() {
	try {
		const response = await questAdd();
		const newTask = await Task.create(response);
		const data = await readDatabase();
		data.tasks.push(newTask);
		await writeDatabase(data);
	} catch (error) {
		console.error(chalk.bgRed(error.message));
	}
}
