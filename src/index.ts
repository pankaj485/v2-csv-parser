import express, { Express, Request, Response } from "express";
import { getData } from "./getData";
import { multerStorageConfig } from "./utils/multerConfig";
const multer = require("multer");

const app: Express = express();
app.use(express.json());

const PORT = 8000;

const storage = multerStorageConfig();
const upload = multer({ storage });

app.post("/fileupload", upload.single("csvfile"), (req: Request, res: Response) => {
	// console.log(req.file);

	res.status(200).json({
		data: "yess",
	});
});

app.post("/parsefile", (req: Request, res: Response) => {
	const { baseUploadPath, headers } = req.body;

	getData(baseUploadPath, headers).then((data) => {
		res.status(200).json({
			data,
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
