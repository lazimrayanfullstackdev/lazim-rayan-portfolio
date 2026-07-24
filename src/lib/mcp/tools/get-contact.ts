import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns Lazim Rayan's public contact links (LinkedIn, Facebook, portfolio, CV download).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          portfolio: "https://lazim-rayan-portfolio.lovable.app",
          facebook: "https://www.facebook.com/LazimRayanRefat",
          cv: "https://lazim-rayan-portfolio.lovable.app/Lazim_Rayan_CV.pdf",
        }),
      },
    ],
  }),
});
