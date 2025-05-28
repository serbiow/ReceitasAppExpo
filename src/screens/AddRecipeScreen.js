import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import SQLiteService from '../database/SQLiteService';

const AddRecipeScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddRecipe = async () => {
        if (!title || !description || !ingredients || !instructions) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        const recipe = {
            title,
            description,
            ingredients: ingredients.split(','),
            instructions,
        };

        try {
            await SQLiteService.addRecipe(recipe);
            Alert.alert('Success', 'Recipe added successfully');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to add recipe');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Recipe</Text>
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
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
                multiline
            />
            <Button title="Add Recipe" onPress={handleAddRecipe} />
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

export default AddRecipeScreen;