import { boolean } from "drizzle-orm/gel-core";   // No issue here, as it's a general import
import { serial, varchar } from "drizzle-orm/pg-core";  // Changed to use pg-core instead of mysql-core
import { pgTable } from "drizzle-orm/pg-core";  // Correct import for pg-core

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageurl'),
    subscription: boolean('subscription').default(false),
});
