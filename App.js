import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-WpRFW4-kM352X-o1zoaz4Z4C1lx6C5E",
  authDomain: "test-project-12b97.firebaseapp.com",
  databaseURL: "https://test-project-12b97.firebaseio.com",
  projectId: "test-project-12b97",
  storageBucket: "",
  messagingSenderId: "269173538725"
};

firebase.initializeApp(firebaseConfig);

var data = ["Kyle", "Gabe"];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 })
    this.state = {
      listViewData: data,
      newContact: ""
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{marginTop:StatusBar.currentHeight}}>
          <Content>
             <Item>
               <Input placeholder="Add Name"/>
               <Button>
                 <Icon name="add" />
               </Button>
             </Item>
          </Content>
          <Content>
            <List
              datasource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data=>
                <ListItem>
                  <Text>{data}</Text>
                </ListItem>
              }
            />
          </Content>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
