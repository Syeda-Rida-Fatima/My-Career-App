import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { getSurveyData } from '../Questionnaire/Survey';

function Result({ navigation }) {
    // const data = getSurveyData();
    const data = {
        "id": 32,
        "gender": 0,
        "income_group": 2,
        "sensing": 0.42857142857142855,
        "introvert": 0.7142857142857143,
        "Judging": 0.7142857142857143,
        "Thinking": 0.42857142857142855,
        "logical_intelligence": 1.6,
        "Nature_intelligence": 1.4,
        "Visual_intelligence": 3.4,
        "Musical_intelligence": 2.8,
        "Body_intelligence": 2.4,
        "Interpersonal_intelligence": 2.2,
        "Intrapersonal_intelligence": 3.4,
        "Verbal_intelligence": 2.2,
        "Existential_intelligence": 2.8,

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
    const [OpenRecords, setOpenRecords] = useState(true);
    const engineeringFields = data
        ? [
            data.Engineering_Field1,
            data.Engineering_Field2,
            data.Engineering_Field3,
            data.Engineering_Field4,
            data.Engineering_Field5,
        ]
        : [];
    const medicalFields = data ? [data.Medical_Field1, data.Medical_Field2, data.Medical_Field3] : [];

    const buttonValue = data ? data.button : null;
    let barsData = [];

    if (buttonValue === 0) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10,
                });
            }
        });
    } else if (buttonValue === 1) {
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10,
                });
            }
        });
    } else if (buttonValue === 2) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10,
                });
            }
        });
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10,
                });
            }
        });
    }

    const renderBar = ({ item }) => (
        <View key={item.label} style={styles.barContainer}>
            <View style={styles.barLabelContainer}>
                <Text style={styles.barLabel}>{item.label}</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${item.percentage}%` }]} />
            </View>
            <Text style={styles.barPercentage}>{`${item.percentage}%`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AI BASED CAREER MENTOR</Text>
            <FlatList
                data={barsData}
                renderItem={renderBar}
                keyExtractor={(item) => item.label}
                contentContainerStyle={styles.contentContainer}
            />
            <View style={styles.noteContainer}>
                <Text style={styles.Text}>
                    AI Career Mentor provides insights based on MBTI & MI Test. Recommendations are not definitive; consider preferences, skills, values, and circumstances. Use for exploration; decide with research and professional advice.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                    style={styles.viewRecordsButton}      >
                    <Text style={styles.viewRecordsButtonText}> Check History</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'pink',
        marginBottom: 12,
        color: 'purple'
    },
    Text: {
        color: 'black'
    },
    contentContainer: {
        paddingBottom: 30,

    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    barLabelContainer: {
        width: 120,


    },
    barLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'purple'

    },
    progressBarContainer: {
        flex: 1,
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginHorizontal: 8,
    },
    progressBar: {
        height: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    barPercentage: {
        fontSize: 16,
        color: 'gray'
    },
    noteContainer: {
        backgroundColor: '#d6d6d6',
        padding: 12,
        borderRadius: 8,


    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewRecordsButton: {
        backgroundColor: 'purple',
        padding: 4,
        paddingVertical: 12,
        borderRadius: 8,

    },
    viewRecordsButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export { Result };
