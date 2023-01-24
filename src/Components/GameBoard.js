import React, { useEffect, useState } from 'react';
import GameCircle from './GameCircle';
import '../style.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { isWinner } from '../helper';
import { isDraw } from '../helper';

const Player_0 = 0;
const Player_1 = 1;
const Player_2 = 2;
let winPlayer;

//const GAME_STATE_IDLE = 0;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(Player_0));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);

    console.log(gameBoard);

    useEffect(() => {
        initGame();
    },[]);

    const initGame = () => {
        console.log('init game');
        setGameBoard(Array(16).fill(Player_0));
        setCurrentPlayer(Player_1);
        setGameState(GAME_STATE_PLAYING);
    }

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

        if(gameBoard[id] !== Player_0) return;
        if(gameState !== GAME_STATE_PLAYING) return;
        
        if(isWinner(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_WIN);
            winPlayer = currentPlayer;
        }
        if(isDraw(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            winPlayer = Player_0;
        }
        

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
        <Header gameState={gameState} player={currentPlayer} winPlayer={winPlayer}/>
        <div className='gameBoard'>
            {initBoard()}
        </div>
        <Footer onClickEvent={initGame}/>
        </>
    ) 
}

export default GameBoard;