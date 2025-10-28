import chalk from "chalk";
import fs from "fs";
import path from "path";
import Table from "cli-table3";

// console.log(chalk.blue(new Date().toLocaleDateString("pt-BR"))); para criar tarefa
const fullPath = path.join(process.cwd(), "src/database/db.json");

export default function home() {
	console.log(chalk.blue(`Todo list`));
	if (fs.existsSync(fullPath)) {
		try {
			const dados = fs.readFileSync(fullPath, "utf8");
			const dadosFormatado = JSON.parse(dados).tasks;
			console.table(JSON.parse(dados).tasks);
			var table = new Table({
				head: [
					chalk.blue("ID"),
					chalk.blue("Tarefa"),
					chalk.blue("Criado"),
					chalk.blue("Finalizado")
				],
			});
			dadosFormatado.forEach((element) => {
				if (element.done) {
					table.push([
						chalk.green(element.id),
						chalk.green(element.task),
						chalk.green(element.createdAt),
						chalk.green(element.done)
					]);
				} else {
					table.push([
						chalk.red(element.id),
						chalk.red(element.task),
						chalk.red(element.createdAt),
						chalk.red(element.done)
					]);
				}
			});
			console.log(table.toString());
		} catch (erro) {
			console.error(erro);
		}
	} else {
		console.log("Arquivo não encontrado.");
	}
}
