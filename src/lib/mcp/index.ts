import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listServices from "./tools/list-services";
import getExperience from "./tools/get-experience";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "lazim-rayan-portfolio-mcp",
  title: "Lazim Rayan Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools exposing Lazim Rayan's portfolio: profile, work experience, collaboration services, and contact links.",
  tools: [getProfile, listServices, getExperience, getContact],
});
