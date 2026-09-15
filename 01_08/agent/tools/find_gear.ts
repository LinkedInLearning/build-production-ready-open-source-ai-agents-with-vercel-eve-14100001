import { defineTool } from "eve/tools";
import { z } from "zod";
import { searchGear } from "../lib/gear";

export default defineTool({
  description: `Search for the gear neighbors have listed for sharing.
    Use this before saying whether an item is available. Returns listings
    with owner first name and street only`,
  inputSchema: z.object({
    query: z
      .string()
      .min(2, "Describe the item such as bike or table")
  }),
  async execute({ query }) {
    const matches = searchGear(query);
    return { found: matches.length > 0, matches };
  }
});
