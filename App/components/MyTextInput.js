import React from 'react';
import { TextInput , StyleSheet,View } from 'react-native';
 
const MytextInput = (props) => {
  return(
    <View style={styles.textInputWrapper}>
        <TextInput  
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#cfcecc"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={styles.textInput}
        blurOnSubmit={false}
        value={props.value}
        />
    </View>
  ); 
};

 
const styles = StyleSheet.create({
 textInputWrapper:{
    paddingVertical:5
 },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '100%',
    color:"#000",
  },
});
 
export default MytextInput;

