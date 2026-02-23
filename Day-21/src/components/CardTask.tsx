interface PropsTask {
  taskName: string;
  status: boolean;
  onFinish: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function CardTask(props: PropsTask) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-2xl mb-3 shadow-sm border border-slate-50">
      
      <div className="flex-1 pr-4 text-left">
        <h4 className={`font-bold text-sm wrap-break-words ${props.status ? 'line-through text-slate-400' : 'text-slate-800'}`}>
          {props.taskName}
        </h4>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={props.onFinish} 
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
            props.status 
              ? 'bg-green-700 text-white hover:bg-green-800' 
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {props.status ? 'Undo' : 'Finish'}
        </button>
        
        <button 
          onClick={props.onEdit} 
          className="bg-yellow-100 text-yellow-600 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:bg-yellow-200 active:scale-95"
        >
          Edit
        </button>

        <button 
          onClick={props.onDelete} 
          className="bg-red-100 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:bg-red-200 active:scale-95"
        >
          Delete
        </button>
      </div>

    </div>
  );
}