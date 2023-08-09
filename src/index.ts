import path from "path";

import { checkUploadDir, getValidFiles } from "./utils/handleFiles";
import getFileHeaders from "./getFileHeaders";

const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");

checkUploadDir(baseUploadPath);
getFileHeaders(baseUploadPath, {
	headerColumn: 1,
	headers: ["description", "level", "insta", "mojo", "vendix", "industry"],
}).then((data) => {
	console.log(data);
});
