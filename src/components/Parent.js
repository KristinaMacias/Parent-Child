import React from 'react'
import Child from './Child'


export default class Parent extends React.Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            //state variables
            comment: "",
            comments: [], //
            rating: 1
        }
    }

    // handle the event change
    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    } 

    // handle the submit
    handleCommentSubmit = () => {
        this.setState({
            //spread operator
            comments: [...this.state.comments, this.state.comment]
        })
    }

    handleRating = (newState) => {
        this.setState({
            rating: newState
        })
    }



    render() {
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
            
                <input type="text" onChange={this.handleCommentChange} />
                <button onClick={this.handleCommentSubmit}>Submit Comment</button>


                <Child 
                comments={this.state.comments}
                handleRating={this.handleRating}
                 />

            </div>
        )
    }
}