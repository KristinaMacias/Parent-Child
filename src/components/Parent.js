import React from 'react'
import Child from './Child'


export default class Parent extends React.Component {
    constructor(props) {
        super(props);

        // state variables
        this.state = {
            //state variables
            comment: "", //string (captured in handCommentChange)
            comments: [], //hold multiple strings (captured in handleCommentSubmit)
            rating: 5
        }
    }
    // const [comment, setComment] = useState('')

    // handle the event change (what the user types) 
    handleCommentChange = (e) => {
        this.setState({ //setState is a built-in method
            comment: e.target.value //updates the state variable "comment"
        })
    } 

    // handle the submit (button click) to update the state array
    handleCommentSubmit = () => { //set state is a built-in method
        this.setState({ //setState is built in
            
            comments: [ ...this.state.reviews, this.state.comment]

            //spread operator will spread out the contents of the existing array, and add the state variable, comment, to the back of the state array
        })
    }

    // function that gets passed to a child as props
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
                comments={this.state.comments} //the state array
                handleRating={this.handleRating} //the function to update star rating
                 />

            </div>
        )
    }
}