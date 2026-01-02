// ESM
import { createJiti } from "jiti";
const jiti = createJiti(import.meta.url);

// CommonJS (deprecated)
const { createJiti } = require("jiti");
const jiti = createJiti(__filename);
