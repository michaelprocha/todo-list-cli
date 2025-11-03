import Enquirer from "enquirer";
import chalk from "chalk";
const enquirer = new Enquirer();

async function questMenu() {
	const menu = await enquirer.prompt({
		type: "select",
		name: "choice",
		message: "Selecione a opção desejada:",
		choices: [
			{ name: "Adicionar tarefa", message: chalk.blue("Adicionar tarefa") },
			{ name: "Editar tarefa", message: chalk.yellow("Editar tarefa") },
			{ name: "Remover tarefa", message: chalk.red("Remover tarefa") },
			{ name: "Completar tarefa", message: chalk.green("Completar tarefa") },
			{ name: "Sair", message: chalk.bgWhite(chalk.black("Sair")) },
		],
	});
	return menu.choice;
}

async function questAdd() {
	const nameTask = await enquirer.prompt({
		type: "input",
		name: "name",
		message: "Escreva o nome da tarefa",
	});
	return nameTask;
}

async function questRemove() {
	const taskForRemove = await enquirer.prompt({
		type: "input",
		name: "id",
		message: `Digite o id da tarefa que deseja remover ou cancele digitando "Cancelar":`,
	});
	return taskForRemove.id;
}

export { questMenu, questAdd, questRemove };