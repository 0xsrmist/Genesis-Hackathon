import React from 'react';
import './Conference.css';
import conference from '../../assets/images/conference.svg'

function Conference() {
  return (
    <div>
      <div>
        <img className="conferenceTxt" src="public/assets/conference/CONFERENCE.png" alt="Image 1" />
        <img className="rectang" src="public/assets/conference/Rectangle36.png" alt="Image 1" />
      </div>
      <div>
        {/* <img className="mainBox" src="public/assets/conference/Rectangle180.png" alt="Image " />
        <img className="pic1" src="public/assets/conference/group.png" alt="img" />
        <img className="pic2" src="public/assets/conference/screen.png" alt="img" />
        <img className="pic3" src="public/assets/conference/group2.png" alt="img" />
        <img className="pic4" src="public/assets/conference/group3.png" alt="img" />
        <img className="pic5" src="public/assets/conference/group4.png" alt="img" />
        <img className="pic6" src="public/assets/conference/Character_1.png" alt="img" />
        <img className="pic7" src="public/assets/conference/Character_2.png" alt="img" /> */}
      </div>
      <div>
        <p className="text">Lorem ipsum dolor sit amet consectetur. Tortor tortor non fusce in in in. At ullamcorper quam ultrices elit ut. Ultrices aliquet dui nunc et leo. Id eu sit enim mi.</p>
      </div>
    </div>
  );
}

export default Conference;
