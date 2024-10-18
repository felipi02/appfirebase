import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ListaContatos() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        // Verifica e solicita permissão para acessar os contatos
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            // Obtém a lista de contatos
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
            });

            if (data.length > 0) {
                setContacts(data);
            }
        } else {
            alert('Permissão para acessar contatos foi negada.');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{item.name}</Text>
            {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                <Text style={styles.contactPhone}>{item.phoneNumbers[0].number}</Text>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Contatos</Text>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    contactContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactPhone: {
        fontSize: 16,
        color: '#555',
    },
});
