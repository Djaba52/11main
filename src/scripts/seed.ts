import Database from 'better-sqlite3';
import path from 'path';

const databasePath = path.join(process.cwd(), 'src', 'db', 'pizzeria.db');
const sqlite = new Database(databasePath);

const imagePool = ['pizza-a.png', 'pizza-b.png', 'pizza-c.png', 'pizza-d.png'];
const titles = [
  'Маргарита фирменная',
  'Пепперони классика',
  'Сырная легенда',
  'Грибная сливочная',
  'Острая с халапеньо',
  'Трюфельная белая',
  'Томато буррата',
  'Бекон и моцарелла',
  'Итальянская мясная',
  'Четыре сыра',
  'Пармская ветчина',
  'Овощная на тонком тесте',
  'Барбекю с курицей',
  'Салями и маслины'
];

const baseIngredients = [
  'томатный соус, моцарелла, базилик',
  'томатный соус, пепперони, моцарелла',
  'сливочная основа, моцарелла, пармезан',
  'сливочный соус, шампиньоны, сыр',
  'томатный соус, халапеньо, моцарелла',
  'сливочный соус, трюфельное масло, сыр',
  'томатный соус, буррата, орегано',
  'сливочная основа, бекон, моцарелла',
  'томатный соус, салями, ветчина, сыр',
  'сливочная основа, горгонзола, моцарелла, пармезан',
  'томатный соус, пармская ветчина, рукола',
  'томатный соус, томаты, перец, маслины',
  'соус барбекю, курица, моцарелла',
  'томатный соус, салями, маслины, сыр'
];

sqlite.exec(`
  DROP TABLE IF EXISTS products;
  CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    price INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'pizza',
    is_new INTEGER NOT NULL DEFAULT 0
  );
`);

const insert = sqlite.prepare(`
  INSERT INTO products (slug, name, description, ingredients, price, weight, image, category, is_new)
  VALUES (@slug, @name, @description, @ingredients, @price, @weight, @image, @category, @isNew)
`);

for (let index = 0; index < 42; index += 1) {
  const titleIndex = index % titles.length;
  const volume = Math.floor(index / titles.length) + 1;
  const name = `${titles[titleIndex]} ${volume}`;
  const slug = name
    .toLowerCase()
    .replace(/[^а-яa-z0-9\s-]/gi, '')
    .trim()
    .replace(/\s+/g, '-');

  insert.run({
    slug,
    name,
    description: 'Тонкое тесто, яркий соус и много сыра. Пицца готовится по фирменному рецепту и подается горячей.',
    ingredients: baseIngredients[titleIndex],
    price: 520 + (index % 7) * 40,
    weight: 390 + (index % 6) * 20,
    image: imagePool[index % imagePool.length],
    category: 'pizza',
    isNew: index < 8 ? 1 : 0,
  });
}

console.log('Database seeded:', databasePath);
