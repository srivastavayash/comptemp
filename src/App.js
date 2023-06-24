import {Navbar, Mainpanel,Leftpanel} from './assets/component'
function App() {
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div className='flex flex-row'>
      <Leftpanel/>     
      <Mainpanel/>
    </div>
   </div>
  );
}

export default App;
