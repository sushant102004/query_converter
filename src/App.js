import React, { useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState('')

  return (
   <>
    {/* App Bar */}
    <div className="h-14 w-screen flex justify-between items-center pl-12 pr-12">
        <p className="text-2xl text-slate-800 font-bold">Data Converter</p>

        <div className="menu flex space-x-6">
            <p className="text-sm text-slate-900">Home</p>
            <p className="text-sm text-slate-900">About</p>
            <p className="text-sm text-slate-900">Contacts</p>

        </div>
    </div>


    {/* Hero Section */}
    <div className="main-container h-screen flex">
        <div className="leftBox w-screen h-4/5 bg-pink-200">
            <p className="text-center font-bold text-4xl text-slate-900 pt-10 tracking-wider">Website Title Goes Here</p>
        
            {/* Input & Output Boxes */}
            <div className="flex justify-center space-x-6 pt-10">
            <input
                    className="focus:outline-0 bg-slate-50 border-2 rounded-md w-96 h-64 p-2 mt-6"
                    placeholder="Input Data"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                ></input>
            
            <input
                    className="focus:outline-0 bg-slate-50 border-2 rounded-md w-96 h-64 p-2 mt-6"
                    placeholder="Output Data"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                ></input>
            </div>

            <div className="flex justify-center mt-5">
                    <div className="h-10 w-24 bg-blue-800 rounded-md flex text-white items-center justify-center font-bold">Generate</div>
            </div>

        </div>
    </div>
   </>  
  );
}

export default App;
