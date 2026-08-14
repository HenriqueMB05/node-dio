import {connectToDatabase, databaseType} from "./utils/database.js";

connectToDatabase("mdbs");

console.log(databaseType.userType);