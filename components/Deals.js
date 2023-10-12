import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';

export default function Deals(props) { 
    const [deals, setdeals] = useState([]);
    
  useEffect(() => { 
      const fetchDeals = async () => {
          await fetch('https://bakesaleforgood.com/api/deals')// promis 
              .then(response => response.json())// string -> json object
              .then(data => setdeals(data)) // array of deals 
              .catch(error => console.log(error))
      };
      fetchDeals();
  }, []);
    renderItem = (data) => {
        console.log(data.item.key);
        return (
            <View>
                <Image source={{ uri: data.item.media[0] }}
                    style={styles.image} />
                <Text style={styles.text}>{data.item.title}</Text>
                <Text style={styles.text}>{data.item.price}</Text>
            </View>
        );
    }
  return (
    <View style={styles.container}>
         <FlatList
            data= {deals} 
            renderItem= {item=> this.renderItem(item)} 
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    marginLeft:20,
    marginRight: 10,
    marginTop: 50
    },
    text: {
        fontSize: 20
    }, 
    image: {
        width: 300,
        height: 300 
    }
});
