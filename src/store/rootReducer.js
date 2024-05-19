import { createSlice } from "@reduxjs/toolkit";

import { TurnChoices, GetOpponentChoise, shouldFinishRound, DECISION, getPointsByHistory } from '../services/GameService/GameService'

const initialState = {
    history: [],
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
            doTurn(state, DECISION.COOPERATE);
        },

        cheate: (state) => {
            doTurn(state, DECISION.CHEATE);
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

function doTurn(state, choise) {
    state.moves.push(new TurnChoices(choise, GetOpponentChoise(state.moves)));

    if (shouldFinishRound(0.1 * state.moves.length)) {
        state.isGameActive = false;
    }
}