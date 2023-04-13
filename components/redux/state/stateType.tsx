// components/redux/state/stateType.tsx
export type TodoState = {
    id: string;
    toDoItem: string;
    isDone: boolean;
}

export type TodoStateList = {
    toDoList: TodoState[];
}

export const initialToDoState: TodoStateList = {
    toDoList: [
        { id: "0", toDoItem: "Learn React", isDone: true },
        { id: "1", toDoItem: "Learn Redux", isDone: false },
        { id: "2", toDoItem: "Learn Redux-Toolkit", isDone: false },
    ],
}
