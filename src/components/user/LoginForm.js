// components/LoginForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInUserAction } from 'path-to-your-auth-actions';  // Import your Redux actions
import { ISignInState, SignInScreenProps } from '../../defs';
import { SIGNUP_SCREEN } from '../../constants';
import { useSignInMutation } from '../../redux/apis';
import { SigninSignupNow } from '../signin-signup-now';
const LoginForm = ({ navigation }) => {
    const [signInAction, { isLoading }] = useSignInMutation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [signIn, setSignIn] = useState < ISignInState > ({
        username: __DEV__ ? 'syedaridafatima' : '',
        password: __DEV__ ? 'asdfgh' : '',
    });


    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeValue = (val, name) => {
        setErrorMessage('');
        setSignIn({ ...signIn, [name]: val });
    };
    const handleLogin = async () => {
        // try {

        //     const { token, ...user } = await signInAction(signIn).unwrap();
        //     dispatch(setUser({ user, token }));
        // } catch (error) {
        //     console.log({ error });
        //     if (error?.status === 500) {
        //         return setErrorMessage('Error: Invalid email or password');
        //     }
        //     setErrorMessage(`Error: ${(error)}`);
        // }
    };

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const onPressSignUpNow = () => navigation.navigate(SIGNUP_SCREEN);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login to Your Account</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>UserName</Text>
                    <TextInput
                        style={styles.input}
                        value={signIn.username} // Update the value prop
                        onChangeText={(val) => handleChangeValue(val, 'username')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={signIn.password} // Update the value prop
                        onChangeText={(val) => handleChangeValue(val, 'password')}
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
            <SigninSignupNow type="signup" onPress={onPressSignUpNow} />
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
