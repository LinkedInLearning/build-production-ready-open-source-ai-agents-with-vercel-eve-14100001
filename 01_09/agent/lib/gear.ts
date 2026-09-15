export type GearStatus =
  | { kind: "available" }
  | { kind: "out"; backOn: string };

export interface GearListing {
  id: string;
  name: string;
  tags: string[];
  owner: { firstName: string; street: string };
  availability: string;
  careNotes: string;
  status: GearStatus;
}

export const gear: GearListing[] = [
  {
    id: "gear-001",
    name: "Cordless drill with bit set",
    tags: ["tools", "power tools", "drill", "home repair"],
    owner: { firstName: "Priya", street: "Maple Street" },
    availability: "Weekends and weekday evenings after 6pm",
    careNotes:
      "Return with the battery charged. Bits go back in the case in order.",
    status: { kind: "available" }
  },
  {
    id: "gear-002",
    name: "6-foot folding table",
    tags: ["furniture", "table", "party", "events"],
    owner: { firstName: "Marcus", street: "Maple Street" },
    availability: "Any day, give a day's notice",
    careNotes:
      "Wipe down before returning. Do not leave out in the rain.",
    status: { kind: "out", backOn: "2026-09-14" }
  },
  {
    id: "gear-003",
    name: "4-person backpacking tent",
    tags: ["camping", "tent", "outdoors", "backpacking"],
    owner: { firstName: "Elena", street: "Oak Avenue" },
    availability:
      "Summer and early fall, up to one week at a time",
    careNotes:
      "Air out and dry completely before packing. Sweep out sand and pine needles.",
    status: { kind: "available" }
  },
  {
    id: "gear-004",
    name: "Hybrid commuter bike (medium frame)",
    tags: ["bike", "bicycle", "transportation", "outdoors"],
    owner: { firstName: "Theo", street: "Maple Street" },
    availability: "Weekdays only, back by dark",
    careNotes:
      "Lock it whenever it's unattended. Let me know if the chain squeaks and I'll oil it.",
    status: { kind: "available" }
  },
  {
    id: "gear-005",
    name: "Stand mixer with dough hook",
    tags: ["kitchen", "baking", "mixer", "appliance"],
    owner: { firstName: "Joanne", street: "Birch Lane" },
    availability:
      "Anytime except the week before Thanksgiving",
    careNotes:
      "Hand wash the bowl and attachments. Don't run it above speed 6 with heavy dough.",
    status: { kind: "available" }
  },
  {
    id: "gear-006",
    name: "Pressure washer (electric)",
    tags: [
      "tools",
      "cleaning",
      "outdoor",
      "pressure washer"
    ],
    owner: { firstName: "Dev", street: "Oak Avenue" },
    availability: "Weekends, 2-day max",
    careNotes:
      "Drain the hose and pump after use. Use only the green nozzle on wood decks.",
    status: { kind: "out", backOn: "2026-09-20" }
  },
  {
    id: "gear-007",
    name: "Extension ladder (24 ft)",
    tags: ["tools", "ladder", "home repair", "gutters"],
    owner: { firstName: "Priya", street: "Maple Street" },
    availability: "Any day, pickup from the side yard",
    careNotes:
      "Two people to carry it. Set it on firm, level ground and never on the top rung.",
    status: { kind: "available" }
  },
  {
    id: "gear-008",
    name: "Two-burner camp stove with propane",
    tags: ["camping", "stove", "cooking", "outdoors"],
    owner: { firstName: "Elena", street: "Oak Avenue" },
    availability: "Spring through fall",
    careNotes:
      "Wipe the grates after each use. Replace the propane canister if you empty it.",
    status: { kind: "available" }
  },
  {
    id: "gear-009",
    name: "Kid's bike trailer (2-seat)",
    tags: ["bike", "kids", "trailer", "family", "outdoors"],
    owner: { firstName: "Sam", street: "Birch Lane" },
    availability: "Weekends, must be back Sunday evening",
    careNotes:
      "Check the tire pressure before riding. The hitch pin lives in the side pocket.",
    status: { kind: "available" }
  },
  {
    id: "gear-010",
    name: "Slow cooker (7 quart)",
    tags: [
      "kitchen",
      "cooking",
      "slow cooker",
      "appliance"
    ],
    owner: { firstName: "Marcus", street: "Maple Street" },
    availability:
      "Anytime, a few days at a stretch is fine",
    careNotes:
      "Crock is dishwasher safe; the lid and base are not.",
    status: { kind: "out", backOn: "2026-09-12" }
  },
  {
    id: "gear-011",
    name: "Folding chairs (set of 8)",
    tags: ["furniture", "chairs", "party", "events"],
    owner: { firstName: "Joanne", street: "Birch Lane" },
    availability: "Any day, please return all 8 together",
    careNotes:
      "Fold flat and stack. Let me know if any get wobbly.",
    status: { kind: "available" }
  },
  {
    id: "gear-012",
    name: "Sewing machine (basic mechanical)",
    tags: ["crafts", "sewing", "repair", "hobby"],
    owner: { firstName: "Theo", street: "Maple Street" },
    availability: "Weekday evenings and weekends",
    careNotes:
      "Bring your own thread and needles. Cover it when not in use to keep dust out.",
    status: { kind: "available" }
  }
];

/**
 * Search listings by free-text query. Each word is matched case-insensitively
 * against the listing name and tags; a listing matches only when every word
 * hits. Only real entries from `gear` are returned, with owner limited to
 * first name and street per the GearListing interface.
 */
export function searchGear(query: string): GearListing[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return gear.filter((listing) => {
    const fields = [listing.name, ...listing.tags].map((s) => s.toLowerCase());
    return terms.every((term) => fields.some((field) => field.includes(term)));
  });
}

/** Look up one listing by id. Used by tools that act on a specific item. */
export function getGear(id: string): GearListing | undefined {
  return gear.find((listing) => listing.id === id);
}
