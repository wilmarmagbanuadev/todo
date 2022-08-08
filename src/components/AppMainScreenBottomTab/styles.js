import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        paddingHorizontal:10,
        elevation:5,
        backgroundColor:'#fff',
        position:'absolute',
        width:'100%',
        bottom:0,

    },
    iconCon:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    iconActive:{
        color:'#0679ff',
        fontSize:18,
    },
    iconNormal:{
        color:'#808b99',
        fontSize:18,
    }

});
  
export default styles;
