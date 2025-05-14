import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🍃 Receitas ao Ar Livre</Text>
        <Text style={styles.subtitle}>Sabores com um toque de natureza 🌤️</Text>

        <View style={styles.cardWrapper}>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onPress={() => navigation.navigate('Details', { recipe })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f8f5',
    paddingBottom: 52,
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2a6041',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#5a7c6a',
    marginBottom: 20,
  },
  cardWrapper: {
    gap: 12,
  }
});
