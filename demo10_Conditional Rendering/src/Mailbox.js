import React from 'react';

export function Mailbox (props){
        const unreadMessages = props.unreadMessages;
        return(
            //const unreadMessages = props.unreadMessages;
            <div>
                <h1>Hello</h1>
                {
                    unreadMessages.length > 0 && 
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
                <p>in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false</p>        
            </div>
        );
}
