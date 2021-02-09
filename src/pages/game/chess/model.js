export default {
  namespace: 'gameChess',

  state: {
    blackPosition: {
      blackRook: [
        [0, 7],
        [7, 7],
      ],
      blackKnight: [
        [1, 7],
        [6, 7],
      ],
      blackBishop: [
        [2, 7],
        [5, 7],
      ],
      blackQueen: [[3, 7]],
      blackKing: [[4, 7]],
      blackPawn: [
        [0, 6],
        [1, 6],
        [2, 6],
        [3, 6],
        [4, 6],
        [5, 6],
        [6, 6],
        [7, 6],
      ],
    },
    whitePosition: {
      whiteRook: [
        [0, 0],
        [7, 0],
      ],
      whiteKnight: [
        [1, 0],
        [6, 0],
      ],
      whiteBishop: [
        [2, 0],
        [5, 0],
      ],
      whiteQueen: [[3, 0]],
      whiteKing: [[4, 0]],
      whitePawn: [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
      ],
    },
  },

  effects: {
    *move({ payload }, { put }) {
      const { item, pos } = payload;
      const { type, x, y } = item;
      switch (type) {
        case 'blackBishop':
          yield put({
            type: 'moveBlackBishop',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'blackKing':
          yield put({
            type: 'moveBlackKing',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'blackKnight':
          yield put({
            type: 'moveBlackKnight',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'blackPawn':
          yield put({
            type: 'moveBlackPawn',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'blackQueen':
          yield put({
            type: 'moveBlackQueen',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'blackRook':
          yield put({
            type: 'moveBlackRook',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whiteBishop':
          yield put({
            type: 'moveWhiteBishop',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whiteKing':
          yield put({
            type: 'moveWhiteKing',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whiteKnight':
          yield put({
            type: 'moveWhiteKnight',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whitePawn':
          yield put({
            type: 'moveWhitePawn',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whiteQueen':
          yield put({
            type: 'moveWhiteQueen',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        case 'whiteRook':
          yield put({
            type: 'moveWhiteRook',
            payload: {
              oldPos: [x, y],
              newPos: pos,
            },
          });
          break;
        default:
          break;
      }
    },
  },

  reducers: {
    moveBlackBishop(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackBishop },
      } = state;
      const newPosition = blackBishop.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackBishop: newPosition,
        },
      };
    },
    moveBlackKing(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackKing },
      } = state;
      const newPosition = blackKing.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackKing: newPosition,
        },
      };
    },
    moveBlackKnight(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackKnight },
      } = state;
      const newPosition = blackKnight.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackKnight: newPosition,
        },
      };
    },
    moveBlackPawn(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackPawn },
      } = state;
      const newPosition = blackPawn.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackPawn: newPosition,
        },
      };
    },
    moveBlackQueen(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackQueen },
      } = state;
      const newPosition = blackQueen.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackQueen: newPosition,
        },
      };
    },
    moveBlackRook(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        blackPosition: { blackRook },
      } = state;
      const newPosition = blackRook.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        blackPosition: {
          ...state.blackPosition,
          blackRook: newPosition,
        },
      };
    },
    moveWhiteBishop(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whiteBishop },
      } = state;
      const newPosition = whiteBishop.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whiteBishop: newPosition,
        },
      };
    },
    moveWhiteKing(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whiteKing },
      } = state;
      const newPosition = whiteKing.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whiteKing: newPosition,
        },
      };
    },
    moveWhiteKnight(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whiteKnight },
      } = state;
      const newPosition = whiteKnight.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whiteKnight: newPosition,
        },
      };
    },
    moveWhitePawn(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whitePawn },
      } = state;
      const newPosition = whitePawn.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whitePawn: newPosition,
        },
      };
    },
    moveWhiteQueen(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whiteQueen },
      } = state;
      const newPosition = whiteQueen.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whiteQueen: newPosition,
        },
      };
    },
    moveWhiteRook(state, { payload }) {
      const { oldPos, newPos } = payload;
      const {
        whitePosition: { whiteRook },
      } = state;
      const newPosition = whiteRook.map((item) => {
        if (item[0] === oldPos[0] && item[1] === oldPos[1]) {
          return newPos;
        }
        return item;
      });
      return {
        ...state,
        whitePosition: {
          ...state.whitePosition,
          whiteRook: newPosition,
        },
      };
    },
  },
};
