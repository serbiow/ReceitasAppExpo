import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ query, onSearch }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar receitas..."
                value={query}
                onChangeText={onSearch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});