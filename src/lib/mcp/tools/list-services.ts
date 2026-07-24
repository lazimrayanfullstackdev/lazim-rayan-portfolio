import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  "Social Media Audit",
  "Digital Promotion Plan",
  "Digital Promotion Support",
  "Website Audit",
  "Website Design",
  "Website Development",
  "Search Engine Optimization (AEO)",
  "Digital Marketing Supervision",
];

export default defineTool({
  name: "list_services",
  title: "List collaboration services",
  description: "Lists the collaboration services Lazim Rayan offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services) }],
    structuredContent: { services },
  }),
});
