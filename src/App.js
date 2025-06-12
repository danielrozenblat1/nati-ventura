import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/CourseNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import FirstScreen from './screens/FirstScreen';
import FormScreen from './form/FormScreen';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import EligibilitySection from './components/fit/WhoFits';
import ByMe from './components/ByMe/ByMe';

function App() {
return <>
    <NavBarNew/>
    <FirstScreen/>
    <SecondScreen/>
    <AboutMe/>
    <ThirdScreen/>
    <EligibilitySection/>
    <FormScreen title="זמן לקבל החלטה"/>
    <ByMe/>
  </>
}

export default App;
