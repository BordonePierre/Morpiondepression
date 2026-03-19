import { useState } from 'react';
import Croix from './croix';
import Rond from './rond';

function Grid() {
  const [cases, setCases] = useState(Array(9).fill(null));
  const [estCroix, setEstCroix] = useState(true);
  const [joueurX, setJoueurX] = useState(0);
  const [joueurO, setJoueurO] = useState(0);

  const COMBINAISONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function verifierGagnant(cases) {
    for (let [a, b, c] of COMBINAISONS) {
      if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
        return cases[a];
      }
    }
    return null;
  }

  function renderCase(index) {
    if (cases[index] === "X") return <Croix />;
    if (cases[index] === "O") return <Rond />;
    return null;
  }

  function buttonClick(index) {
    if (cases[index] !== null) return;
    if (verifierGagnant(cases)) return;

    const nouvellesCases = [...cases];
    nouvellesCases[index] = estCroix ? "X" : "O";
    setCases(nouvellesCases);
    setEstCroix(!estCroix);

    const gagnant = verifierGagnant(nouvellesCases);
    if (gagnant === "X") {
      alert("X a gagné !");
      setJoueurX(joueurX + 1);
    } else if (gagnant === "O") {
      alert("O a gagné !");
      setJoueurO(joueurO + 1);
    } else if (nouvellesCases.every(c => c !== null)) {
      alert("Égalité !");
    }
  }

  function reset(){
    setCases(Array(9).fill(null));
    setEstCroix(true);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[34px] mt-20">MORPION</h1>
      <div className='flex flex-row gap-8 pt-10'>
        <h2>Joueur X : {joueurX}</h2>
        <h2>Joueur O : {joueurO}</h2>
      </div>

      <button className='border-3 px-3 py-1 border-blue-800 mt-5 rounded-lg cursor-pointer hover:text-white hover:bg-blue-800' onClick={reset}>Reset </button>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-3 border-2 border-black">
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(0)}>{renderCase(0)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(1)}>{renderCase(1)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(2)}>{renderCase(2)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(3)}>{renderCase(3)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(4)}>{renderCase(4)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(5)}>{renderCase(5)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(6)}>{renderCase(6)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(7)}>{renderCase(7)}</button>
          <button className="w-24 h-24 border-2 border-black cursor-pointer hover:bg-amber-300" onClick={() => buttonClick(8)}>{renderCase(8)}</button>
        </div>
      </div>
    </div>
  );
}

export default Grid;