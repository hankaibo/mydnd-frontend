import Chess from 'chess.js';

export default {
  namespace: 'gameChess',

  state: {
    chess: new Chess(), // chess.js 实例
    board: [], // chess.js 的board
    history: [], // chess.js 历史步骤
    canDrop: false, // 是否可以拖放
  },

  effects: {
    *init(_, { put, select }) {
      const chess = yield select((state) => state.gameChess.chess);
      const board = chess.board();
      yield put({
        type: 'saveBoard',
        payload: {
          board,
        },
      });
    },
    *move({ payload }, { put, select }) {
      const { item, pos } = payload;
      const chess = yield select((state) => state.gameChess.chess);
      // 使用chess.js 的方法
      chess.move({ from: item.pos, to: pos });
      const board = chess.board();
      yield put({
        type: 'saveBoard',
        payload: {
          board,
        },
      });
    },
  },

  reducers: {
    saveBoard(state, { payload }) {
      const { board } = payload;
      return {
        ...state,
        board,
      };
    },
  },
};
