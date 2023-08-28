import path from "path";

import { checkUploadDir } from "./utils/handleFiles";
import getFileHeaders from "./getFileHeaders";
import { getCsvData } from "./getCsvData";
import { getFiles } from "./utils/getFiles";

async function processData(baseUploadPath: string, headers: string[]) {
	const isValidUpoadDir = checkUploadDir(baseUploadPath);
	try {
		if (isValidUpoadDir) {
			const headerData: any = await getFileHeaders(baseUploadPath, {
				headerColumn: 1,
				headers: headers,
			});

			// console.log("\nHeaders data: ", headerData);

			const fileFullPath = path.resolve(__dirname, baseUploadPath, getFiles(baseUploadPath)[0]);
			const { validHeaders } = headerData;
			const parsingConfig = {
				headers: validHeaders,
				// from_line: 1,
				// to_line: 30,
			};

			const data = await getCsvData(fileFullPath, parsingConfig);
			// console.log("\nParsed data: ", data);
			return data;
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}
}

export { processData };
