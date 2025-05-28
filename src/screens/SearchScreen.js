import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import SQLiteService from '../database/SQLiteService';

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const allRecipes = await SQLiteService.getAllRecipes();
            setRecipes(allRecipes);
            setFilteredRecipes(allRecipes);
        };

        fetchRecipes();
    }, []);

    useEffect(() => {
        const results = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecipes(results);
    }, [searchQuery, recipes]);

    return (
        <View style={styles.container}>
            <SearchBar
                searchQuery={searchQuery}
                onSearchInputChange={setSearchQuery}
            />
            <FlatList
                data={filteredRecipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() => {/* Navigate to details screen */ }}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f8f5',
    },
    list: {
        paddingBottom: 20,
    },
});