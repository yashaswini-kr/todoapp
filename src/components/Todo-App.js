import React from 'react';
import ContactCard from './ContactCard.js';

function TodoApp(){
return(
<div className="contacts">
<ContactCard 
    name = "Mr.Prajwal"
    imgURL = "https://placekitten.com/300/200"
    Phone ="(2212-5855)"
    email ="prajwal@gmail.com"

/>
<ContactCard 
    name = "Mr.Purshi"
    imgURL = "https://placekitten.com/300/200"
    Phone ="(2212-5855)"
    email ="prajwal@gmail.com"

/>
<ContactCard 
    name = "Ms.yashu"
    imgURL = "https://placekitten.com/300/200"  
    Phone ="(2212-5855)"
    email ="prajwal@gmail.com"

/>
</div>
)
}
export default TodoApp