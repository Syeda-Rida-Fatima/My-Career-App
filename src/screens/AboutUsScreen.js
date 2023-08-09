// screens/AboutUsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="AboutUs" />
            <View style={styles.content}>
                <Text>Welcome to the AboutUs Screen!</Text>
                {/* Add your content here */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AboutUsScreen;
