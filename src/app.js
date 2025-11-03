import { questMenu } from "./operations/quest.js";
import add from "./operations/add.js";

async function home() {
	const response = await questMenu();
	if (response === "Adicionar tarefa") {
		await add();
		await home();
	} 
    // else if (menu.choice === "Editar tarefa") {
	// 	console.log(`${menu.choice} else if 2`);
	// 	await home();
	// } else if (menu.choice === "Remover tarefa") {
	// 	await remove();
	// 	await home();
	// } else if (menu.choice === "Completar tarefa") {
	// 	await complete();
	// 	await home();
	// } else {
	// 	console.log(`${menu.choice} else 5`);
	// }
	return;
}

await home();