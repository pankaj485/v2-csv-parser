import path from "path";
import { processData } from "./parser";

// const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");
// const headers = ["industry", "description", "level", "insta", "mojo", "vendix"];

// processData(baseUploadPath, headers).then((data) => data);

const getData = (baseUploadPath: string, headers: string[]) => {
	return processData(path.resolve(__dirname, baseUploadPath), headers);
};

export { getData };
