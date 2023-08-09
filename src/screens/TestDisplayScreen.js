import React from 'react';
import Test from '../components/Test/Test';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
function TestDisplayScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title="The Career Mentor Test" />
            <Test navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default TestDisplayScreen;
