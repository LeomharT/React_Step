import { createStore } from 'redux';
import { PersonInfo, CurrentStep } from './reducer';


const PersonInfoStore = createStore(PersonInfo);

const Current = createStore(CurrentStep);

export { PersonInfoStore, Current };
