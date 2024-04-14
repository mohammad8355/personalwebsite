import logo from './logo.svg';
import ProfileCard from './profilecard';
import { useState } from 'react';
import './css/index.css';

function App() {
  const data = {Name : "Mohammad Mahdi Almasi Kh" , Field : "FullStack Developer", Age : "20" };
  const Home = {Title : "About " + data.Name , Description : "Mohammed Mahdi is a skilled Fullstack and .NET developer with a rich background spanning from 2022. With a passion for continuous learning, Mohammed consistently seeks to enhance his expertise in various programming languages, frameworks, and development methodologies. His proficiency extends across both frontend and backend technologies, allowing him to craft robust, user-friendly applications. Through years of hands-on experience, Mohammed has honed his problem-solving abilities, enabling him to tackle complex challenges efficiently. His dedication to staying updated with the latest industry trends ensures that his solutions are always cutting-edge and innovative. Mohammed's commitment to excellence, coupled with his versatile skill set, makes him a valuable asset to any development team."}
  const Portfolio = {Title : "My Projects" , Description : "<h1>Shopping Store</h1><br><p>this is my project</p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoGrBZQvMmxKtbJ3XJQXV1yOIA51jAr3tqAu5xd1fwA&s' />"};
  const Skills = { Title:"My Skills", Description :'<ul><li>C#</li><li>html</li><li>css</li><li>js</li></ul>'};
  const content = {Title : Home.Title ,Description : Home.Description};
  const [contentType,setContentType] = useState("Home");
  const handleChangeContent = (contentType) => {
      setContentType(contentType);
  }
  const changecontent = (contentType) => {
   switch(contentType){
    case "Home":
      content.Title = Home.Title;
      content.Description = Home.Description;
      break;
      case "Portfolio":
      content.Title = Portfolio.Title;
      content.Description = Portfolio.Description;
      break;
      case "Skills":
      content.Title = Skills.Title;
      content.Description = Skills.Description;
      break;
      default:
        content.Title = Home.Title;
        content.Description = Home.Description;
        break;
   }
  }
  return (
    <div className="App">
       <h1>Hi Every one</h1>
       {changecontent(contentType)}
       <ProfileCard data={data} content={content} onChange={handleChangeContent} ></ProfileCard>
       
    </div>
  );
}

export default App;
