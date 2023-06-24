import {Navbar, Leftpanel} from './assets/component'
function App() {
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div className='flex flex-row'>
      <Leftpanel/>     
    </div>
   </div>
  );
}

export default App;
