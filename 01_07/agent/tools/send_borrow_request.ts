import { defineTool } from "eve/tools";
import { z } from "zod";
import { getGear } from "../lib/gear";

export default defineTool({
  description: `Simulate sending a borrow request to the owner of a listed item. Use only when the neighbor explicitly asks to send it. `,
  inputSchema: z.object({
    gearId: z.string(),
    note: z.string()
  }),
  async execute({ gearId, note }) {
    const item = getGear(gearId);
    if (!item)
      return {
        delivered: false,
        reason: "No listing with that id"
      };
    return {
      delivery: "simulated",
      to: item.owner.firstName,
      item: item.name,
      note
    };
  }
});
