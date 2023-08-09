import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Records = () => {


    const records = [
        {
            "Engineering_Field1": "0",
            "Engineering_Field2": "0",
            "Engineering_Field3": "0",
            "Engineering_Field4": "0",
            "Engineering_Field5": "0",
            "Medical_Field1": "Biotechnology",
            "Medical_Field2": "Nutrition Sciences",
            "Medical_Field3": "D-Pharmacy",
            "button": 1.0
        },
        {
            "Engineering_Field1": "Electrical Engineering",
            "Engineering_Field2": "Computer and Information Systems Engineering",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "Mechanical Engineering",
            "Medical_Field1": "0",
            "Medical_Field2": "0",
            "Medical_Field3": "0",
            "button": 0.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        }
    ]
    const showEngineeringFields = records.some((record) => record.button === 0.0);
    const showMedicalFields = records.some((record) => record.button === 1.0);
    const showBothFields = records.some((record) => record.button === 2.0);
    const { width, height } = { width: 300, height: 50 };

    const handleRecords = async () => {

    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AI BASED CAREER MENTOR</Text>
            <Text style={styles.subHeading}>Previous Records</Text>
            <ScrollView style={styles.scrollView}><View style={styles.recordContainer}>
                {records.map((record, index) => {
                    const engineeringFields = [
                        record.Engineering_Field1,
                        record.Engineering_Field2,
                        record.Engineering_Field3,
                        record.Engineering_Field4,
                        record.Engineering_Field5,
                    ];
                    const medicalFields = [
                        record.Medical_Field1,
                        record.Medical_Field2,
                        record.Medical_Field3,
                    ];

                    const barsData = [];

                    engineeringFields.forEach((field, index) => {
                        if (field !== "0") {
                            barsData.push({
                                label: `${field}`,
                                percentage: 90 - index * 10,
                            });
                        }
                    });

                    medicalFields.forEach((field, index) => {
                        if (field !== "0") {
                            barsData.push({
                                label: `${field} `,
                                percentage: 90 - index * 10,
                            });
                        }
                    });

                    return (
                        <View key={index} style={styles.recordCard}>
                            <Text style={styles.recordTitle}>Record {index + 1}</Text>
                            {barsData.map((bar, index) => (
                                <View key={index} style={styles.barContainer}>
                                    <Text style={styles.barLabel}>{bar.label}</Text>
                                    <View style={styles.progressBar}>
                                        <View
                                            style={[
                                                styles.progressBarFill,
                                                { width: `${bar.percentage}%` },
                                            ]}
                                        ></View>
                                    </View>
                                    <Text style={styles.barPercentage}>{bar.percentage}%</Text>
                                </View>
                            ))}

                        </View>
                    );
                })}
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    scrollView: {
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: "purple"
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        color: "purple"
    },
    recordContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    recordCard: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        padding: 12,
        marginBottom: 12,
    },
    recordTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "pink"
    },
    barContainer: {
        marginBottom: 8,
    },
    barLabel: {
        fontSize: 14,
        color: "gray"
    },
    progressBar: {
        height: 6,
        backgroundColor: '#d6d6d6',
        borderRadius: 4,
        marginTop: 4,
    },
    progressBarFill: {
        height: 6,
        backgroundColor: 'purple',
        borderRadius: 4,
    },
    barPercentage: {
        fontSize: 12,
        marginTop: 4,
        textAlign: 'right',
        color: 'black'
    },
});

export default Records;
