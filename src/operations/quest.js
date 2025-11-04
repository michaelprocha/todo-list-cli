import Enquirer from "enquirer";
import chalk from "chalk";
const enquirer = new Enquirer();

async function questMenu() {
	const menu = await enquirer.prompt({
		type: "select",
		name: "choice",
		message: "Selecione a opção desejada:",
		choices: [
			{ name: "Adicionar tarefa", message: chalk.green("Adicionar tarefa") },
			{ name: "Editar tarefa", message: chalk.yellow("Editar tarefa") },
			{ name: "Remover tarefa", message: chalk.red("Remover tarefa") },
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
	return nameTask.name;
}

async function questRemove() {
	const taskForRemove = await enquirer.prompt({
		type: "input",
		name: "id",
		message: `Digite o id da tarefa que deseja remover ou cancele digitando "Cancelar":`,
	});
	return taskForRemove.id;
}

async function checkedTaks() {
	const checked = await enquirer.prompt({
		type: "input",
		name: "id",
		message: `Digite o id da tarefa que deseja completar/descompletar ou cancele digitando "Cancelar":`,
	});
	return checked.id;
}

async function questEdit() {
	const menu = await enquirer.prompt({
		type: "select",
		name: "choice",
		message: "Selecione a opção desejada:",
		choices: [
			{ name: "Complete", message: chalk.green("Completar/Descompletar tarefa") },
			{ name: "Edit", message: chalk.yellow("Editar nome da tarefa") },
		],
	});
	return menu.choice;
}

export { questMenu, questAdd, questRemove, questEdit, checkedTaks };