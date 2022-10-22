import './App.css';
import { InputForm } from './components/form_component/input-form';

function App() {
  return (
    <div className="App">
      <div className='firstDiv'>
        <div className='up'>
          <h3>Lottery Display</h3>
        </div>
        <br></br>
        <br></br>
        <div className='middle'>
          <h2 className='font2'>A few clicks away<br></br>from creating your<br></br>Lottery Display</h2>
        </div>
        <div className='down'>
        </div>
      </div>
      <div className='secondDiv'>
        <h1>Register</h1>
        <br></br>
        <h2>Manage all your lottery efficiently</h2>
        <p>Let's get you all set up o you can verify you r perosnal account and login</p>

        <div className='upperFormDiv'>
          <InputForm title="First Name"/>
          <InputForm title="Last Name"/>
        </div>

        <div className='middleFormDiv'>
          <InputForm title="Phone Number"/>
          <InputForm title="Email"/>
        </div>

        <div className='lowerFormDiv'>
          <InputForm title="Password"/>
          <InputForm title="Confirm Password"/>
        </div>
      </div>
    </div>
  );
}


export default App;
