import './App.css';
import User from "./components/User"
import Profil from "./components/Profil"
import Experiences from "./components/Experiences"
import Formations from "./components/Formations"
import Hobbies from "./components/Hobbies"
import DataFormations from "./datas/Formations"
import DataExperiences from "./datas/Experiences"
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import MoodIcon from '@mui/icons-material/Mood';

function App() {
  return (
    <div className="App">

      <div className='grid_container'>
        <div className='sidebar'>
          <User />
        </div>
        <div className='main'>
          <div className='boite'>
            <PersonIcon className='icon' />
            <Profil />
          </div>
          <div className='boite'>
            <WorkIcon className='icon' />
            <Experiences datas={DataExperiences}  />
          </div>
          <div className='boite'>
            <SchoolIcon className='icon' />
            <Formations datas={DataFormations} />
          </div>
          <div className='boite hobbies'>
            <MoodIcon className='akon' />
            <Hobbies />
          </div>
          <div className="foot">Bê /username    <span> In/unsername </span> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
