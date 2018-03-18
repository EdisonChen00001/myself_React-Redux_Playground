import React from 'react';
import {render} from 'react-dom';

const ProfilePic = (props) => {
    return (<div><img className='imagePic' src={'http://i3.sinaimg.cn/ty/j/2015-04-25/U6521P6T12D7587266F44DT20150425225119.jpg' + props.username + '/picture'} />
        This is ProfilePic
      </div>);
}

export default ProfilePic;