import React from 'react';
import ThemeToggle from './ThemeToggle';
import ProfileImage from './image/چگونه-جنتلمن-شویم.jpg';
import LanguageSwitch from './LanguageSwitch';
import ProfileInfo from './ProfileInfo';
import NavMenu from './NavMenu';
import ProfileContentBody from './ProfileContentBody';

const ProfileCard = (props) => {
   let data = props.data;
   let content = props.content;
  return (
     <div className='container-fluid'>
        <div className='d-flex flex-row col-12 justify-content-between'>
        <ThemeToggle></ThemeToggle>
           <LanguageSwitch></LanguageSwitch>
        </div>
        <div className='profilecard col-lg-6 col-md-8 col-sm-12'>
        <div className='profileImage' ><img src={ProfileImage} /></div>
           <div className='body'>
                       <ProfileInfo Name={data.Name} Field={data.Field} Age={data.Age} ></ProfileInfo>   
                       <NavMenu></NavMenu>
           </div>
        </div>
        <ProfileContentBody content={content} ></ProfileContentBody>
     </div>
  );
};
export default ProfileCard;