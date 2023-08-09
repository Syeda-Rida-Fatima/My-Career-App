import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
const HomeScreen = ({ navigation }) => {




    return (
        <View style={styles.container}>
            <Header title="Home"

                rightComponent={(
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'white' }}>Log In</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    <Text style={styles.title}>Checkout the Best Career Choices</Text>
                    <Text style={styles.subtitle}>Prepare yourself and get the best Career choices now!</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TestDisplay')} // Replace 'Login' with the name of your login screen
                        style={styles.startTestButton}
                    >
                        <Text style={styles.startTestButtonText}>Start Test</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Replace with your desired background color
    },
    cardWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        margin: 40,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 16,
        textAlign: 'center',
    },
    startTestButton: {
        backgroundColor: 'purple',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    startTestButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
