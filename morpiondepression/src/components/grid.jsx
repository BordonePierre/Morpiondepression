import { useState } from 'react';

function Grid() {


  const [texteBouton, setTexteBouton] = useState("");

  function buttonClick() {
    setTexteBouton("❌");
  }

  return (

    <div className="flex flex-col items-center">

      <h1 className="font-bold text-[34px] mt-20">MORPION</h1>

      <div className="flex justify-center mt-20">

      <div className="grid grid-cols-3 border-2 border-black">


        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={buttonClick}>{texteBouton}</button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>

        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>

        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>
        <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300"></button>

        

      </div>
    </div>
  </div>
  );
}

export default Grid;