// screens/LoginScreen.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Header from '../components/Header';
import LoginForm from '../components/user/LoginForm';

const LoginScreen = ({ navigation }, SignInScreenProps) => {

    const [signInAction, { isLoading }] = useSignInMutation();

    return (
        <View style={styles.container}>
            <Header title="Login"

                rightComponent={(
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: 'white' }}>SignUp</Text>
                    </TouchableOpacity>
                )}
            />
            <LoginForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default LoginScreen;
