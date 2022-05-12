import React, { useState } from "react";
import './board.css';

const GameBoard = () => {//Call the useState hook
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const emptyCells =
        [
            '', '', '',
            '', '', '',
            '', '', '',
        ];
    const [history] = useState([emptyCells]);

    //Create a function that figures our who is the winner
    const whoWon = (squares) => {//Create an object for all possible winning modes
        let winnerFound = false;
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
        //Run each variation and compare the patterns
        for (let variation in variations) {
            variations[variation].forEach((pattern) => {
                if
                    (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') { }//Do nothing
                else if
                    (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
                    setWinner(squares[pattern[0]]);
                    winnerFound = true;
                }
            });
        }

        if (!winnerFound) {
            setWinner(false);
        }
    };
    //Create an arrow function that handles the clicks on the cells
    const HandleClick = (num) => {   //Set a condition that will define whose turn it is
        if (cells[num] !== '') {//Avoid user(s) from double clicking the same cell and changing their playing figure
            alert('Already clicked');
            return;
        }
        let squares = [...cells];
        if (turn === 'x') {
            squares[num] = 'x'
            setTurn('o');
        }
        else {
            squares[num] = 'o'
            setTurn('x');
        }
        whoWon(squares);
        setCells(squares);
        history.push(squares);
    };

    const goBack = () => {
        console.log(history)
        if (history.length > 1) {
            history.pop();
            setCells(history[history.length - 1]);
            whoWon(history[history.length - 1]);
            if (turn == 'x') {
                setTurn('o');
            } else if (turn == 'o') {
                setTurn('x');
            }
        }
    }

    //Create a function that resets the board, and runs a new game
    const handlePlayagain = () => {
        setTurn(true)
        setCells(Array(9).fill(''))
        setWinner(false);
        setTurn("x")
    }

    //Pass num as a prop
    const CellComp = ({ num }) => {   //Return the relevant variable in a created event
        return (<td onClick={() => HandleClick(num)}>{cells[num]}</td>)
    }

    return (<div id="container">
        <h1>Tic Tac Toe</h1>
        <div className="">
            <h4>Now playing: {turn}</h4>
        </div>
        <table>
            <div className="turn"></div>
            {/* Create cell components and pass the props */}
            <tr>
                <CellComp num={0} className='cell' />
                <CellComp num={1} className='cell' />
                <CellComp num={2} className='cell' />
            </tr>
            <tr>
                <CellComp num={3} className='cell' />
                <CellComp num={4} className='cell' />
                <CellComp num={5} className='cell' />
            </tr>
            <tr>
                <CellComp num={6} className='cell' />
                <CellComp num={7} className='cell' />
                <CellComp num={8} className='cell' />
            </tr>
        </table>
        {/* What happens when somebody wins? */}
        {winner && (<><p>{winner} is the winner!</p></>)}
        <button className='playAgain' onClick={handlePlayagain}>Play again!</button> &nbsp;
        <button onClick={goBack}>Go Back</button>

    </div>)
}

export default GameBoard;