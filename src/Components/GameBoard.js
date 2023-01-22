import React, { useState } from 'react';
import GameCircle from './GameCircle';
import '../style.css';
import { Header } from './Header';
import { Footer } from './Footer';

const Player_0 = 0;
const Player_1 = 1;
const Player_2 = 2;

const GAME_STATE_START = 0;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(Player_0));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);
    const [gameState, setGameState] = useState(GAME_STATE_START);

    console.log(gameBoard);

    const initBoard = () => {
        // setCurrentPlayer(Player_1);
        // setGameBoard(Array(16).fill(Player_0));

        const arr = [];
        for(let i=0;i<16;i++){
            arr.push(renderCircle(i));
        }
        return arr;
    }

    const circleClick = (id) =>{
        //alert('circle clicked '+id);
        
        // const board = [...gameBoard];
        // board[id] = currentPlayer;
        // setGameBoard(board);

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);

        console.log(gameBoard);
    }

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClick={circleClick} />
    }
    return(
        <>
        <Header player={currentPlayer}/>
        <div className='gameBoard'>
            {initBoard()}
        </div>
        <Footer/>
        </>
    ) 
}

export default GameBoard;