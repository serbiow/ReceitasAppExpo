import * as SQLite from 'expo-sqlite';

class SQLiteService {
  constructor() {
    this.db = SQLite.openDatabase('recipes.db');
    this.init();
  }

  init() {
    this.db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS recipes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          ingredients TEXT,
          instructions TEXT
        );`
      );
    });
  }

  addRecipe(recipe, callback) {
    const { title, description, ingredients, instructions } = recipe;
    this.db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO recipes (title, description, ingredients, instructions) VALUES (?, ?, ?, ?)',
        [title, description, ingredients, instructions],
        (_, result) => callback(null, result),
        (_, error) => callback(error)
      );
    });
  }

  updateRecipe(recipe, callback) {
    const { id, title, description, ingredients, instructions } = recipe;
    this.db.transaction(tx => {
      tx.executeSql(
        'UPDATE recipes SET title = ?, description = ?, ingredients = ?, instructions = ? WHERE id = ?',
        [title, description, ingredients, instructions, id],
        (_, result) => callback(null, result),
        (_, error) => callback(error)
      );
    });
  }

  deleteRecipe(id, callback) {
    this.db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM recipes WHERE id = ?',
        [id],
        (_, result) => callback(null, result),
        (_, error) => callback(error)
      );
    });
  }

  getAllRecipes(callback) {
    this.db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM recipes',
        [],
        (_, { rows }) => callback(null, rows._array),
        (_, error) => callback(error)
      );
    });
  }

  searchRecipes(query, callback) {
    this.db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM recipes WHERE title LIKE ?',
        [`%${query}%`],
        (_, { rows }) => callback(null, rows._array),
        (_, error) => callback(error)
      );
    });
  }
}

export default new SQLiteService();