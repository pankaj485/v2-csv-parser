import path from "path";
import { processData } from "./parser";

const getData = (baseUploadPath: string, headers: string[]) => {
	return processData(path.resolve(__dirname, baseUploadPath), headers);
};

export { getData };
