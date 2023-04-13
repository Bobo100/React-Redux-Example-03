import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoState, TodoStateList, initialToDoState } from "../state/stateType";
import _ from "lodash";
import { RootState } from "../store/store";


const findIndex = (toDoList: TodoState[], id: string) => {
    // const index = toDoList.findIndex((toDo: TodoState) => toDo.id === id);
    // 使用lodash的findIndex方法
    const index = _.findIndex(toDoList, (toDo: TodoState) => toDo.id === id);
    return index;
}

function addToDo(state: TodoStateList, action: PayloadAction<TodoState>) {
    // state.toDoList = [...state.toDoList, action.payload];
    // return state;
    // 使用lodash的concat方法
    const newToDoList = _.concat(state.toDoList, action.payload);
    return { ...state, toDoList: newToDoList };
}

function deleteToDo(state: TodoStateList, action: PayloadAction<string>) {
    const index = findIndex(state.toDoList, action.payload);
    state.toDoList.splice(index, 1);
    return state;
}

function toggleToDo(state: TodoStateList, action: PayloadAction<string>) {
    const index = findIndex(state.toDoList, action.payload);
    state.toDoList[index].isDone = !state.toDoList[index].isDone;
    return state;
}

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: initialToDoState,
    reducers: {
        ADD_TODO: addToDo,
        DELETE_TODO: deleteToDo,
        TOGGLE_TODO: toggleToDo,
    },
});

export const { ADD_TODO, DELETE_TODO, TOGGLE_TODO } = toDoSlice.actions;

export const selectToDoList = (state: RootState): TodoState[] => state.toDoReducer.toDoList;

export default toDoSlice.reducer;