import React,{useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'todoDB.db' });


const Task = (props) => {

  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{props.text.slice(6)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  itemText: {
    maxWidth: '80%',
    color:"#000",
  },

});

export default Task;