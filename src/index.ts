import path from "path";

import { checkUploadDir, getValidFiles } from "./utils/handleFiles";
import getFileHeaders from "./getFileHeaders";
import { getCsvData } from "./getCsvData";
import { getFiles } from "./utils/getFiles";

const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");
const headers = ["description", "level", "insta", "mojo", "vendix"];

checkUploadDir(baseUploadPath);
getFileHeaders(baseUploadPath, {
	headerColumn: 1,
	headers: headers,
}).then((headerData: any) => {
	console.log("\nHeaders data: ", headerData);

	const { validHeaders } = headerData;

	const parsingConfig = {
		headers: validHeaders,
		from_line: 1,
		to_line: 3,
	};

	const fileFullPath = path.resolve(__dirname, baseUploadPath, getFiles(baseUploadPath)[0]);

	getCsvData(fileFullPath, parsingConfig).then((data) => {
		console.log("\nParsed data: ", data);
	});
});
