// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Screen } from '../common';
// import { SIGNIN_SCREEN } from '../../constants';
// import { ISignUpState, SignUpScreenProps } from '../../defs';
// import { useSignUpMutation } from '../../redux/apis';
// import { customSize } from '../../theme';

// const countries = [
//     "Afghanistan", "Albania", "Algeria", "Pakistan"
// ];

// const cities = [
//     "Abidjan", "Abu Dhabi", "Abuja", "Karachi"
// ];

// const CreateAccount = ({ navigation }) => {
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     const [signUpAction, { isLoading }] = useSignUpMutation();

//     const [signUp, setSignUp] = useState({
//         name: '',
//         country: '',
//         city: '',
//         email: '',
//         password: '',
//     });



//     const handleChangeValue = (val, name) => {
//         setSignUp(prevSignUp => ({ ...prevSignUp, [name]: val }));
//     };

//     const handleSubmit = async () => {
//         // try {
//         //     // Perform the signUpAction using signUp state
//         //     await signUpAction(signUp).unwrap();
//         //     // Set account created state or navigate to success screen
//         //     setAccountCreated(true);
//         // } catch (error) {
//         //     // Handle error
//         // }
//     };

//     function togglePasswordVisibility() {
//         setIsPasswordVisible(prevState => !prevState);
//     }

//     const onPressSignInNow = () => navigation.navigate(SIGNIN_SCREEN);

//     return (
//         <Screen animated="fadeIn">
//             <View key="content" style={styles.contentContainer}>
//                 <View style={styles.card}>
//                     <Text style={styles.title}>Create Account</Text>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.label}>Name</Text>
//                         <TextInput
//                             style={styles.input}
//                             value={signUp.name}
//                             onChangeText={val => handleChangeValue(val, 'name')}
//                         />

//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.label}>Email</Text>
//                         <TextInput
//                             style={styles.input}
//                             value={signUp.email}
//                             onChangeText={val => handleChangeValue(val, 'email')}
//                         />

//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.label}>Country</Text>
//                         <TextInput
//                             style={styles.input}
//                             value={signUp.country}
//                             onChangeText={val => handleChangeValue(val, 'country')}
//                         />

//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.label}>City</Text>
//                         <TextInput
//                             style={styles.input}
//                             value={signUp.city}
//                             onChangeText={val => handleChangeValue(val, 'city')}
//                         />

//                     </View>
//                     <View style={styles.inputContainer}>
//                         <Text style={styles.label}>Password</Text>
//                         <TextInput
//                             style={styles.input}
//                             value={signUp.password}
//                             onChangeText={val => handleChangeValue(val, 'password')}
//                         />

//                     </View>

//                     <TouchableOpacity
//                         onPress={handleSubmit}
//                         style={styles.createAccountButton}
//                     >
//                         <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.loginText}>
//                         Already have an account?{' '}
//                         <TouchableOpacity onPress={onPressSignInNow}>
//                             <Text style={styles.loginLink}>LOGIN</Text>
//                         </TouchableOpacity>
//                     </Text>
//                 </View>
//             </View>
//         </Screen>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f0f0f0',
//     },
//     card: {
//         backgroundColor: 'white',
//         padding: 20,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 2,
//         elevation: 3,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: 'purple'
//     },
//     inputContainer: {
//         marginBottom: 15,
//     },
//     label: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         color: 'black'
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 4,
//         padding: 12,
//         marginTop: 5,
//         color: 'gray'
//     },
//     createAccountButton: {
//         backgroundColor: 'purple',
//         padding: 10,
//         borderRadius: 4,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 20,
//     },
//     createAccountButtonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',

//     },
//     loginText: {
//         marginTop: 20,
//         textAlign: 'center',
//         color: 'black'
//     },
//     loginLink: {
//         color: 'blue',
//         fontWeight: 'bold',
//     },
// });

// export default CreateAccount;
