import { COLORS } from "../colors"

export enum Stores {
  BOARDSTATE
}


export interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  0: T;
  length: L;
}

export enum Conformity {
  WRONG,
  BADPLACE,
  OK
}


export type CurrentScore = {
  [Conformity.OK]: number,
  [Conformity.BADPLACE]: number,
  [Conformity.WRONG]: number
}

export type CurrentScoreTable = FixedLengthArray<CurrentScore | undefined, 9>

export type BoardState = {
  activeRow: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  activeCol: 0 | 1 | 2 | 3 | 4 | undefined
  data: [
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,

    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>,
    FixedLengthArray<COLORS | undefined, 5>
  ],
  actionPanel: FixedLengthArray<COLORS | undefined, 5>,
  result: FixedLengthArray<COLORS | undefined, 5>,
  currentScore: FixedLengthArray<CurrentScore | undefined, 10>
}




export interface IStoreContent {
  [Stores.BOARDSTATE]: BoardState
}

export type IStoreSet = <T, K extends keyof IStore>(key: K, value: T) => void

export interface IStore extends IStoreContent {
  set<T, K extends keyof IStore>(key: K, value: Partial<IStore[K]>): void
}

export interface IContext {
  context: IStore
}

export const store: IStoreContent = {

  [Stores.BOARDSTATE]: {
    activeRow: 0,
    data: [
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ],
    actionPanel: [undefined, undefined, undefined, undefined, undefined],
    result: [undefined, undefined, undefined, undefined, undefined],
    activeCol: undefined,
    currentScore: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  },
}
