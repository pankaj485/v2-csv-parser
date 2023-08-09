import path from "path";

import { checkUploadDir, getValidFiles } from "./utils/handleFiles";
import getFileHeaders from "./getFileHeaders";

const baseUploadPath = path.resolve(__dirname, "../", "public", "uploads");

checkUploadDir(baseUploadPath);
getFileHeaders(baseUploadPath);
