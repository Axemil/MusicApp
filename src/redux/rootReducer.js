import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { musicReducer } from './musicReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    music: musicReducer
})