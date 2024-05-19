export const DECISION = {
    COOPERATE: 1,
    CHEATE: 2,
}


export function TurnChoices(player, opponent) {
    return { player, opponent }
}

export function GetOpponentChoise(history = []) {

    if (!history?.length) {
        return DECISION.COOPERATE;
    }

    return history[history.length - 1].player;
}

export function shouldFinishRound(posibility) {
    return Math.random() <= posibility;
}

export function getPointsByHistory(history) {
    const playerPoints = history.reduce((a, v) => {
        return a
            - (v.player == DECISION.COOPERATE ? 2 : 0)
            + (v.opponent == DECISION.COOPERATE ? 5 : 0);
    }, 0);

    const opponentPoints = history.reduce((a, v) => {
        return a
            - (v.opponent == DECISION.COOPERATE ? 2 : 0)
            + (v.player == DECISION.COOPERATE ? 5 : 0);
    }, 0);

    return [playerPoints, opponentPoints]
}