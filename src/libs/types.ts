export interface CounterState {
  counter: number;
  showCounter: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

export interface CounterAction {
  type: string;
  amount: number;
}

export interface RootState {
  counter: CounterState;
  auth: AuthState;
}
