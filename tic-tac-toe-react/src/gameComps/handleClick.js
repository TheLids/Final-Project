    import whoWon from './board';
    import history from './board';
    import cells from './board';
    import setCells from './board';
    import turn from './board';
    import setTurn from './board';


    //Create an arrow function that handles the clicks on the cells
    const handleClick = (num) => {   //Set a condition that will define whose turn it is
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

        history.current.push(squares); 
        console.log(history.current);
        
    };

export default handleClick;