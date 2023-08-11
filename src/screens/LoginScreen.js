// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { SignUpScreenProps, SIGNUP_SCREEN } from '../defs';
// import Header from '../components/Header';
// import LoginForm from '../components/user/LoginForm';
// import { useSelector, useDispatch } from 'react-redux';
// import { clearUser } from '../redux/slices/auth_slice';
// import { RootState } from '../redux/store';

// const LoginScreen = ({ navigation }) => {
//     const dispatch = useDispatch();
//     const { token, username } = useSelector((state) => state.auth);

//     const onPressSignUpNow = () => navigation.navigate(SIGNUP_SCREEN);

//     const handleLogout = () => {
//         dispatch(clearUser());
//     };

//     return (
//         <View style={styles.container}>
//             <Header title="Login"
//                 rightComponent={(
//                     <TouchableOpacity type="signup" onPress={onPressSignUpNow}>
//                         <Text style={{ color: 'white' }}>SignUp</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//             <LoginForm />
//             {token && (
//                 <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//                     <Text style={styles.logoutButtonText}>Logout</Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     logoutButton: {
//         backgroundColor: 'red',
//         padding: 10,
//         borderRadius: 4,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 20,
//     },
//     logoutButtonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default LoginScreen;
