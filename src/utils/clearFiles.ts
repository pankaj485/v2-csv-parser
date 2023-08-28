const fs = require("fs");
const path = require("path");

// method to remove the uploaded files from client side
async function clearFiles() {
	const basePath = path.join(__dirname, "../../public/uploads/");
	const uploadedFiles: string[] = [];

	// get the list of files present inside of the basePath
	fs.readdirSync(basePath).map((filename: string) => {
		uploadedFiles.push(basePath + filename);
	});

	// re-write the contents of the files to empty content
	fs.access(basePath, (error: Error) => {
		if (!error) {
			uploadedFiles.map((file) => {
				fs.createWriteStream(file).write("");
			});
		}
	});
}

export { clearFiles };
