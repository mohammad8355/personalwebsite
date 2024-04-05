import logo from './logo.svg';
import ProfileCard from './profilecard';
import './css/index.css';

function App() {
  const data = {Name : "Mohammad Mahdi Almasi Kh" , Field : "FullStack Developer", Age : "20" };
  const content = {Title : "About " + data.Name , Description : "Mohammed Mahdi is a skilled Fullstack and .NET developer with a rich background spanning from 2022. With a passion for continuous learning, Mohammed consistently seeks to enhance his expertise in various programming languages, frameworks, and development methodologies. His proficiency extends across both frontend and backend technologies, allowing him to craft robust, user-friendly applications. Through years of hands-on experience, Mohammed has honed his problem-solving abilities, enabling him to tackle complex challenges efficiently. His dedication to staying updated with the latest industry trends ensures that his solutions are always cutting-edge and innovative. Mohammed's commitment to excellence, coupled with his versatile skill set, makes him a valuable asset to any development team."};
  return (
    <div className="App">
       <h1>Hi Every one</h1>
       <ProfileCard data={data} content={content} ></ProfileCard>
       
    </div>
  );
}

export default App;
