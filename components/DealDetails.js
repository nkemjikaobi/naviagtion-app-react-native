import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';

export default function DealDetails(props) { 
    const [deal, setdeal] = useState({});
    
  useEffect(() => { 
      const fetchDealDetail = async () => {
         
      };
      fetchDeals();
  }, []);
   
  return (
    <View style={styles.container}>
        
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
