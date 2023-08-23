import fs from "fs";

const isOfFormat = (fileToVerify: string, formatToVerify: string) => {
	const fileFormat = fileToVerify.split(".")[fileToVerify.split(".").length - 1];

	return fileFormat === formatToVerify ? true : false;
};

const getFiles = (basePath: string) => {
	const availableFiles: string[] = [];

	const filesArray = fs.readdirSync(basePath);

	if (!!filesArray.length) {
		filesArray.map((file) => {
			if (isOfFormat(file, "csv")) {
				availableFiles.push(file);
			} else if (isOfFormat(file, "xlsx")) {
				console.log("not converting xlsx right nows");
				// availableFiles.push(convertToFormat(file, basePath, "csv"));
			}
		});
	}

	return [...new Set(availableFiles)];
};

export { getFiles };
