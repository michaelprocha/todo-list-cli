import tableView from "./operations/view.js";
import { questMenu } from "./operations/quest.js";
import add from "./operations/add.js";
import remove from "./operations/remove.js";
import edit from "./operations/edit.js";
import chalk from "chalk";
import clear from "clear";

let start = true;

async function home() {
	if (start) {
		clear();
	}
	start = false;
	
	await tableView();
	const response = await questMenu();
	if (response === "Adicionar tarefa") {
		await add();
		await home();
	} else if (response === "Remover tarefa") {
		await remove();
		await home();
	} else if (response === "Editar tarefa") {
		await edit();
		await home();
	} else {
		console.log(chalk.bgGreen("Programa encerrado"))
		return;
	}
}

await home();
