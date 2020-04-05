import React, { Component } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Col, Link, Button
} from "reactstrap";
import { array } from 'prop-types';


class NumberDisplayComponenet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 4,
            isCardShown: false,
            myCard: []
        }
        this.generateMyCardValues = this.generateMyCardValues.bind(this);
        this.nextLevel = this.nextLevel.bind(this);
    }

    // setMyLevel(){
    //     this.setState({level: this.state.level++});
    //     this.generateMyArray();
    // }

    generateMyCardValues() {
        let level = this.state.level;
        let len = (level * level);
        let myArray = new Array(len);
        while (myArray.includes(undefined)) {
            const tempValue = Math.floor(Math.random() * len) + 1;//generating a temp value betweeen 1-length og array.
            const randomIndex1 = Math.floor(Math.random() * len); //Find a random index for array
            const randomIndex2 = Math.floor(Math.random() * len); // Find another random index for array
            if (myArray[randomIndex1] === undefined && myArray[randomIndex2] === undefined && randomIndex1 != randomIndex2) {
                myArray[randomIndex1] = tempValue;
                myArray[randomIndex2] = tempValue;
            }
        }
        this.setState({
            myCard: this.state.isCardShown ? '' : myArray,
            isCardShown: !this.state.isCardShown
        });

    }

    nextLevel() {
        this.setState({
            level: (this.state.level + 1)
        })
        this.generateMyCardValues();
    }

    render() {

        return (
            <div className="container col">
                <h1> This is a numerical memory game </h1>
                <h2> Guess a card to a matching number</h2>
                <div className="container">
                    <Button className="primary" onClick={this.generateMyCardValues}> Click Here to start</Button>
                    {"   "}
                    <Button className="secondary" onClick={this.nextLevel}> Next level! </Button>
                </div>

                <Row>
                    <RenderMyCards myCard={this.state.myCard} />
                </Row>

            </div>
        );
    }
}

export default NumberDisplayComponenet;

function RenderMyCards({ myCard }) {
    let index =-1;
    return (
        <div className="container ">
            <div className="container row">
                {myCard.map(newCard => (
                        <button key={index++} id="cardDisplay" tag="link" defaultValue={newCard} onClick={console.log("hi")}>
                            <h1>#</h1>
                        </button>
                )
                )
                }
            </div>
        </div>

    );
}