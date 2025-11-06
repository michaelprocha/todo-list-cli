import fs from "fs";
import path from "path";

const fullPath = path.join(process.cwd(), "src/database/db.json");

async function writeDatabase(data) {
	try {
		const formattedData = JSON.stringify(data, null, 2);
		await fs.promises.writeFile(fullPath, formattedData);
	} catch (error) {
		throw error;
	}
}

async function readDatabase() {
	try {
		const data = fs.readFileSync(fullPath, "utf8");
		return JSON.parse(data);
	} catch (error) {
		throw error;
	}
}

export { writeDatabase, readDatabase };
