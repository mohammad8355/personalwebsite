import React from 'react';

const ThemeToggle = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('theme-mode');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('theme-mode',newTheme);
    };
  return (
     <div className='theme-toggle' onClick={toggleTheme}>
       <button>click</button>
     </div>
  );
};
export default ThemeToggle;