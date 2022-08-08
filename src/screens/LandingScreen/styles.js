import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    secGotoLogIn:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    bgImage: {
        paddingVertical:5,
        paddingHorizontal:15,
        flex:1,
        justifyContent:'center'
    },
    appLogo:{
        width:50,
        height:50
    },
    heading:{
        fontSize:45,
        color:'#2389fe',
        fontWeight:'600',
        lineHeight:50,
    },
    imgPlaceholder:{
        width:250,
        height:200
    }
});
  
export default styles;