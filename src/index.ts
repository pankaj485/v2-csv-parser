import express, { Express, Request, Response } from "express";

import { getData } from "./getData";

const app: Express = express();
app.use(express.json());

const PORT = 8000;

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
