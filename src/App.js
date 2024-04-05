import logo from './logo.svg';
import ProfileCard from './profilecard';
import './css/index.css';

function App() {
  const data = {Name : "Mohammad Mahdi Almasi Kh" , Field : "FullStack Developer", Age : "20" };
  return (
    <div className="App">
       <h1>Hi Every one</h1>
       <ProfileCard data={data} ></ProfileCard>
    </div>
  );
}

export default App;
