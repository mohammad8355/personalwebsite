import React from 'react';
import ThemeToggle from './ThemeToggle';
import ProfileImage from './image/چگونه-جنتلمن-شویم.jpg';
import LanguageSwitch from './LanguageSwitch';
import ProfileInfo from './ProfileInfo';

const ProfileCard = () => {
  return (
     <div className='container-fluid'>
        <div className='profilecard col-lg-8 col-sm-12'>
        <div className='profileImage' ><img src={ProfileImage} /></div>
           <div className='header'>
           <ThemeToggle></ThemeToggle>
           <LanguageSwitch></LanguageSwitch>
           </div>
           <div className='body'>
                       <ProfileInfo></ProfileInfo>   
           </div>
        </div>
     </div>
  );
};
export default ProfileCard;