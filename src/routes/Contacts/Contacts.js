import React from "react";
import './Contacts.scss'
const Contacts = () => {
    return(
        <div className="container">
            <div className="Ul_container">
                <h2 id="h2_Ul">You are in the right place if:</h2>
                <ul className="Ul_content">
                    <li className="list_item">You have an event and you want to cover it </li>
                    <li className="list_item">You have an article you want to publish on our platform </li>
                    <li className="list_item">Want to join our writing team</li>
                    <li className="list_item">Looking for publicity for your company inside engineering community</li>
                    <li className="list_item">Requesting a subject we need to cover or reporting a bug </li>
                </ul>
            </div>
            
        </div>
    )

}
export default Contacts