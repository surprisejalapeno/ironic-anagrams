import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

//var Entry = require('./Entry')


var EntryList = ({entries}) => (
    <ListView
       dataSource={entries}
       renderRow={ (rowData) =>
          <Text>
            {rowData.text}
            {rowData.createdAt}
          </Text>
        }
     />
)


// This is what the code would look like if you wanted to
//create this as a class instead of a stateless component

// class EntryList extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <ListView
//          dataSource={this.props.entries}
//          renderRow={(rowData) =>
//           <Text>
//             {rowData.text}
//             {rowData.createdAt}
//           </Text>
//         }
//        />
//     );
//   }
// }

module.exports = EntryList;


