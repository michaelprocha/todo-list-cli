import Table from "cli-table3";
import chalk from "chalk";
import { readDatabase } from "../file/file.js";

export default async function tableView() {
	const data = await readDatabase();
	let table = new Table({
		head: [chalk.blue("ID"), chalk.blue("Tarefa"), chalk.blue("Criado"), chalk.blue("Finalizado")],
	});
	data.tasks.forEach((task) => {
		if (task.done) {
			table.push([chalk.green(task.id), chalk.green(task.task), chalk.green(task.createdAt), chalk.green(task.done)]);
		} else {
			table.push([chalk.red(task.id), chalk.red(task.task), chalk.red(task.createdAt), chalk.red(task.done)]);
		}
	});
	console.log(table.toString());
}