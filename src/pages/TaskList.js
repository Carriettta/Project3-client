import React, { Component } from 'react'
import axios from "axios";
class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
             tasks: null 
        }
    }
    componentDidMount(){
        axios.get(`${process.env.REACT_APP_api_base}/tasks`)
            .then((response)=> {
                // setState
            })
    }
    render() {
        return (
            <div>
                {this.state.tasks?
                    this.state.tasks.map((task)=> <h1>{task.title}</h1>):
                    <h1>Loading</h1>
                }
            </div>
        )
    }
}

export default TaskList
