import path from "path";
import { processData } from "./parser";

const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");
const headers = ["industry", "description", "level", "insta", "mojo", "vendix"];

processData(baseUploadPath, headers).then((data) => {
	console.log(data);
});
