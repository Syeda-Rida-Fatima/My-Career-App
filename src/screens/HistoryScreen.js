import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import History from '../components/Result/History'

const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="History" />
            <History />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default HistoryScreen;