import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const countries = [
    "Afghanistan", "Albania", "Algeria", "Pakistan"
];

const cities = [
    "Abidjan", "Abu Dhabi", "Abuja", "Karachi"
];

const CreateAccount = () => {
    const navigation = useNavigation();
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const handleSubmit = async () => {
        console.log(username, password);

    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Create Account</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.label}>Country</Text>
                    <TextInput
                        style={styles.input}
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.createAccountButton}
                >
                    <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>
                    Already have an account?{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>LOGIN</Text>
                    </TouchableOpacity>
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
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
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 12,
        marginTop: 5,
        color: 'gray'
    },
    createAccountButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    createAccountButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
    loginText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
    },
    loginLink: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default CreateAccount;
