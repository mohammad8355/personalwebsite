import React from 'react';

const ProfileInfo = (props) => {
   let Name = props.Name;
   let Field = props.Field;
   let Age = props.Age;
  return (
    <div className='container'>
        <h2 className='text-start'>{Name}</h2>
        <h3 className='text-start' >{Field}</h3>
        <h4 className='text-start' >Age {Age}</h4>
    </div>
  );
};
export default ProfileInfo;