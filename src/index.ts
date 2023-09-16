import express, { Express, Request, Response } from "express";
import { getData, getHeaders } from "./getData";
import { multerStorageConfig } from "./utils/multerConfig";
import { clearFiles } from "./utils/clearFiles";
import path from "path";
const multer = require("multer");
const cors = require("cors");

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: "https://v2-csv-parser-fe.netlify.app/", optionsSuccessStatus: 200 }));
const PORT = 8000;

const storage = multerStorageConfig();
const upload = multer({ storage });

// clering contents of the uploaded file before performing new request
clearFiles();

app.post("/fileupload/getheaders", upload.single("csvfile"), (req: Request, res: Response) => {
	const { headers = "" } = req.body;
	let headerData: string[] = [];
	const baseUploadPath = path.resolve(__dirname, "../public/uploads");

	const isFileUploaded = Boolean(req.file);
	const isHeaderPassed = Boolean(headers);

	if (!isFileUploaded && !isHeaderPassed) {
		return res.status(400).json({
			message: "file not uploaded, no headers requested",
		});
	}

	if (!isFileUploaded) {
		return res.status(400).json({
			message: "file not uploaded",
		});
	}

	if (!isHeaderPassed) {
		return res.status(400).json({
			message: "no headers requested",
		});
	}

	headers.split(",").forEach((element: string) => {
		headerData.push(element.trim());
	});

	getHeaders(baseUploadPath, headerData).then((data) => {
		res.status(200).json(data);
	});
});

app.post("/fileupload/getcsvdata", upload.single("csvfile"), (req: Request, res: Response) => {
	const { headers = "" } = req.body;
	let headerData: string[] = [];
	const baseUploadPath = path.resolve(__dirname, "../public/uploads");

	const isFileUploaded = Boolean(req.file);
	const isHeaderPassed = Boolean(headers);

	if (!isFileUploaded && !isHeaderPassed) {
		return res.status(400).json({
			message: "file not uploaded, no headers requested",
		});
	}

	if (!isFileUploaded) {
		return res.status(400).json({
			message: "file not uploaded",
		});
	}

	if (!isHeaderPassed) {
		return res.status(400).json({
			message: "no headers requested",
		});
	}

	headers.split(",").forEach((element: string) => {
		headerData.push(element.trim());
	});

	getData(baseUploadPath, headerData).then((data) => {
		res.status(200).json(data);
	});
});

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		message: "use /fileupload endpoint to test feature",
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
