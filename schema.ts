import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // Přidáme import pro 'v'

const schema = defineSchema({
  users: defineTable({
    jmeno: v.string(), // Používáme v.string() místo { type: "string" }
    prijmeni: v.string(),
    email: v.string(),
    heslo: v.string(),
    popis: v.string(),
    prof_foto: v.string(),
    fakulta: v.string(),
    obor: v.string(),
    rocnik: v.number(),
  }).index("by_email", ["email"]),

  user_dovednosti: defineTable({
    userId: v.string(),
    dovednostId: v.string(),
  })
    .index("by_userId", ["userId"])
    .index("by_dovednostId", ["dovednostId"]),

  dovednosti: defineTable({
    nazev: v.string(),
  }),

  tym: defineTable({
    startUpId: v.string(),
    userId: v.string(),
  })
    .index("by_startUpId", ["startUpId"])
    .index("by_userId", ["userId"]), // Opravili jsme špatný název pole

  start_up: defineTable({
    nazev: v.string(),
    email: v.string(),
    heslo: v.string(),
    logo: v.string(),
    popis: v.string(),
  }).index("by_email", ["email"]),

  zamereni: defineTable({
    nazev: v.string(),
  }),

  start_up_zamereni: defineTable({
    startUpId: v.string(),
    zamereniId: v.string(),
  })
    .index("by_startUpId", ["startUpId"])
    .index("by_zamereniId", ["zamereniId"]),
});

export default schema;
