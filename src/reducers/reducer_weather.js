import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action Received', action);
    switch (action.type) {
        case FETCH_WEATHER: 
            // returning a new version of state, not mutating state
            return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [city, [city, city ]]
    }
    return state;
}
