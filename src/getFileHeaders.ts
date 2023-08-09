import fs from "fs";
import path from "path";

import csv from "csv-parser";

import handleError from "./utils/handleError";
import { getValidFiles } from "./utils/handleFiles";

interface fileHeaderData {
	headersInFile: string[];
	requestedHeaders: string[];
	validHeaders: string[];
	inValidHeaders: string[];
}

const getFileHeaders = (baseUploadPath: string) => {
	const file = getValidFiles(baseUploadPath)[0];
	// const file = "sample.csv";
	const filePath = path.resolve(__dirname, baseUploadPath, file);
	const headerRowNum = 1;
	let headersInFile: string[] = [];
	let validHeaders: string[] = [];
	let inValidHeaders: string[] = [];
	let headersFromParam: string[] = ["description", "mojo", "vendix", "industry"];
	let requestedHeaders: string[] = [...new Set(headersFromParam)];

	if (file !== "undefined") {
		let currentLine: number = 0;
		fs.createReadStream(filePath)
			.pipe(csv())
			.on("data", (data: any) => {
				currentLine++;
				// if (currentLine >= from_line && (to_line === -903_845_097 || currentLine <= to_line)) {
				if (currentLine === headerRowNum) {
					headersInFile = [...headersInFile, ...new Set(Object.keys(data))];
				}

				headersFromParam?.forEach((header, headerIndex) => {
					if (data[header.trim()]) {
						validHeaders.push(header);
						validHeaders = [...new Set(validHeaders)];
					} else {
						inValidHeaders.push(header);
						inValidHeaders = [...new Set(inValidHeaders)];
					}
					headersFromParam.splice(headerIndex, 1);
				});
				// }
			})
			.on("end", () => {
				console.log({
					headersInFile,
					requestedHeaders,
					validHeaders,
					inValidHeaders,
				});
			})
			.on("error", (error) => {
				handleError(error, "error while getting headers");

				console.log({
					headersInFile,
					requestedHeaders,
					validHeaders,
					inValidHeaders,
				});
			});
	} else {
		console.log("No files found. Please upload at least one file to continue.");
	}
};

export default getFileHeaders;
