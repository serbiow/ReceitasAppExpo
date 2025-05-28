import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import SQLiteService from '../database/SQLiteService';

const UpdateRecipeScreen = ({ route, navigation }) => {
    const { recipeId } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await SQLiteService.getRecipeById(recipeId);
            if (recipe) {
                setTitle(recipe.title);
                setDescription(recipe.description);
                setIngredients(recipe.ingredients);
                setInstructions(recipe.instructions);
            }
        };
        fetchRecipe();
    }, [recipeId]);

    const handleUpdate = async () => {
        if (!title || !description || !ingredients || !instructions) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        await SQLiteService.updateRecipe(recipeId, title, description, ingredients, instructions);
        Alert.alert('Success', 'Recipe updated successfully');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Recipe</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
            />
            <Button title="Update Recipe" onPress={handleUpdate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f8f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default UpdateRecipeScreen;