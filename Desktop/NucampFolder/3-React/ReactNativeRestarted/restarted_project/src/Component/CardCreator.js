import React, { Component } from "react";
import { Button, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";


let cardContent= [];

class CardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 3,
            areCardsDislpayed:false,
            delectedCard: '',
            selectedCardPair: []
        }

        this.setNextLevel = this.setNextLevel.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.buildMyCard = this.buildMyCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    setNextLevel() {
        this.setState({
            level: this.state.level + 1,
            selectedCardPair:[]
        })
        this.buildMyCard();
    }

    resetGame() {
        this.setState({
            level: 3,
            areCardsDislpayed:false
        })
        cardContent=[];
    }

  

    buildMyCard(){
        let currentLevel = this.state.level;
        let len = (currentLevel * currentLevel);
        let myObject = [];
        console.log("Calling build my card function");
        while (currentLevel > 0){
            let tempValue = Math.floor(Math.random() * len) + 1;
            let randomIndex1 = Math.floor(Math.random() * len); //Find a random index for array
            let randomIndex2 = Math.floor(Math.random() * len); // Find another random index for array

            if (myObject[randomIndex1] === undefined && myObject[randomIndex2] === undefined
                && randomIndex1 !== randomIndex2) {
                let obj1 = {
                    id: randomIndex1,
                    isOpen: false,
                    value: tempValue,
                    isMatched:false
                   }
                let obj2 = {
                    id: randomIndex2,
                    isOpen: false,
                    value: tempValue,
                    isMatched:false
                    }
                myObject[randomIndex1]=obj1;
                myObject[randomIndex2]= obj2;
                currentLevel--;
            }
        }
         cardContent = myObject;
        this.setState({
            areCardsDislpayed:true,
            selectedCardPair:[]
        })
    }

    flipCard(card) {
        let tempCardContent;
        if (this.state.selectedCardPair.length === 2 ){
            let isMatchedValue = this.state.selectedCardPair.reduce((accum,data) => accum===data?true:false);
            console.log("value for is matched "+isMatchedValue);
                tempCardContent=cardContent.map(mycard=>{
                    if (mycard.id===card.id){
                            mycard.isOpen=!mycard.isOpen;
                            return mycard
                    }
                    return mycard;
                });

                this.setState({
                    selectedCardPair: [card.value]
                });
            }   

            else {
                this.setState(previousState => ({
                    selectedCardPair: [...previousState.selectedCardPair, card.value]
                }));
                tempCardContent=cardContent.map(mycard=>{
                    if (mycard.id===card.id){
                         mycard.isOpen=!mycard.isOpen;
                         return mycard;
                    }
                    return mycard;
                });

            }
           


       
       cardContent=tempCardContent;

       console.log(" card content : " + JSON.stringify(cardContent));
    }



    render() {
        var showCards = cardContent.map(card => {
            if (card) {
                return (
                    <Card key={cardContent.indexOf(card)} id="memoryCard" onClick={(e) => this.flipCard(card)}>
                        <CreteACard isOpen={card.isOpen} value={card.value} isMatched={card.isMatched}>
                        </CreteACard>
                    </Card>
                );
            }
                return (
                    <div>

                    </div>
                );
            }
        );

        return (
            <div className="container">
                <Row className="container" id="actionButton">
                    <Col className="col-2">
                        <Link to='/'>
                            <Button onClick={this.resetGame} color="secondary"> Back </Button>
                        </Link>
                    </Col>
                    <Col className="col-2">
                        <Button onClick={this.buildMyCard} color="primary"> Begin > </Button>
                    </Col>
                    <Col className="col-2">
                        <Button onClick={this.setNextLevel} color="warning"> Next level</Button>
                    </Col>
                </Row>
                <Row className="container">
                    {showCards}
                </Row>
            </div>
        );
    }

}


function CreteACard(props){

    if (!props.isOpen && !props.isMatched){
        return(
            <img src='../../assets/angryBird.gif' alt='Angry bird' width='140px' height='140px'/>
        )
    }

    else if (props.isOpen && props.isMatched){
        return(
            <img src='../../assets/angryBird.gif' alt='Angry bird' width='140px' height='140px'/>
        )
    }
    
    return(
        <div className="container">
            <h1 className="flex-center">{props.value}</h1>
        </div>
        
    )
}

export default CardCreator;