import React, { useState } from "react";
import './board.css';

const GameBoard = () =>
{//Call the useState hook
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    //usestate variable = null by default (empty parentheses)
    const [winner, setWinner, noWinner] = useState();

    const whoWon = (squares) =>
    {
       let variations = {
                    row: [
                            [0, 1, 2],
                            [3, 4, 5],
                            [6, 7, 8],
                          ],
                    column: [
                              [0, 3, 6],
                              [1, 4, 7],
                              [2, 5, 8],
                            ],
                    diagonal: [
                                [0, 4, 8],
                                [2, 4, 6],
                              ], 
                  };
        for (let variation in variations)
        {
            variations [variation].forEach((pattern) =>
            {   
                if
                (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '' )
            {}//Do nothing
                else if
                (squares[pattern[0]] === squares [pattern[1]] && squares[pattern[1]] === squares[pattern[2]])
            {
                setWinner(squares[pattern[0]]);
            }
            //     else
            // {
            //     noWinner(console.log('Nobody won :('))
            // }
        });
    }
};
//Create an arrow function that handles the clicks on the cells
    const handleClick = (num) =>
    {   //Set a condotion that will define whose turn it is
        if(cells[num] !== '')
        {//Avoid user(s) fron double clicking the same cell and changing their playing figure
           alert('Already clicked');
           return;
        }
        let squares = [...cells];
        if (turn === 'x')
        {  
           squares [num] = 'x'
           setTurn('o');
        }
        else
        {   
            squares [num] = 'o'
            setTurn('x');
        }
        whoWon(squares);
        setCells(squares);
        noWinner(squares);
    };

    const handlePlayagain = () =>
    {
        setTurn(true)
        setCells(Array(9).fill(''))
    }
//Pass num as a prop
    const CellComp = ({ num }) =>
    {   //Return the relevant variable in a created event with 
        return(<td onClick={()=>handleClick(num)}>{cells[num]}</td>)
    }
    return (<div id="container">
              <h1>Tic Tac Toe</h1>
              <table>
                  Now playing: {turn}
                  {/* Create cell components and pass the props */}
                  <tr>
                      <CellComp num={0}/>
                      <CellComp num={1}/>
                      <CellComp num={2}/>
                  </tr>
                  <tr>
                      <CellComp num={3}/>
                      <CellComp num={4}/>
                      <CellComp num={5}/>
                  </tr>
                  <tr>
                      <CellComp num={6}/>
                      <CellComp num={7}/>
                      <CellComp num={8}/>
                  </tr>
              </table>
              {/* What happens when somebody wins? */}
              {winner && (<><p>{winner} is the winner</p></>)}
              <button className='playAgain' onClick={handlePlayagain}>Play again!</button>
            </div>)
}

export default GameBoard;