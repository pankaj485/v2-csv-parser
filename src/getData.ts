import path from "path";
import { processData } from "./parser";
import getFileHeaders from "./getFileHeaders";
import { checkUploadDir } from "./utils/handleFiles";

// const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");
// const headers = ["industry", "description", "level", "insta", "mojo", "vendix"];

// processData(baseUploadPath, headers).then((data) => data);

const getData = (baseUploadPath: string, headers: string[]) => {
	return processData(path.resolve(__dirname, baseUploadPath), headers);
};

const getHeaders = async (baseUploadPath: string, headers: string[]) => {
	const isValidUpoadDir = checkUploadDir(baseUploadPath);

	if (!isValidUpoadDir) {
		return null;
	}

	const headerData: any = await getFileHeaders(baseUploadPath, {
		headerColumn: 1,
		headers: headers,
	});

	return headerData;
};

export { getData, getHeaders };
