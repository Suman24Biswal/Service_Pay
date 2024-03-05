import Nav from './Components/Nav';  
import Side from './Components/Side';
import './App.css'


import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Sample from './Page/Sample';
import SeeAll from './Page/SeeAll/SeeAll';
import CardSelect from './Page/CardTopup/CardSelect';
import Statement from './Page/Statement/Statement';
import Otp from './Page/Otp/Otp';
import Verify from './Page/Verify/Verify';
import Transfer from './Page/Transfer/Transfer'
import PayMethod from './Page/WaterPage/PatMethod/PayMethod';
import WaterState from './Page/WaterPage/WaterStatement/WaterState';
import BillPay from './Page/WaterPage/BillPay/BillPay';
import WaterOtp from './Page/WaterPage/WaterOtp/WaterOtp';
import TvPaySelect from './Page/TV/TvPay/TvPaySelect';
import TvStatement from './Page/TV/TvPay/TvState/TvStatement';
import TvCardSelect from './Page/TV/TvCard/TvCardSelect';
import TvReceipt from './Page/TV/TvReceipt/TvReceipt';
import TutionfeeSelect from './Page/Tutionfee/TutionfeeSelect';



function App() {
  return (
    <BrowserRouter>
    <div className='body'>
      <div > 
       <Nav />
      </div>
      <div className='grid'>
      <div><Side/></div>
      <div className='Route'>
       <Routes>
          <Route path='/transfer' element={<Transfer/>}/>
          <Route path='/sample' element={<Sample/>} />
          <Route path='/SeeAll' element ={<SeeAll/>} />
          <Route path='/cardSelect' element={<CardSelect/>} />
          <Route path='/statement' element={<Statement/>} />
          <Route path='/otp' element= {<Otp/>} />
          <Route path='verify' element= {<Verify/>}/>
          <Route path='/payMethod' element={<PayMethod/>}/>
          <Route path='/waterState' element={<WaterState/>}/>
          <Route path='/billPay' element={<BillPay/>}/>
          <Route path='/waterOtp' element={<WaterOtp/>}/>
          <Route path='/tvPaySelect' element={<TvPaySelect/>}/>
          <Route path='/tvStatement' element={<TvStatement/>}/>
          <Route path='/tvCardSelect' element={<TvCardSelect/>}/>
          <Route path='/tvReceipt' element={<TvReceipt/>}/>
          <Route path='/tutionfeeSelect' element={<TutionfeeSelect/>}/>
         </Routes>
      </div>
      </div>
       </div>
      </BrowserRouter>
  );
}

export default App;

