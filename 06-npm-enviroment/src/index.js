import { connectToDatabase } from "./data/database.js";

async function main() {
    await connectToDatabase("a", "uzumaki");
}
main();