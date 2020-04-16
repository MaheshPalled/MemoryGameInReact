import React, {Component} from 'react';
import DisplayWelcomePage from './DisplayWelcomePage';
import { Link } from "react-router-dom";
import {Button} from "reactstrap";



class NumberDisplayComponenet extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:'',
            dislpayName:false
        }
        this.onStart=this.onStart.bind(this);
    }

    onStart(){
        let name= prompt("Enter the player name");
        this.setState({
            userName:name
        });
        
    }

    render(){
       
        return(
                <div>
                    <h1> This is a  online number memory game.</h1>
                    <h2> Match the number hidded behind the card.</h2>
                    <Link to= {`/welcome/:${this.state.userName}`}>
                    <Button className="primary" onClick={this.onStart}> Click me ...!</Button>
                    </Link>
                </div>
        );
    }
}

export default NumberDisplayComponenet;