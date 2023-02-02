import {React, useState,useRef } from 'react'
import { Data } from '../Data.js'
import Billdetails from './Billdetails'
import History from './History'
import { UserAuth } from '../context/AuthContext'
import {v4 as uuidv4} from 'uuid'
import { motion as m } from "framer-motion"

const MainDash = (props) => {
  const [data, setData] = useState(Data);
  const netRef = useRef()
  const [error, setError] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const [details, setDetails] = useState("")
  const [complete, setComplete] = useState(true)
  const [billValue, setBillValue] = useState("")
  
  const [error2, setError2] = useState("")
  const [color, setColor] = useState(false)
  const networkShow = () => {
    netRef.current.classList.toggle("active")
    handleClick()
  }
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  
  const handleInput = (e) => {
    setDetails(e.target.value)
    if (e.target.value.length > 30)
    {
      setError("Exceeded Max Amount of Characters")
    setColor(true)
    }

    else if (e.target.value.length > 1) {
      setError("Character length Approved")
      setColor(false)
    } else {
      setError(false)
    }
   
  }
  const date = new Date();
   const balance = Intl.NumberFormat().format(Math.ceil(Math.random() * 990000000) + 2000);


let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
const currentDate = `${day}-${month}-${year}`

  const handleBill = (e) => {
    setBillValue(e.target.value)
      if (e.target.value.length > 4)
    {
      setError2("Exceeded Max Amount of Characters")
    setColor(true)
    } else {
      setError2("")
    }
  }
  const newBill = (details,  billValue, complete, date) => {
  const  newPayment = {
      id: uuidv4(),
        details:details,
      date:currentDate,
        bill:billValue,
      complete: complete,
    }
   setData(data => [newPayment, ...data])
   
    
  }
  const handleComplete = () => {
    setComplete(!complete)
  
  }
 
  const { user, } = UserAuth();
  return (

      <div className='mt-2 text-center'>
          <h1 className='text-[#A8A8A8] text-2xl'>Balance</h1>
          <h1 className='text-4xl font-bold mt-4'>$
         {balance}
          </h1>
          <h2 className='text-lg mt-4'>0123456789 &nbsp; <i className="fa-solid fa-copy"></i></h2>
          <div className='w-full flex flex-col items-center'>
               <div className='mx-auto  flex items-center space-x-6 mt-4 '>
              <button onClick={props.funkPopup} className='text-black rounded-full w-[6rem] py-1 bg-white'>Send</button>
                  <button onClick={props.funkPopup2} className='text-black rounded-full w-[6rem] py-1 bg-white'>Receive</button>
                
        
        </div>
        <div className='w-screen flex justify-center items-center'>
           <div className='w-screen lg:w-[30%] mx-0  py-4 lg:mx-auto    left-0 flex items-center justify-center relative '>
            <m.div animate={{ scale: 1 }} initial={{ scale: 0 }} ref={props.sendRef} className="  bg-[#fff]  text-black absolute  opacity-0 overflow-hidden    left-[10px] -top-[50px] duration-[800ms] px-6 ease-in-out rounded-xl space-y-3 flex w-[0px] h-[0px] flex-col  text-left pt-3">
              <div className=' right-0 absolute top-3 cursor-pointer' onClick={props.funkPopup}><i className="fa-solid fa-xmark text-gray-500 text-2xl mr-6"></i></div>
              {/* send details */}
              <form onSubmit={(e) => {
                e.preventDefault();
                setDetails("")
                setComplete(complete)
                setBillValue("")
                newBill(details, billValue, complete, date)
                props.funkPopup()
               }} action="" className='w-[90%] space-y-4'>
              <input  type="number" placeholder='Receiver Account Number' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full' />
                <input value={details} onChange={handleInput} type="text" placeholder='Description' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                <div className="overflow-hidden"><m.p animate={{ scale: 1, left: 24 }} initial={{ scale: 0 }} className='text-xs absolute -left-[300px]' style={{ color: color ? 'red' : '#1ce783' }}>
                 {error}
                   </m.p>  </div>
                
                <input value={billValue} onChange={handleBill} type="number" placeholder='Bill Amount' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                  <div className="overflow-hidden py-0  h-3"><m.p animate={{ scale: 1, left: 24, duration: 25 }} initial={{ scale: 0 }} className='text-xs absolute  -left-[300px] text-red-500' >
                 {error2}
                   </m.p>  </div>
                <label className='text-xs flex items-center' htmlFor="complete">
                  <input value={complete} defaultChecked onChange={handleComplete}  type="checkbox" name="complete" id="" />  <span className='ml-2'>Complete</span>
                   </label>
                   
              <button type="submit" className="w-full rounded-xl bg-gray-500 text-white"> Pay Bill</button>
              </form>
           </m.div>
          <m.div animate={{  scale: 1 }} initial={{ scale: 0 }} ref={props.receiveRef} className="  bg-[#fff]  text-black absolute  opacity-0 overflow-hidden    right-[10px] -top-[50px] duration-[800ms] px-6 ease-in-out rounded-xl space-y-3 flex w-[0px] h-[0px] flex-col  text-left pt-3">
              <div className=' right-0 absolute top-3 cursor-pointer' onClick={props.funkPopup2}><i className="fa-solid fa-xmark text-2xl mr-6 text-gray-500"></i></div>
             
              
            <p className='text-gray-500 -mt-4'>Copy Your Account number above <br /> or receive funds using the uid below</p>
            <p className='text-sm font-bold '>User Id: <span className='font-light text-xs'>{user?.uid}</span>  </p>
            </m.div>
          </div>
        </div>
        {/* airtime intl transfer and credit card bills refs and popups logic */}
         <div className='w-screen flex justify-center items-center'>
           <div className='w-screen lg:w-[30%] mx-0  py-4 lg:mx-auto    left-0 flex items-center justify-center relative '>
            <m.div animate={{ scale: 1 }} initial={{ scale: 0 }} ref={props.airtimeRef} className="  bg-[#fff] form-container text-black absolute  opacity-0 overflow-x-hidden overflow-y-scroll   left-[10px] -top-[50px] duration-[800ms] px-6 ease-in-out rounded-xl space-y-3 flex w-[0px] h-[0px] flex-col  text-left py-4">
              <div className=' right-0 absolute top-3 cursor-pointer' onClick={props.buyAirtime}><i className="fa-solid fa-xmark text-gray-500 text-2xl mr-6"></i></div>
              {/* airtime logic first */}
              <form onSubmit={(e) => {
                e.preventDefault();
                setDetails("")
                setComplete(complete)
                setBillValue("")
                newBill(details, billValue, complete, date)
                props.funkPopup()
               }} action="" className='w-[90%] space-y-4'>
              {/* <input  type="number" placeholder='Receiver Account Number' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full' />
                <input value={details} onChange={handleInput} type="text" placeholder='Description' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                <div className="overflow-hidden"><m.p animate={{ scale: 1, left: 24 }} initial={{ scale: 0 }} className='text-xs absolute -left-[300px]' style={{ color: color ? 'red' : '#1ce783' }}>
                 {error}
                   </m.p>  </div> */}
                <div className= "container ">
                 <h2 className='text-lg px-5'>Mobile Network</h2>
                 
                  <div className='select-box flex w-full flex-col-reverse'>
                    
                    <div  ref={netRef} className='options-container  bg-[#2f3640] text-[#f5f6fa] max-h-0 opacity-0  w-full duration-700 ease-in-out px-6 py-3 rounded-xl overflow-hidden'>
                      <div className='option px-3 py-2 cursor-pointer hover:bg-[#414b57]'>
                        <input  type="radio" className='radio ' id="mtn" name="mtn" />
                        <label htmlFor="mtn" className="cursor-pointer">MTN Nigeria</label>
                      </div>
                       <div className='option  px-3 py-2 cursor-pointer hover:bg-[#414b57]'>
                        <input type="radio" className='radio hidden' id="airtel" name="airtel" />
                        <label  htmlFor="airtel" className="cursor-pointer">Airtel Nigeria</label>
                        </div>
                         <div className='option  px-3 py-2 cursor-pointer hover:bg-[#414b57]'>
                        <input type="radio" className='radio hidden' id="glo" name="glo" />
                        <label htmlFor="glo" className="cursor-pointer">Glo Nigeria</label>
                        </div>
                         <div className='option  px-3 py-2 cursor-pointer hover:bg-[#414b57]'>
                        <input type="radio" className='radio hidden' id="9mobile" name="9mobile" />
                        <label htmlFor="9mobile" className="cursor-pointer">9Mobile Nigeria</label>
                      </div>
                       <div className='option  px-3 py-2 cursor-pointer hover:bg-[#414b57]'>
                        <input type="radio" className='radio hidden' id="ntel" name="ntel" />
                        <label htmlFor="ntel" className="cursor-pointer">Ntel </label>
                        </div>
                    </div>
                     <div onClick={networkShow} className='selected bg-[#2f3640] rounded-xl mb-[5px] text-[#f5f6fa] relative px-6 py-4'>
                      <p>  Select Your Provider</p> {isClicked ? <i className="fa-solid fa-angle-up absolute right-[10px] top-[20px] duration-700 ease-in-out"></i>:<i className="fa-solid fa-angle-down absolute right-[10px] top-[20px] duration-700 ease-in-out"></i>}
                  </div>
                  </div>
                </div>
                <input value={billValue} onChange={handleBill} type="number" placeholder='Bill Amount' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                  <div className="overflow-hidden py-0  h-3"><m.p animate={{ scale: 1, left: 24, duration: 25 }} initial={{ scale: 0 }} className='text-xs absolute  -left-[300px] text-red-500' >
                 {error2}
                   </m.p>  </div>
                <label className='text-xs flex items-center' htmlFor="complete">
                  <input value={complete} defaultChecked onChange={handleComplete}  type="checkbox" name="complete" id="" />  <span className='ml-2'>Complete</span>
                   </label>
                   
              <button type="submit" className="w-full rounded-xl bg-gray-500 text-white"> Pay Bill</button>
              </form>
           </m.div>
            {/* credit card spending logic and popup second */}
            <m.div animate={{ scale: 1 }} initial={{ scale: 0 }}  className="  bg-[#fff]  text-black absolute  opacity-0 overflow-hidden    left-[10px] -top-[50px] duration-[800ms] px-6 ease-in-out rounded-xl space-y-3 flex w-[0px] h-[0px] flex-col  text-left pt-3">
              <div className=' right-0 absolute top-3 cursor-pointer' ><i className="fa-solid fa-xmark text-gray-500 text-2xl mr-6"></i></div>
              {/* credit card logic*/}
              {/* <form onSubmit={(e) => {
                e.preventDefault();
                setDetails("")
                setComplete(complete)
                setBillValue("")
                newBill(details, billValue, complete, date)
                props.funkPopup()
               }} action="" className='w-[90%] space-y-4'>
              <input  type="number" placeholder='Receiver Account Number' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full' />
                <input value={details} onChange={handleInput} type="text" placeholder='Description' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                <div className="overflow-hidden"><m.p animate={{ scale: 1, left: 24 }} initial={{ scale: 0 }} className='text-xs absolute -left-[300px]' style={{ color: color ? 'red' : '#1ce783' }}>
                 {error}
                   </m.p>  </div>
                
                <input value={billValue} onChange={handleBill} type="number" placeholder='Bill Amount' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                  <div className="overflow-hidden py-0  h-3"><m.p animate={{ scale: 1, left: 24, duration: 25 }} initial={{ scale: 0 }} className='text-xs absolute  -left-[300px] text-red-500' >
                 {error2}
                   </m.p>  </div>
                <label className='text-xs flex items-center' htmlFor="complete">
                  <input value={complete} defaultChecked onChange={handleComplete}  type="checkbox" name="complete" id="" />  <span className='ml-2'>Complete</span>
                   </label>
                   
              <button type="submit" className="w-full rounded-xl bg-gray-500 text-white"> Pay Bill</button>
              </form> */}
            </m.div>
            {/* intl transfers logic */}
            <m.div animate={{ scale: 1 }} initial={{ scale: 0 }}  className="  bg-[#fff]  text-black absolute  opacity-0 overflow-hidden    left-[10px] -top-[50px] duration-[800ms] px-6 ease-in-out rounded-xl space-y-3 flex w-[0px] h-[0px] flex-col  text-left pt-3">
              <div className=' right-0 absolute top-3 cursor-pointer' onClick={props.funkPopup}><i className="fa-solid fa-xmark text-gray-500 text-2xl mr-6"></i></div>
              {/* intl transfers */}
              {/* <form onSubmit={(e) => {
                e.preventDefault();
                setDetails("")
                setComplete(complete)
                setBillValue("")
                newBill(details, billValue, complete, date)
                props.funkPopup()
               }} action="" className='w-[90%] space-y-4'>
              <input  type="number" placeholder='Receiver Account Number' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full' />
                <input value={details} onChange={handleInput} type="text" placeholder='Description' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                <div className="overflow-hidden"><m.p animate={{ scale: 1, left: 24 }} initial={{ scale: 0 }} className='text-xs absolute -left-[300px]' style={{ color: color ? 'red' : '#1ce783' }}>
                 {error}
                   </m.p>  </div>
                
                <input value={billValue} onChange={handleBill} type="number" placeholder='Bill Amount' className='bg-transparent border-b  border-b-1 border-b-gray-500 outline-none w-full duration-700 ease-in-out' />
                  <div className="overflow-hidden py-0  h-3"><m.p animate={{ scale: 1, left: 24, duration: 25 }} initial={{ scale: 0 }} className='text-xs absolute  -left-[300px] text-red-500' >
                 {error2}
                   </m.p>  </div>
                <label className='text-xs flex items-center' htmlFor="complete">
                  <input value={complete} defaultChecked onChange={handleComplete}  type="checkbox" name="complete" id="" />  <span className='ml-2'>Complete</span>
                   </label>
                   
              <button type="submit" className="w-full rounded-xl bg-gray-500 text-white"> Pay Bill</button>
              </form> */}
           </m.div>
          </div>
        </div>
        {/* end of spend */}
              <div className='flex items-center text-black space-x-6 lg:space-x-16 mt-16'>
                      <div onClick={props.buyAirtime} className='cursor-pointer bg-[#D1D1D1] flex items-center flex-col rounded-xl  w-[100px] lg:w-[120px] space-y-2 py-2'>
                      <i className="fa-solid fa-sim-card text-xl lg:text-2xl"></i>
                      <p className=' text-sm lg:text-base'>Buy Airtime</p>
                      </div>
                      <div className='bg-[#D1D1D1] flex items-center flex-col rounded-xl w-[100px] lg:w-[120px] space-y-2 py-2'>
                      <i className="fa-solid fa-credit-card text-xl lg:text-2xl"></i>
                      <p className=' text-sm lg:text-base'>Spend</p>
                      </div>
                      <div className='bg-[#D1D1D1] flex items-center flex-col rounded-xl w-[100px] lg:w-[120px] space-y-2 py-2'>
                      <i className="fa-solid fa-plane text-xl lg:text-2xl"></i>
                      <p className=' text-sm lg:text-base'>Int'l Transfers</p>
                      </div>
        </div>
        <div className="w-full mainApp bg-[#d1d1d1] text-left text-black rounded-2xl mt-16 px-2 md:px-12 py-6" >
          <h1 className="text-2xl font-semibold">{props.isclicked ===true ?"History":"Recents"}</h1>
          <div className="space-y-6 mt-5">
            {data.map((Data) => (props.isclicked === true?<History key={Data.id} details={Data.details} date={Data.date} image={Data.image} time={Data.time} bill={Data.bill} complete={Data.complete } />:<Billdetails key={Data.id} details={Data.details} date={Data.date} image={Data.image} time={Data.time} bill={Data.bill} complete={Data.complete } />  ))}
          </div>
        </div>
          </div>
         
    </div>
  )
}

export default MainDash