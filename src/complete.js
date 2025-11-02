import Enquirer from "enquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const enquirer = new Enquirer();

const fullPath = path.join(process.cwd(), "src/database/db.json");

export default async function complete() {
	const taskChoice = await enquirer.prompt({
		type: "input",
		name: "id",
		message: `Digite o id da tarefa que deseja completar ou cancele digitando "Cancelar":`,
	});

	if (fs.existsSync(fullPath)) {
		try {
			const data = fs.readFileSync(fullPath, "utf8");
			const formattedData = JSON.parse(data);
			const formattedDataArray = [...formattedData.tasks];

			if (taskChoice.id === "Cancelar" || taskChoice.id === "cancelar" || taskChoice.id === "CANCELAR") {
				console.log(chalk.bgGreen("Operação cancelada!"));
			} else {
				let idFound = false;
				formattedDataArray.forEach((task) => {
					if (task.id === taskChoice.id) {
						idFound = true;
						task.done = true;
					}
				});
				if (idFound) {
					try {
						formattedData.tasks = [...formattedDataArray];
						await fs.promises.writeFile(fullPath, JSON.stringify(formattedData, null, 2));
						console.log(chalk.bgGreen("Tarefa completada!"));
					} catch (error) {
						console.error(chalk.bgRed(error.message));
					}
				} else {
					console.error(chalk.bgRed("ID incorreto! por favor verifique o id e tente novamente!"));
					await complete();
				}
			}

			
			
		} catch (erro) {
			console.error(chalk.bgRed(erro));
		}
	} else {
		console.error(chalk.bgRed("Banco de dados não encontrado."));
	}
}
