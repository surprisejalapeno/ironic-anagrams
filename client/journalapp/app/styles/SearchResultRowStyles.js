import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'column',
  },
  bodyText: {
    flexDirection: 'row',
    position:'relative',
    fontSize: 14,
    fontWeight: '400',
    color:"#666666",
    alignSelf:'flex-start'
  },
  subbodyText: {
    flexDirection: 'row',
    position:'relative',
    fontSize: 11,
    fontWeight: '300',
    color:"#999999",
    alignSelf:'flex-start'
  },
  names:{
    flexDirection:'column'
  },
  row: {
    flexDirection: 'row',
    paddingTop:12,
    paddingBottom:12,
    marginLeft:12,
    marginRight:12,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    justifyContent:'space-between'
  },
  defaultIcon: {
    fontSize: 24,
    color:"#c7c7cc"
  }, 
  greenIcon: {
    fontSize: 24,
    color:"#0ed978"
  }
});

module.exports = styles;