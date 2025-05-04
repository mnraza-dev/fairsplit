import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()),
    }).index("by_email", ["email"])
        .index("by_token", ["tokenIdentifier"])
        .searchIndex("by_name", { searchField: "name" })
        .searchIndex("by_email", { searchField: "email" })
});