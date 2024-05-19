import { createSlice } from "@reduxjs/toolkit";

import { TurnChoices as MoveChoices, GetOpponentChoise, shouldFinishRound, DECISION, getPointsByHistory } from '../services/GameService/GameService'

const initialState = {
    history: [
        // [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
    ],
    moves: [],
    isGameActive: true,

    objs: [{
        player: 10,
        opponent: 12,
    },
    {
        player: 10,
        opponent: 12,
    }]
}

export const slice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        cooperate: (state) => {
            doMove(state, DECISION.COOPERATE);
        },

        cheate: (state) => {
            doMove(state, DECISION.CHEATE);
        },

        newGame: (state) => {
            state.history.push(getPointsByHistory(state.moves));

            state.isGameActive = true;
            state.moves = [];
        }
    }
});

export const actions = slice.actions;

export const rootReducer = slice.reducer;

function doMove(state, choise) {
    state.moves.push(new MoveChoices(choise, GetOpponentChoise(state.moves)));

    if (shouldFinishRound(0.1 * state.moves.length)) {
        state.isGameActive = false;
    }
}