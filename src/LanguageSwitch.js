import React from 'react';

const LanguageSwitch = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('theme-mode');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('theme-mode',newTheme);
    };
    const languageswitch = () => {
       
    }
  return (
    <select>
    <option value={0}>Language</option>
    <option value={1}>English</option>
    <option value={2}>Persian</option>
    </select>
  );
};
export default LanguageSwitch;