const multer = require("multer");
const path = require("path");
const fs = require("fs");

// config for uplaoding file with multer
const multerStorageConfig = () => {
	// storage realted config to manage file uploads
	const storage = multer.diskStorage({
		destination: (req: any, file: any, callback: any) => {
			const fileUploadPath = path.join(__dirname, "../../", "public/uploads");

			// if the directory doesn't exist then create it
			if (!fs.existsSync(fileUploadPath)) {
				fs.mkdirSync(fileUploadPath, { recursive: true }, (error: any) => {
					if (error) console.log(error);
				});
			}

			callback(null, fileUploadPath);
		},
		filename: (req: any, file: any, callback: any) => {
			const fileExtension = file.originalname.split(".")[1];
			callback(null, `uploadedFile.${fileExtension}`);
		},
	});

	return storage;
};

export { multerStorageConfig };
