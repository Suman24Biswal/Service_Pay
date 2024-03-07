import Nav from './Components/Nav';  
import Side from './Components/Side';
import './App.css'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Sample from './Page/Sample';
import SeeAll from './Page/SeeAll/SeeAll';
import CardSelect from './Page/Transfer/CardTopup/CardSelect';
import Statement from './Page/Statement/Statement';
import Otp from './Page/Otp/Otp';
import Verify from './Page/Verify/Verify';
import Transfer from './Page/Transfer/Home Page/Transfer'
import PayMethod from './Page/WaterPage/PatMethod/PayMethod';
import WaterState from './Page/WaterPage/WaterStatement/WaterState';
import BillPay from './Page/WaterPage/BillPay/BillPay';
import WaterOtp from './Page/WaterPage/WaterOtp/WaterOtp';
import TvPaySelect from './Page/TV/TvPay/TvPaySelect';
import TvStatement from './Page/TV/TvPay/TvState/TvStatement';
import TvCardSelect from './Page/TV/TvCard/TvCardSelect';
import TvReceipt from './Page/TV/TvReceipt/TvReceipt';
import TutionfeeSelect from './Page/Transfer/Tutionfee/TutionSelect/TuitionfeeSelect';
import TutStatement from './Page/Transfer/Tutionfee/TutionStatement/TutStatement';
import TuitionSelect from './Page/Transfer/Tutionfee/TutionCardSelect/TuitionSelect';
import TutReceipt from './Page/Transfer/Tutionfee/TuitionReciept/TutReciept';
import BroadbandOperator from './Page/Transfer/BroardBand/BroadOperator/BroadbandOperator';
import BroadbandStatement from './Page/Transfer/BroardBand/BroadStatement/BroadbandStatement';
import BroadSelect from './Page/Transfer/BroardBand/BroadSelect/BroadSelect';
import GasPayMethod from './Page/Transfer/Gas/GasPayMethod';
import TvReceipting from './Page/TV/TvReceipt/TvReceipt';
import AccountTransfer from './Page/Transfer/Account Transfer/AccountTransfer';



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
          <Route path='/payMethod' element={<PayMethod title='Water Bill Payment'/>}/>
          <Route path='/waterState' element={<WaterState/>}/>
          <Route path='/billPay' element={<BillPay/>}/>
          <Route path='/waterOtp' element={<WaterOtp/>}/>
          <Route path='/tvPaySelect' element={<TvPaySelect/>}/>
          <Route path='/tvStatement' element={<TvStatement/>}/>
          <Route path='/tvCardSelect' element={<TvCardSelect/>}/>
          <Route path='/tvReceipting' element={<TvReceipting/>}/>
          <Route path='/tvReceipt' element={<TvReceipt/>}/>
          <Route path='/tutionfeeSelect' element={<TutionfeeSelect/>}/>
          <Route path='/tuStatement' element={<TutStatement/>}/>
          <Route path='/tuitionSelect' element={<TuitionSelect/>}/>
          <Route path='/tutReceipt' element={<TutReceipt/>}/>
          <Route path='/broadBandOperator' element={<BroadbandOperator/>}/>
          <Route path='/broadBandStatement' element={<BroadbandStatement/>}/>
          <Route path='/broadSelect' element={<BroadSelect/>}/>
          <Route path='/gasPay'  element={<GasPayMethod title='gas'/>}/>
          <Route path='/accountTransfer'  element={<AccountTransfer/>}/>
          <Route path='/cardTransfer'  element={<AccountTransfer/>}/>
         </Routes>
      </div>
      </div>
       </div>
      </BrowserRouter>
  );
}

export default App;

