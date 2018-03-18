import React from 'react';
import {render} from 'react-dom';
import ProfileLink from './ProfileLink';
import ProfilePic from './ProfilePic';

const Avatar = (props) => {
    return (
      <div>
        <ProfilePic username={props.username} />
        <ProfileLink username={props.username} />
      </div>
    );
  }

export default Avatar;