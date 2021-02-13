import React from 'react';

import { Video } from './background-video.styles.jsx';

import starsVideo from '../../assets/stars.mp4'

const BackgroundVideo = () => (
   <Video autoPlay loop muted >
          <source src={starsVideo} type='video/mp4' />
   </Video>
);



export default BackgroundVideo;