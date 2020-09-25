import React from 'react';
 
function ContactCard(props){
    return(
        <div className ="contact-card">

        <img src={props.imgURL} alt='cat image' />
        <h3>name:{props.name}</h3>
        <p>phone:{props.phone}</p>
        <p>email:{props.email}</p>

        </div>
    )
}
export default ContactCard