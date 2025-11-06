import chalk from "chalk";
import { questRemove } from "./quest.js";
import { readDatabase, writeDatabase } from "../file/file.js";
import clear from "clear";

export default async function remove() {
	try {
		const response = await questRemove();
		const data = await readDatabase();
		const newData = data.tasks.filter((task) => task.id !== response);

		if (data.tasks.length === newData.length) {

			if (response === "Cancelar" || response === "cancelar" || response === "CANCELAR") {
				clear();
				console.log(chalk.bgGreen("Operação cancelada!"));
			} else {
				console.error(chalk.bgRed("ID incorreto! por favor verifique o id e tente novamente!"));
				await remove();
			}
			
		} else {
			data.tasks = [...newData];
			await writeDatabase(data);
			clear();
			console.log(chalk.bgGreen("Tarefa removida!"));
		}
	} catch (error) {
		clear();
		console.error(chalk.bgRed(error.message));
	}
}
