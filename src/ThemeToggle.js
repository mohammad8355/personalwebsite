import React from 'react';

const ThemeToggle = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('theme-mode');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('theme-mode',newTheme);
        toggleicon();
    };
    const toggleicon = () => {
        var icon = document.querySelector("#toggleIcon");
        if(icon.classList.contains("fa-sun")){
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
        else{
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
  return (
     <div className='theme-toggle' onClick={toggleTheme}>
               <input type='checkbox' />
               <label><span><i id="toggleIcon" className="fa-solid fa-sun"></i></span></label>
     </div>
  );
};
export default ThemeToggle;