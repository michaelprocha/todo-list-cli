import chalk from "chalk";
import fs from "fs";
import path from "path";
import Table from "cli-table3";

const fullPath = path.join(process.cwd(), "src/database/db.json");

function tableView(dados) {
	const dadosFormatado = JSON.parse(dados).tasks;
	var table = new Table({
		head: [chalk.blue("ID"), chalk.blue("Tarefa"), chalk.blue("Criado"), chalk.blue("Finalizado")],
	});
	dadosFormatado.forEach((element) => {
		if (element.done) {
			table.push([chalk.green(element.id), chalk.green(element.task), chalk.green(element.createdAt), chalk.green(element.done)]);
		} else {
			table.push([chalk.red(element.id), chalk.red(element.task), chalk.red(element.createdAt), chalk.red(element.done)]);
		}
	});
	console.log(table.toString());
}

function readDatabase() {
	if (fs.existsSync(fullPath)) {
		try {
			const dados = fs.readFileSync(fullPath, "utf8");
			tableView(dados);
		} catch (erro) {
			console.error(chalk.bgRed(erro));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}

export {readDatabase};