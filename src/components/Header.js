import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, rightComponent }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            {rightComponent && <View style={styles.rightComponentContainer}>{rightComponent}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between', // Aligns items to the left and right edges of the header
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rightComponentContainer: {
        marginRight: 16,
    },
});

export default Header;
