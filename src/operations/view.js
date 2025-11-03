function tableView(data) {
	const formattedData = JSON.parse(data).tasks;
	var table = new Table({
		head: [chalk.blue("ID"), chalk.blue("Tarefa"), chalk.blue("Criado"), chalk.blue("Finalizado")],
	});
	formattedData.forEach((task) => {
		if (task.done) {
			table.push([chalk.green(task.id), chalk.green(task.task), chalk.green(task.createdAt), chalk.green(task.done)]);
		} else {
			table.push([chalk.red(task.id), chalk.red(task.task), chalk.red(task.createdAt), chalk.red(task.done)]);
		}
	});
	console.log(table.toString());
}