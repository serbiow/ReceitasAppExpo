import React from 'react';
import { ScrollView, Text, StyleSheet, View, Dimensions } from 'react-native';

export default function DetailScreen({ route }) {
  const { recipe } = route.params;

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
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.background}
    >
      <Text style={styles.title}>
        {getEmoji(recipe.id)} {recipe.title}
      </Text>

      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientList}>
        {recipe.ingredients.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Modo de preparo:</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fdfaf6',
  },
  scrollContainer: {
    flexGrow: 1,
    minHeight: Dimensions.get('window').height,
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2f3e46',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#4a4a4a',
  },
  ingredientList: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  instructions: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});
