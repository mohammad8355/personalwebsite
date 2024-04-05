import React from 'react';
import ThemeToggle from './ThemeToggle';
import ProfileImage from './image/چگونه-جنتلمن-شویم.jpg';
import LanguageSwitch from './LanguageSwitch';
import ProfileInfo from './ProfileInfo';

const ProfileCard = (props) => {
   let data = props.data;
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
           </div>
        </div>
     </div>
  );
};
export default ProfileCard;