import fs from "fs";
import path from "path";

const fullPath = path.join(process.cwd(), "src/database/db.json");

async function writeDatabase(formattedData) {
	try {
		await fs.promises.writeFile(fullPath, JSON.stringify(formattedData, null, 2));
	} catch (error) {
		throw error;
	}
}

async function readDatabase() {
	try {
		return JSON.parse(fs.readFileSync(fullPath, "utf8"));
	} catch (error) {
		throw error;
	}
}

export { writeDatabase, readDatabase };