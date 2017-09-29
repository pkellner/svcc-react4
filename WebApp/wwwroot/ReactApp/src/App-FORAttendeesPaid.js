import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Search from './Search';
import AttendeeList from './AttendeeList';

import DataApi from './components/codecamp/speakers/DataApiSpeakers';
import axios from 'axios';

//console.log("process.env.NODE_ENV:" + process.env.NODE_ENV);

import data from './AttendeesPaid.json';
const api = new DataApi(data);





class App extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         attendeesPaid: []
    //     };
    // }

    constructor() {
        super();
        this.state = {
            attendeesPaid: api.getAttendeesPaid()
        };
    }




    async componentDidMount() {
        const rawData = await axios.get("http://localhost:17138/rest/session/ext/codestarsadmin");
        const api = new DataApi(rawData);

        this.setState( () =>{
            return {
                attendeesPaid: api.getAttendeesPaid()
            }
        });

    }



    render() {
        return (
            <div className="App">

                {/*<AttendeeList attendeeArray='{state.attendeesPaid}'/>*/}
                <AttendeeList
                    attendeeArray={this.state.attendeesPaid}/>

            </div>

        );
    }
}

export default App;
