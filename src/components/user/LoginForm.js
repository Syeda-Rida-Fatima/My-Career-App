// components/LoginForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInUserAction } from 'path-to-your-auth-actions';  // Import your Redux actions
import { SIGNUP_SCREEN } from 'src/constants';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            const response = await dispatch(
                signInUserAction({
                    username: username,
                    password: password,
                })
            );

            // Handle successful login here
        } catch (error) {
            // Handle login error here
        }
    };
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login to Your Account</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>UserName</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
                        {isPasswordVisible ? (
                            <Text style={styles.toggleButtonText}>Hide</Text>
                        ) : (
                            <Text style={styles.toggleButtonText}>Show</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={[styles.loginButton, { opacity: disabled ? 0.6 : 1 }]}
                    disabled={disabled}
                >
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Replace with your desired background color
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'purple'
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginTop: 5,
        color: 'gray'
    },
    toggleButton: {
        position: 'absolute',
        right: 10,
        top: 25,
    },
    toggleButtonText: {
        color: 'blue',
    },
    loginButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginForm;
