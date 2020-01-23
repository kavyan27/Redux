import { REMOVE_USER, CLEAR_USERS, ADD_USER } from "../actions/app-action";

export interface AppReducerState {
  users: any[];
  lastUpdate: Date;
}

const initialState: AppReducerState = {
  users: [],
  lastUpdate: null
};

export function reducer(state = initialState, action): AppReducerState {
  switch (action.type) {
    case ADD_USER:
      const newUser = { id: state.users.length + 1, title: action.title };
      return Object.assign({}, state, {
        users: state.users.concat(newUser),
        lastUpdate: new Date()
      });
    case REMOVE_USER:
      return Object.assign({}, state, {
        users: state.users.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
    case CLEAR_USERS:
      return Object.assign({}, state, {
        users: [],
        lastUpdate: new Date()
      });
  }
  return state;
}
