// screens/SignupScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SignUpForm from '../components/user/SignUpForm';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Signup" />
            <SignUpForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default SignupScreen;
