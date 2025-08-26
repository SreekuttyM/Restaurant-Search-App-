import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../../API/yelp';

const ResultShownScreen = ({ route }) => {
const [result, setResult] = useState(null);
const id = route.params.id;

const getResult = async (id) => {
  const response = await yelp.get(`/${id}`);
  console.log(response.data.photos);

  setResult(response.data);
};
useEffect(() => {
  getResult(id);
},[]);


if (!result) {
    return null;
}

return (
    <View>
        <Text style={styles.textStyle}>{result.name}</Text>

       <FlatList
         data = {result.photos}
         keyExtractor={photo => photo}
         renderItem={({ item }) => {
         return <Image style={styles.imageStyle} source={{ uri: item}}></Image>
       }}
       />

    </View>
)
}


const styles = StyleSheet.create({
    textStyle : {
        fontSize : 18,
        fontWeight: 'bold',
        margin: 20

    },
    imageStyle : {
        height: 200,
        width: 300,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default ResultShownScreen;