import fs from "fs";
import path from "path";

const fullPath = path.join(process.cwd(), "src/database/db.json");

async function writeDatabase(formattedData) {
	try {
		await fs.promises.writeFile(fullPath, JSON.stringify(formattedData, null, 2));
	} catch (error) {
		throw new error();
	}
}

async function readDatabase() {
	try {
		return JSON.parse(fs.readFileSync(fullPath, "utf8"));
	} catch (error) {
		throw error;
	}
}

// function writeDatabase(formattedData) {
// 	return new Promise((resolve, reject) => {
// 		fs.promises
// 			.writeFile(fullPath, JSON.stringify(formattedData, null, 2))
// 			.then(() => {
// 				console.log(chalk.bgGreen("Tarefa adicionada com sucesso!"));
// 				resolve(true);
// 			})
// 			.catch((erro) => {
// 				console.error(chalk.bgRed(erro.message));
// 				reject(erro);
// 			});
// 	});
// }

export { writeDatabase, readDatabase };