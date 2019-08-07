import { production } from "./production";
import { development } from "./development";

export const environment =
  process.env.NODE_ENV === "production" ? production : development;
