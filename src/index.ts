import path from "path";
const app = require("express")();
import { processData } from "./parser";

const PORT = 8000;

const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");
const headers = ["industry", "description", "level", "insta", "mojo", "vendix"];

// processData(baseUploadPath, headers).then((data) => console.log(data));

function getData(baseUploadPath: string, headers: string[]) {
	return processData(baseUploadPath, headers);
}

app.get("/getdata", (req: any, res: any) => {
	getData(baseUploadPath, headers).then((data) => res.status(200).json(data));
});

app.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});
