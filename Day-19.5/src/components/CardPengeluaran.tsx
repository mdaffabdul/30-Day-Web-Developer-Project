interface PropsPengeluaran {
  NamaBarang: string;
  JumlahPengeluaran: number;
}

export default function CardPengeluaran(props: PropsPengeluaran) {
    
  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl mb-3 shadow-sm border border-slate-50">
      
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-2">
          <h4 className="font-bold text-slate-800 text-sm">{props.NamaBarang}</h4>
          <span className="text-[10px] text-slate-400">Baru saja</span>
        </div>
        <p className="text-slate-600 text-sm mt-1 leading-relaxed">
          Rp.{props.JumlahPengeluaran}
        </p>
      </div>
    </div>
  );
}