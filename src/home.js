import chalk from "chalk";
import { readDatabase } from "./read.db.js";
import Enquirer from "enquirer";

const enquirer = new Enquirer();

// console.log(chalk.blue(new Date().toLocaleDateString("pt-BR"))); para criar tarefa

export default async function home() {
	readDatabase();
	const menu = await enquirer.prompt({
		type: "select",
		name: "choice",
		message: "Escolha sua cor favorita:",
		choices: [chalk.blue("Adicionar tarefa"), chalk.yellow("Editar tarefa"), chalk.red("Remover tarefa"), chalk.green("Completar tarefa"), chalk.bgWhite(chalk.black("Sair"))],
	});

	if (menu.choice === "Adicionar tarefa") {
		console.log(`${menu.choice} if 1`);
	} else if (menu.choice === "Editar tarefa") {
		console.log(`${menu.choice} else if 2`);
	} else if (menu.choice === "Remover tarefa") {
		console.log(`${menu.choice} else if 3`);
	} else if (menu.choice === "Completar tarefa") {
		console.log(`${menu.choice} else if 4`);
	} else {
		console.log(`${menu.choice} else 5`);
	}
}
