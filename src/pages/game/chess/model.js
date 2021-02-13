import Chess from 'chess.js';

export default {
  namespace: 'gameChess',

  state: {
    chess: new Chess(), // chess.js 实例
    board: [], // chess.js 的board
    history: [], // chess.js 历史步骤
    gameOver: false,
    turn: 'w',
    moves: [],
    showNotation: true,
  },

  effects: {
    *initChess(_, { put, select }) {
      const chess = yield select((state) => state.gameChess.chess);
      const board = chess.board();
      const turn = chess.turn();
      yield put({
        type: 'saveChess',
        payload: {
          board,
          turn,
        },
      });
    },
    *move({ payload }, { put, select }) {
      const { item, pos } = payload;
      const chess = yield select((state) => state.gameChess.chess);
      // 使用chess.js 的方法
      chess.move({ from: item.pos, to: pos });
      const board = chess.board();
      const turn = chess.turn();
      yield put({
        type: 'saveChess',
        payload: {
          board,
          turn,
        },
      });
    },
  },

  reducers: {
    saveChess(state, { payload }) {
      const { board, turn } = payload;
      return {
        ...state,
        board,
        turn,
      };
    },
    updateMoves(state, { payload }) {
      const { chess } = state;
      const { pos } = payload;

      const moves = chess.moves({ square: pos });

      return {
        ...state,
        moves,
      };
    },
    clearMoves(state) {
      return {
        ...state,
        moves: [],
      };
    },
  },
};
