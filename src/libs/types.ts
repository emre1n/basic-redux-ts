export interface CounterState {
  counter: number;
  showCounter: boolean;
}

export interface CounterAction {
  type: string;
  amount: number;
}
