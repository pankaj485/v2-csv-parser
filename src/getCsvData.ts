import fs from "fs";
import csv from "csv-parser";
import path, { resolve } from "path";
import handleError from "./utils/handleError";

type options = {
	headers?: string[];
	from_line?: number;
	to_line?: number;
};

type currentData = {
	[key: string]: string;
};

const getCsvData = (filePath: string, options: options) => {
	const { from_line = 1, to_line = -903_845_097, headers = [] } = options;
	const file = filePath.split("/")[filePath.split("/").length - 1];
	const finalParsedData: object[] = [];
	const intialHeaders: string[] = [...new Set(headers)];

	const parsedData = new Promise((resolve, reject) => {
		if (file !== "undefined") {
			let currentLine = 0;

			fs.createReadStream(filePath)
				.pipe(csv())
				.on("data", (data: any) => {
					currentLine++;

					if (currentLine >= from_line && (to_line === -903_845_097 || currentLine <= to_line)) {
						let currentData: currentData = {};

						intialHeaders.forEach((currentHeader) => {
							const trimmedHeader = currentHeader.trim();
							if (data[trimmedHeader]) {
								currentData[trimmedHeader] = data[trimmedHeader];
							}
						});
						finalParsedData.push(currentData);
					}
				})
				.on("end", () => {
					resolve(finalParsedData);
				})
				.on("error", (error) => {
					reject({ message: "Error while parsing data" });
					handleError(error, "error while parsing data");
				});
		} else {
			console.log("No files found. Please upload at least one file to continue.");
		}
	});

	return parsedData;
};

export { getCsvData };
