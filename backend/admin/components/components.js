import { ComponentLoader } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  MyMeasurementComponent: componentLoader.add(
    "MyMeasurementComponent",
    path.resolve(__dirname, "my-measurements")
  ),
  // other custom components as needed
};

export { componentLoader, Components };
