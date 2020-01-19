import React from 'react';

function VideoItem(props) {

    let title;
    if(props.title === "") {
        title = <span></span>
    } else {
        title = <li dangerouslySetInnerHTML={{ __html: props.title }}/>
    }
    return (
        <div style={{margin: '20px'}}>
            {title}
            <span style={{marginLeft: '25px'}}><a href={props.url}>{props.url}</a></span>
        </div>
    );

}

export default VideoItem;