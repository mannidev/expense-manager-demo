import React from 'react';
import style from './social-media-handles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function SocialMediaHandles(props) {
  return (
    <div className={style['social-container']}>
      <a href="#" class="social">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" class="social">
        <FontAwesomeIcon icon={faGooglePlusG} />
      </a>
      <a href="#" class="social">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}

export default SocialMediaHandles;
