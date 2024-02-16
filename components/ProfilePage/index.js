import {Link} from 'react-router-dom';

import Data from './Data.json'


import './index.css'


const ProfilePage=(props)=> {
  const { avatar, name, bio} = Data;

  return (
    <nav className='nav-header'>
      <div className='profile-container'>
          <div className="user-info">
                <img src={avatar} alt="User Avatar" className='avatar' />
                <h1 className='name'>{name}</h1>
                <p className='bio'>{bio}</p>
                <button type="button" className='logout-btn'>logout</button>
          </div>
          <div className="tabs">
                <Link to="/profile/posts" className="post-link">Posts</Link>
                <Link to="/profile/bookmarks" className="bookmarks-link">Bookmarks</Link>
                <Link to="/settings" className="settings-link">Settings</Link>
          </div>
          <h1 className='heading'>Navigate to different tabs to check for more details</h1>
      </div>
      
    </nav>
  );
}

export default ProfilePage;