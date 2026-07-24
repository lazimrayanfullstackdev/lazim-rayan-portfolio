import { defineTool } from "@lovable.dev/mcp-js";

const experience = [
  { role: "Associate Manager", org: "Top of Mind", period: "2025 — Present", note: "Marketing & analytics for DBBL, Abul Khair Group, EBL, Emami, Butterfly, Haier, Kollol and more." },
  { role: "Sr. Executive, Digital Marketing", org: "CLAN Ltd.", period: "2021 — 2025", note: "Managed media buying for 30+ clients across MNCs, NGOs and financial service providers." },
  { role: "Digital Marketing & SEO Expert", org: "STM Corporation", period: "2020 — 2021", note: "Led media buying and SEO for a custom apparel exporter serving the US & UK markets." },
  { role: "Digital Marketing Executive", org: "CareerPaths", period: "2019 — 2020", note: "Lifted leads by 80% and pushed the site to position #2 on SERP." },
];

export default defineTool({
  name: "get_experience",
  title: "Get work experience",
  description: "Returns Lazim Rayan's work experience timeline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience) }],
    structuredContent: { experience },
  }),
});
