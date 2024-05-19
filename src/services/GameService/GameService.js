import { createContext } from "react";

export const GameContext = createContext(null);

export const DECISION = {
    COOPERATE: 1,
    CHEATE: 2,
}

const roundsHistory = [[10, 3]];

export function TurnChoices(player, opponent) {
    this.result = { player, opponent }
}

export function GetOpponentChoise(history = []) {

    if (!history?.length) {
        return DECISION.COOPERATE;
    }

    return history[history.length - 1].result.player;
}

export function shouldFinishRound(posibility) {
    return Math.random() <= posibility;
}

export function getPointsByHistory(history) {
    const playerPoints = history.reduce((a, v) => {
        return a
            - (v.result.player == DECISION.COOPERATE ? 2 : 0)
            + (v.result.opponent == DECISION.COOPERATE ? 5 : 0);
    }, 0);

    const opponentPoints = history.reduce((a, v) => {
        return a
            - (v.result.opponent == DECISION.COOPERATE ? 2 : 0)
            + (v.result.player == DECISION.COOPERATE ? 5 : 0);
    }, 0);

    return [playerPoints, opponentPoints]
}

export function saveResultToHistory(round) {
    roundsHistory.push(round);
}

export function getResultsHistory() {
    return roundsHistory;
}