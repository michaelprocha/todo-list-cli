import chalk from "chalk";
import { questRemove } from "./quest.js";
import { readDatabase, writeDatabase } from "../file/file.js";

export default async function remove() {
	try {
		const response = await questRemove();
		const data = await readDatabase();
		const newData = data.tasks.filter((task) => task.id !== response);

		if (data.tasks.length === newData.length) {

			if (response === "Cancelar" || response === "cancelar" || response === "CANCELAR") {
				console.log(chalk.bgGreen("Operação cancelada!"));
			} else {
				console.error(chalk.bgRed("ID incorreto! por favor verifique o id e tente novamente!"));
				await remove();
			}
			
		} else {
			data.tasks = [...newData];
			writeDatabase(data);
			console.log(chalk.bgGreen("Tarefa removida!"));
		}
	} catch (error) {
		console.error(chalk.bgRed(error.message));
	}
}
