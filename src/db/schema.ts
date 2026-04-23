import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  ingredients: text('ingredients').notNull(),
  price: integer('price').notNull(),
  weight: integer('weight').notNull(),
  image: text('image').notNull(),
  category: text('category').notNull().default('pizza'),
  isNew: integer('is_new', { mode: 'boolean' }).notNull().default(false),
});
