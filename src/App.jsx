import React, { useState, useEffect } from 'react';
import './App.css';
import loadingAset from './assets/images/loading.jpg';
import Navbar from './components/navbar';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        setTimeout(() => {
          setIsLoading(true);
        }, 3000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    }
  }, []);

  
  return isLoading ?
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p className="text-xs font-black animate-bounce">Berita sedang Loading...</p>
      <img className="w-3/4 animate-pulse" src={loadingAset} alt="Berita loading" />
    </div> :
     <Navbar title="Berita hari ini" btnBg="bg-fire-400 hover:bg-fire-500" menuBg="bg-white" menuBgTxt="bg-fire-500 text-white font-medium" menuTxtInactive="text-fire-900" btnTxt="text-md font-medium text-white" padding="px-3 py-3" iconMargin="mr-2"  />
}

export default App;