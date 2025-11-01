import fs from "fs";
import Enquirer from "enquirer";
import chalk from "chalk";
import path from "path";

const enquirer = new Enquirer();
const fullPath = path.join(process.cwd(), "src/database/db.json");

export default async function remove() {
	const taskForRemove = await enquirer.prompt({
		type: "input",
		name: "id",
		message: `Digite o id da tarefa que deseja remover ou cancele digitando "Cancelar":`,
	});

	if (fs.existsSync(fullPath)) {
		try {
			const data = fs.readFileSync(fullPath, "utf8");
			const formattedData = JSON.parse(data);
			const formattedDataArray = [...formattedData.tasks];
			const newDataAfterRemove = formattedDataArray.filter((task) => task.id !== taskForRemove.id);

			if (newDataAfterRemove.length === formattedDataArray.length) {
				if (taskForRemove.id === "Cancelar" || taskForRemove.id === "cancelar" || taskForRemove.id === "CANCELAR") {
					console.log(chalk.bgGreen("Operação cancelada!"));
				} else {
					console.error(chalk.bgRed("ID incorreto! por favor verifique o id e tente novamente!"));
                    await remove();
				}
			} else {
				try {
					formattedData.tasks = [...newDataAfterRemove];
					await fs.promises.writeFile(fullPath, JSON.stringify(formattedData, null, 2));
					console.log(chalk.bgGreen("Tarefa removida com sucesso!"));
				} catch (erro) {
					console.error(chalk.bgRed(erro.message));
				}
			}
		} catch (error) {
			console.error(chalk.bgRed(error.message));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}
