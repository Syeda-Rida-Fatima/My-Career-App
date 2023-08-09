// screens/ContactUsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ContactUsScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="ContactUs" />
            <View style={styles.content}>
                <Text>Welcome to the ContactUs Screen!</Text>
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

export default ContactUsScreen;
