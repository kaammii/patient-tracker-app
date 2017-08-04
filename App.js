import React, { Component } from 'react';
import Expo from 'expo';
import { Container,View, Alert,Header, Title, Content,H1, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input } from 'native-base';
import {Bars} from 'react-native-loader';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontsAreLoaded: false
    }
  }
async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({fontsAreLoaded: true});
      }
  render() {
    return this.state.fontsAreLoaded ? (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Patient Tracker App</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <H1 style={{textAlign: 'center'}} >Login Form</H1>
            <Item>
              <Input placeholder="Username" ref="name" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button block
            onPress={() => Alert.alert(
            'Hello World',
            'Hello there',
            )}
            ><Text>Sign In</Text></Button>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    ) :   <View><Bars size={10} color="#337ab7" /></View>;
  }
}