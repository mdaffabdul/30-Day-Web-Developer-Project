import { useState } from "react";
import CardPengeluaran from "./components/CardPengeluaran";

interface Pengeluaran {
  NamaBarang: string;
  JumlahPengeluaran: number;
}

export default function App() {
  const [listPengeluaran, setListPengeluaran] = useState<Pengeluaran[]>([]);
  const [inputNamaBarang, setInputNama] = useState("");
  const [inputJumlahPengeluaran, setInputPengeluaran] = useState("");

  const totalHarga = listPengeluaran.reduce((acc, item) => acc + item.JumlahPengeluaran, 0);

  const tambahPengeluaran = () => {
    if (inputNamaBarang === "" || inputJumlahPengeluaran === "") {
      alert("isi kedua input!");
      return;
    }
    const pengeluaranBaru: Pengeluaran = {
      NamaBarang: inputNamaBarang,
      JumlahPengeluaran: Number(inputJumlahPengeluaran),
    };

    setListPengeluaran([pengeluaranBaru, ...listPengeluaran]);

    setInputNama("");
    setInputPengeluaran("");
  };

  return (
    <div className="flex bg-slate-100 min-h-screen justify-center items-start py-10 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <h1 className="text-4xl font-bold text-center pt-12 pb-12">Dompetku</h1>
        <div className="pl-6 pb-6">
          <h1 className="text-xl font-semibold">Jumlah Pengeluaran</h1>
          <p className="text-3xl font-bold text-slate-800">
          Rp {totalHarga.toLocaleString('id-ID')}
          </p>
        </div>
        <h2 className="border-t text-lg font-semibold text-slate-700 mb-4 pl-6 pt-6">Tambah Pengeluaran</h2>
         <div className="flex flex-col gap-3 pl-6 pr-6 pb-6">
              <textarea 
                placeholder="Nama Pengeluaran"
                value={inputNamaBarang}
                onChange={(e) => setInputNama(e.target.value) } 
                className="w-full border border-slate-200 rounded-xl pt-4 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              />
              <input 
                placeholder="Jumlah Pengeluaran"
                value={inputJumlahPengeluaran}
                onChange={(e) => setInputPengeluaran(e.target.value)} 
                className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              />
              <button onClick={tambahPengeluaran} className="w-full bg-black hover:bg-gray-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-gray-500 transition-all active:scale-95">
                Catat Pengeluaran
              </button>
            </div>

          <div className="bg-slate-50 p-6">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Pengeluaran Terbaru</p>
          {listPengeluaran.map((item, index) => (
            <CardPengeluaran 
              key={index}
              NamaBarang={item.NamaBarang}
              JumlahPengeluaran={item.JumlahPengeluaran}
            />
          ))}
        </div>
      </div>
    </div>
  )
}