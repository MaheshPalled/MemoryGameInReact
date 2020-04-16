import React, { Component } from 'react';
import {
  Jumbotron, Modal, ModalBody, ModalHeader, Form,
  FormGroup, Label, Input, Button
} from 'reactstrap';
import './App.css';
import CardCreator from "./Component/CardCreator";
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      userName: ''
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(event) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      userName: this.userName.value
    })
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Jumbotron>
            <div className="container">
              <h4>Welcome to the Online memory game {this.state.userName}</h4>
            </div>
          </Jumbotron>
          <Modal isOpen={this.state.modalOpen} toggle={this.handleModal}>
            <ModalHeader toggle={this.handleModal}>Enter player name</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleModal}>
                <FormGroup>
                  <Label htmlFor="username">Player Name</Label>
                  <Input type="text" id="username" name="username"
                    innerRef={input => this.userName = input} />
                </FormGroup>
                <Link to='/game'>
                  <Button type="submit" value="submit" color="primary">Continue.!!</Button>
                </Link>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={HomePage} />
          <Route path='/game' component={CardCreator} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
