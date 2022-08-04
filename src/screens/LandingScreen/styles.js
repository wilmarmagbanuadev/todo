import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    secGotoLogIn:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    bgImage: {
        flex: 1,
        paddingVertical:5,
        paddingHorizontal:15,
        flexDirection:'column',
        justifyContent:'flex-end'
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