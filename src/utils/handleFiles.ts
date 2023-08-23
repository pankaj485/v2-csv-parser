import fs from "fs";
import handleError from "./handleError";

const checkUploadDir = (baseUploadPath: string) => {
	try {
		if (!fs.existsSync(baseUploadPath)) {
			console.log("Creating upload directory.");
			fs.mkdirSync(baseUploadPath, { recursive: true });
			return true;
		} else {
			console.log("Upload directory exists");
			return true;
		}
	} catch (error) {
		handleError(error, "Error while checking file upload directory");
		return false;
	}
};

const getValidFiles = (baseUploadPath: string) => {
	try {
		const files = fs.readdirSync(baseUploadPath);

		// only return .csv format files
		return files.filter((currentFile) => {
			const _ = currentFile.split(".");
			return _[_.length - 1] === "csv";
		});
	} catch (error) {
		handleError(error, "error while getting valid files");
	}
};

export { checkUploadDir, getValidFiles };
