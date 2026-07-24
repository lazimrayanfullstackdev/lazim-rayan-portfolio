import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns Lazim Rayan's public profile: name, current role, location, and short bio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "Lazim Rayan",
          role: "Associate Manager, Media",
          location: "Dhaka, Bangladesh",
          bio: "Results-driven digital marketer with 6+ years running campaigns on Meta, DV360, LinkedIn, Display, Programmatic & Rich Media.",
        }),
      },
    ],
  }),
});
