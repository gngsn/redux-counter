// reducers : 스토어의 기본상태와, 상태의 업데이트를 담당하는 리듀서 파일들 저장

import { combineReducers} from 'redux';
import number from './number';
import color from './color';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;

