// screens/ResultScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Result } from '../components/Result/Result';
const ResultScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Result" />
            <Result navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ResultScreen;