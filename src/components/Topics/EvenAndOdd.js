import React, {Component} from 'react';


export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }
        handleChange(val){
            this.setState({ userInput: val });
        }
        assignEvenAndOdds(userInput){
            let nums = userInput.split(",");
            let even = [];
            let odd = [];

            for (let i= 0; i < nums.length; i++){
                if (nums[i] % 2 === 0){
                    even.push(`${nums[i]} `);
                } else {
                    odd.push(`${nums[i]} `);
                }
            }
            this.setState({ evenArray: even});
            this.setState({oddArray: odd})

        }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox">Evens:{this.state.evenArray}</span>
                <span className="resultsBox">Odds:{this.state.oddArray}</span>
            </div>
        )
    }
}
