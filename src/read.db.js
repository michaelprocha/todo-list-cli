import chalk from "chalk";
import fs from "fs";
import path from "path";
import Table from "cli-table3";

const fullPath = path.join(process.cwd(), "src/database/db.json");

function tableView(data) {
	const formattedData = JSON.parse(data).tasks;
	var table = new Table({
		head: [chalk.blue("ID"), chalk.blue("Tarefa"), chalk.blue("Criado"), chalk.blue("Finalizado")],
	});
	formattedData.forEach((task) => {
		if (task.done) {
			table.push([chalk.green(task.id), chalk.green(task.task), chalk.green(task.createdAt), chalk.green(task.done)]);
		} else {
			table.push([chalk.red(task.id), chalk.red(task.task), chalk.red(task.createdAt), chalk.red(task.done)]);
		}
	});
	console.log(table.toString());
}

function readDatabase() {
	if (fs.existsSync(fullPath)) {
		try {
			const data = fs.readFileSync(fullPath, "utf8");
			tableView(data);
		} catch (erro) {
			console.error(chalk.bgRed(erro));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}

export {readDatabase};