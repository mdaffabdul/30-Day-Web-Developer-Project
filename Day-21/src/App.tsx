import { useState } from "react";
import CardTask from "./components/CardTask"

interface Task {
  index: number
  taskName: string
  status: boolean
}

export default function App() {
  const[listTask, setListTask] = useState<Task[]>([]);
  const[inputTask, setInputTask] = useState("");
  const[changeStatus, setChangeStatus] = useState(false);
  const[indexNum, setIndexNum] = useState(1);
  const [filterAktif, setFilterAktif] = useState("All");

  const displayTask = listTask.filter((item) => {
    if (filterAktif === "Pending") return item.status === false;
    if (filterAktif === "Completed") return item.status === true;
    return true;
  });

  const totalTask = listTask.length;
  const totalPending = listTask.filter((item) => item.status === false).length;
  const totalCompleted = listTask.filter((item) => item.status === true).length;

  const addTask = () => {
    if (inputTask === "") {
      alert("Harap isi task nya!");
      return
    }
    const newTask = {
      index: indexNum,
      taskName: inputTask,
      status: changeStatus
    }

    setListTask([newTask, ...listTask])
    
    setIndexNum(indexNum + 1);
    setInputTask("");
    setChangeStatus(false);
  }

  const handleDelete = (indexTarget: number) => {

    const newList = listTask.filter((item) => item.index !== indexTarget);
    
    setListTask(newList);
  };


  const handleFinish = (indexTarget: number) => {
    const newList = listTask.map((item) => {
      if (item.index === indexTarget) {
        return { ...item, status: !item.status };
      }
      return item;
    });

    setListTask(newList);
  };

  const handleEdit = (indexTarget: number) => {
  const oldTask = listTask.find((item) => item.index === indexTarget);

  if (oldTask) {
    const newName = prompt("Edit your task:", oldTask.taskName);

    if (newName !== null && newName.trim() !== "") {
      
      const newList = listTask.map((item) => {
        if (item.index === indexTarget) {
          return { ...item, taskName: newName };
        }
        return item;
      });

      setListTask(newList);
    }
  }
};

  return (
    <div className="bg-gray-300 font-sans flex min-h-screen justify-center items-start py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <h1 className="text-4xl font-bold text-center pt-12">To-Do-List</h1>
        <h1 className="text-sm text-gray-400 text-center pb-12">Organize, Filter, and Accomplish.</h1>
        <div className="ml-6 mr-6 mb-6">
          <label>Task Name</label> <br/>
          <textarea 
          placeholder="What do you need to do?" 
          value={inputTask} onChange={(e) => setInputTask(e.target.value) }
          className="w-full border border-slate-200 rounded-xl pt-4 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mt-2" ></textarea>
          <button onClick={addTask} className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 rounded-xl shadow-lg shadow-gray-500 transition-all active:scale-95">
                + Add Task
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mr-6 ml-6 mb-4">
          <div className="text-center bg-gray-300 pt-4 pb-4 pr-6 pl-6 rounded-lg">
            <h1 className="text-sm font-semibold text-gray-600">Total Task</h1>
            <p className="text-2xl font-bold text-slate-800">
            {totalTask}
            </p>
          </div>

          <div className="text-center bg-yellow-100 pt-4 pb-4 pr-6 pl-6 rounded-lg">
            <h1 className="text-sm font-semibold text-yellow-600">Pending</h1>
            <p className="text-2xl font-bold text-slate-800">
            {totalPending}
            </p>
          </div>

          <div className="text-center bg-green-200 pt-4 pb-4 pr-6 pl-6 rounded-lg">
            <h1 className="text-sm font-semibold text-green-700">Completed</h1>
            <p className="text-2xl font-bold text-slate-800">
            {totalCompleted}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mr-6 ml-6 mb-2">
          <button 
            onClick={() => setFilterAktif("All")}
            className={`w-full font-semibold py-3 rounded-lg transition-all ${filterAktif === "All" ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-600 hover:bg-gray-500 hover:text-white"}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilterAktif("Pending")}
            className={`w-full font-semibold py-3 rounded-lg transition-all ${filterAktif === "Pending" ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-600 hover:bg-gray-500 hover:text-white"}`}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilterAktif("Completed")}
            className={`w-full font-semibold py-3 rounded-lg transition-all ${filterAktif === "Completed" ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-600 hover:bg-gray-500 hover:text-white"}`}
          >
            Completed
          </button>     
        </div>

        <div className="p-6">
          {displayTask.map((item, index) => (
            <CardTask 
              key={index}
              taskName={item.taskName}
              status={item.status}
              onDelete={() => handleDelete(item.index)}
              onFinish={() => handleFinish(item.index)}
              onEdit={() => handleEdit(item.index)}
            />
          ))}
        </div>
        
      </div>

    </div>
  )

}