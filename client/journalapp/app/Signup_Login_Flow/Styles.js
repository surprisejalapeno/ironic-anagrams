import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions
} from 'react-native';

//This provides the styling for the login/sign up tabs and the splashscreen
const styles = StyleSheet.create({
  viewContainer: {
    width: Dimensions.get('window').width*.7,
    paddingTop: 6,
    paddingBottom:6,
    marginTop:52,
    marginBottom: 52,
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  fieldContainer:{
    marginBottom:16
  },
  subHeader: {
    fontSize: 12,
    fontWeight: '700',
    color:"#424242",
    marginLeft:12,
    marginBottom:4.5
  },
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'column',
    paddingLeft:6,
    marginLeft:12,
    marginRight:12,
    borderWidth:1,
    height:32,
    borderColor: '#cccccc',
    justifyContent:'space-between',
    fontSize: 14,
    fontWeight: '400',
    borderRadius:3
  },
  button:{
    height:40,
    backgroundColor:"#424242",
    marginLeft:12,
    marginRight:12,
    marginTop:12,
    paddingTop:8.5,
    color:'white',
    fontSize: 16,
    fontWeight: '400',
    borderRadius:3
  },
  splashContainer:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img:{
    // flex:1,
    height:225,
    width:225,
    marginTop:16,
    marginBottom:16
    // flexDirection:'column',
    // justifyContent:'center'
  },
  title: {
    marginTop: 32,
    height: 32,
    fontSize: 21,
    fontWeight: '600',
  },
  subtitle: {
    height: 100,
    fontSize: 17,
    fontWeight: '400',
  }
});

module.exports = styles;