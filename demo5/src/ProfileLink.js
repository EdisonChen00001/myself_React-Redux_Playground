import React from 'react';
import {render} from 'react-dom';


const ProfileLink = (props) => {
    return (
      <div>
      <a href={'http://www.facebook.com/' + props.username}>
        {props.username}
      </a>
      This is ProfileLink
      </div>
    );
  }

export default ProfileLink;