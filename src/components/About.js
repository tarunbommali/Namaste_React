

import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
        <div>
        <h1>About Class Component </h1>
        <p>We are a team of food enthusiasts dedicated to bringing you the best dining experiences.</p>
        <p>Our mission is to help you discover new and exciting restaurants in your area.</p>
        
        <UserClass name={"Sanjay (class)"}
        location= {"Hyderabad"} />
        </div>
        );
    }
}
// const About = () => {
//     return (
//         <div>
//         <h1>About Us</h1>
//         <p>We are a team of food enthusiasts dedicated to bringing you the best dining experiences.</p>
//         <p>Our mission is to help you discover new and exciting restaurants in your area.</p>
        
//         <UserClass name={"Sanjay (class)"}
//         location= {"Hyderabad"} />
//         </div>
//     );
//     }


export default About;