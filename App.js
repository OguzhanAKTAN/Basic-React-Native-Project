import React,{useState} from 'react';
import {View, Text, StyleSheet,FlatList}from 'react-native';
import Header from './Header';
import ListItem from './ListItem'
import AddItem from './AddItem'

const App = () => {
const[items,setItems] = useState([
  {id: 1,Text:'Milk'},
  {id: 2,Text:'Eggs'},
  {id: 3,Text:'Bread'},
  {id: 4,Text:'Chips'},
])

  const deleteItem =(id) => {
    setItems(prevItems =>{
      return prevItems.filter(item => item.id!=id);
    });
  }

  const addItem= text =>{
    setItems(prevItems=>{
      return[{id:8,text},...prevItems]
    });
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({item})=>(
        <ListItem item={item} deleteItem={deleteItem}></ListItem>
      )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
  },
});


export default App;