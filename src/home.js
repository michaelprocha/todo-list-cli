import chalk from "chalk";
import { readDatabase } from "./read.db.js";
import Enquirer from "enquirer";
import add from "./add.js";

const enquirer = new Enquirer();

export default async function home() {
	readDatabase();
	const menu = await enquirer.prompt({
		type: "select",
		name: "choice",
		message: "Escolha sua cor favorita:",
		choices: [
			{ name: "Adicionar tarefa", message: chalk.blue("Adicionar tarefa") },
			{ name: "Editar tarefa", message: chalk.yellow("Editar tarefa") },
			{ name: "Remover tarefa", message: chalk.red("Remover tarefa") },
			{ name: "Completar tarefa", message: chalk.green("Completar tarefa") },
			{ name: "Sair", message: chalk.bgWhite(chalk.black("Sair")) },
		],
	});

	if (menu.choice === "Adicionar tarefa") {
		await add();
		home();
	} else if (menu.choice === "Editar tarefa") {
		console.log(`${menu.choice} else if 2`);
		home();
	} else if (menu.choice === "Remover tarefa") {
		console.log(`${menu.choice} else if 3`);
		home();
	} else if (menu.choice === "Completar tarefa") {
		console.log(`${menu.choice} else if 4`);
		home();
	} else {
		console.log(`${menu.choice} else 5`);
	}
	return;
}
