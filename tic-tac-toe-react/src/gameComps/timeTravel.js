import history from '../board';
import setCells from '../board';
import setTurn from '../board';
import turn from '../board';


const GoBack = () => {
    if (history.current.length > 0) {
        setCells(history.current.pop());
        
        if(turn == 'x') {
            setTurn('o');
        } else if (turn == 'o'){
            setTurn('x');
        }
    }
    
}

export default GoBack;