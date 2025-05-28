import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  const getEmoji = (id) => {
    const emojiMap = {
      '1': '🥩',
      '2': '🥕',
      '3': '🐟',
      '4': '🌽',
      '5': '🥔',
      '6': '🍫',
      '7': '☕',
    };
    return emojiMap[id] || '🍽️';
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>
        {getEmoji(recipe.id)} {recipe.title}
      </Text>
      <Text style={styles.description}>{recipe.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
