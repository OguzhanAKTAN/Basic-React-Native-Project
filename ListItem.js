import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.Text}</Text>
          <Icon name="remove" size={20} color="firebrick"
          onPress={()=> deleteItem(item.id)}></Icon>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem:{
      padding:15,
      backgroundColor: 'lightgrey',
      borderBottomWidth:1,
      borderColor:'#eee'
  },
  listItemView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
  },
  listItemText:{
      fontSize:18
  }
});


export default ListItem;