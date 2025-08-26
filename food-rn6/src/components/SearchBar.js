import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputSyle} 
              placeholder="Search" 
              value={term}
              onChangeText={onTermChange}
              onEndEditing={onTermSubmitted}
              />
        </View>
    )
}


const styles = StyleSheet.create({
     background: {
        backgroundColor: '#9bb8baff',
        height: 50,
        borderRadius: 8,
        marginTop: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },

    inputSyle: {
        flex:1
    },

    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    }


});

export default SearchBar;