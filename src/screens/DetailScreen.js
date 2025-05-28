import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SQLiteService from '../database/SQLiteService';

export default function DetailScreen({ route, navigation }) {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const db = new SQLiteService();
      const recipeData = await db.getRecipeById(recipeId);
      setRecipe(recipeData);
    };

    fetchRecipe();
  }, [recipeId]);

  const handleDelete = async () => {
    const db = new SQLiteService();
    await db.deleteRecipe(recipeId);
    navigation.navigate('Home');
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <Text>{recipe.ingredients}</Text>
      <Text style={styles.instructionsTitle}>Instructions:</Text>
      <Text>{recipe.instructions}</Text>
      <Button title="Delete Recipe" onPress={handleDelete} color="red" />
      <Button title="Update Recipe" onPress={() => navigation.navigate('UpdateRecipe', { recipe })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});