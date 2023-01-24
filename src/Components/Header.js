import React from 'react'
//const GAME_STATE_IDLE = 0;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;

export const Header = ({gameState, player, winPlayer}) => {
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div>Player {player} turn</div> 

            case GAME_STATE_WIN:
                return <div>Player {winPlayer} Wins!</div>

            case GAME_STATE_DRAW:
                return <div>Game is Draw!</div>

            // case GAME_STATE_IDLE:
            //     return <div>Player 1 turn</div>
            default:
                break;
        }
    }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}
