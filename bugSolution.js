```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const DATA = [ {id: '1', title: 'Item 1'}, {id: '2', title: 'Item 2'}, {id: '3', title: 'Item 3'}];

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(DATA);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>    
        <Text>{item.title}</Text>
      </View>    
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <Text>No items found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'grey',
    borderWidth: 1
  },
});

export default App; 
```