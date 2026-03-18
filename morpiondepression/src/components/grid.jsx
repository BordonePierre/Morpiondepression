import { useState } from 'react';
import Croix from './croix';
import Rond from './rond';

function Grid() {


  const [texteBouton, setTexteBouton] = useState("");
  

  let indexClick = 0;

  function buttonClick() {
    

    indexClick += 1;

    console.log(indexClick);

    if(indexClick % 2){
      setTexteBouton(<Croix/>)
    }else{
      setTexteBouton(<Rond/>)
    }


    
  }



  return (

    <div className="flex flex-col items-center">

      <h1 className="font-bold text-[34px] mt-20">DEPRESSION</h1>

      <div className="flex justify-center mt-20">

      <div className="grid grid-cols-3 border-2 border-black">


        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        

        

      </div>
    </div>
  </div>
  );
}

export default Grid;