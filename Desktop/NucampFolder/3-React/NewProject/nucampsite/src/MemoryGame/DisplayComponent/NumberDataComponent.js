import React, {Component} from "react";


class NumberDataComponent extends Component{

        constructor(props){
            super(props);
            this.state={
                level:4,
                isCardShown: false,
                myCard: []
            }

            this.incrementMyLevel = this.incrementMyLevel.bind(this);
            this.generateMyCardValues = this.generateMyCardValues.bind(this);
        }

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


        incrementMyLevel(){
            this.setState({
                level:(this.state.level+1)
            })
        }

    render(){
        let index =-1;
        const displayCard = <div className="container row" isOpen>
        {myCard.map(newCard => (
                <button key={index++} id="cardDisplay" tag="link" defaultValue={newCard} onClick={console.log("hi")}>
                    <h1>#</h1>
                </button>
        )
        )
        }
    </div>
        return (
            <div className="container ">

            <button> Begin </button>
            {this.state.isCardShown?{displayCard}:null}
                
            </div>
    
        );
    }
}

export default NumberDataComponent;