import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function SocialMediaHandles(props) {
  return (
    <div class="social-container">
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
