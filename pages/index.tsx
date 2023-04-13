import Head from "next/head";
import Layout from '../components/layout';
import { useAppDispatch, useAppSelector } from "../components/redux/hook/hook";
import { useMemo, useState } from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, selectToDoList } from "../components/redux/slice/toDoSlice";
import { TodoState } from "../components/redux/state/stateType";
import uuid from "react-uuid";
function HomePage() {

    const [inputValue, setInputValue] = useState<string>("")
    const toDoList = useAppSelector(selectToDoList)

    const dispatch = useAppDispatch()

    const handleAddToDo = () => {
        if (inputValue === "") return;
        dispatch(ADD_TODO({ id: uuid(), toDoItem: inputValue, isDone: false }))
    }

    const handleDeleteToDo = (id: string) => {
        dispatch(DELETE_TODO(id))
    }

    const handleToggleToDo = (id: string) => {
        dispatch(TOGGLE_TODO(id))
    }


    const [filter, setFilter] = useState("all")
    const filteredTodoList = useMemo(() => {
        switch (filter) {
            case "active":
                return toDoList.filter((item) => !item.isDone);
            case "completed":
                return toDoList.filter((item) => item.isDone);
            default:
                return toDoList;
        }
    }, [filter, toDoList]);

    return (
        <Layout>
            <Head>
                <title>新版Redux</title>
            </Head>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-3">新版Redux用法 (優化程式碼)</h1>
                <h2 className="text-2xl mt-3">範例一</h2>


                <div className="border border-title">
                    {/* {toDoList.map((toDo: TodoState) => {
                        return (
                            <div key={toDo.id} className="flex justify-between items-center p-2">
                                <div className="flex items-center">
                                    <input type="checkbox" checked={toDo.isDone} onChange={() => handleToggleToDo(toDo.id)} placeholder="check" />
                                    <p className="ml-2">{toDo.toDoItem}</p>
                                </div>
                                <div>
                                    <button className="p-2 m-2" onClick={() => handleDeleteToDo(toDo.id)}>刪除</button>
                                </div>
                            </div>
                        )
                    })} */}
                    <button className="p-3 m-3" onClick={() => setFilter("all")}>All</button>
                    <button className="p-3 m-3" onClick={() => setFilter("active")}>Active</button>
                    <button className="p-3 m-3" onClick={() => setFilter("completed")}>Completed</button>

                    {filteredTodoList.map((toDo: TodoState) => {
                        return (
                            <div key={toDo.id} className="flex justify-between items-center p-2">
                                <div className="flex items-center">
                                    <input type="checkbox" checked={toDo.isDone} onChange={() => handleToggleToDo(toDo.id)} placeholder="check" />
                                    <p className="ml-2">{toDo.toDoItem}</p>
                                </div>
                                <div>
                                    <button className="p-2 m-2" onClick={() => handleDeleteToDo(toDo.id)}>刪除</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <input className="p-2 m-2" type="text" placeholder="輸入代辦事項" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className="p-2 m-2" onClick={() => handleAddToDo()}>新增</button>
                </div>

                <a href="https://react-redux-neon.vercel.app/reduxNew" rel="noopener" target="_blank" className="border p-2 rounded border-title hover:bg-title hover:text-black mt-5">回去學習~</a>
            </div>
        </Layout>
    )
}

export default HomePage