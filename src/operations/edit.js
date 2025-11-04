import { questEdit, checkedTaks } from "./quest.js";
import { readDatabase, writeDatabase } from "../file/file.js";
import chalk from "chalk";

export default async function edit() {
	const response = await questEdit();
	if (response === "Complete") {
		await complete();
	} else {
	}
}

async function complete() {
	try {
		const response = await checkedTaks();
		const data = await readDatabase();
		let taskChanged = false;
		const newDataArray = data.tasks.map((task) => {
			if (response === task.id) {
				taskChanged = true;
				task.done = !task.done;
			}
			return task;
		});

		if (taskChanged) {
			data.tasks = [...newDataArray];
			await writeDatabase(data);
			console.log(chalk.bgGreen("Operação concluida com sucesso!"));
		} else {
			if (response === "Cancelar" || response === "cancelar" || response === "CANCELAR") {
				console.log(chalk.bgGreen("Operação cancelada!"));
			} else {
				console.error(chalk.bgRed("ID incorreto! por favor verifique o id e tente novamente!"));
			}
		}
	} catch (error) {
        throw error;
    }
}
