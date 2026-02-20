import { useState } from "react";
import CardKomentar from './components/CardKomentar';

export default function App() {
  const [listUlasan, setListUlasan] = useState([
    { nama: "Daffa", pesan: "Rendangnya mantap banget!"}
  ]);

  const [inputNama, setInputNama] = useState("");
  const [inputPesan, setInputPesan] = useState("");

  const tambahUlasan = () => {
    if (inputNama === "" || inputPesan === "") {
      alert("Isi dulu nama dan pesannya ya!");
      return;
    }
  
  const ulasanBaru = {
      nama: inputNama,
      pesan: inputPesan,
    };
  
  setListUlasan([ulasanBaru, ...listUlasan]);

  setInputNama("");
  setInputPesan("");
  }
  return (
    <div className="flex bg-slate-100 min-h-screen justify-center items-start py-10 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="relative h-60">
          <img 
            className="w-full h-full object-cover" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sebuah_restoran_Padang_di_Jakarta.jpg/1200px-Sebuah_restoran_Padang_di_Jakarta.jpg" 
            alt="resto" 
          />
          <div className="absolute bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent w-full p-6"> 
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-slate-800">Resto Trio Minang</h1>
          <p className="text-slate-500 text-sm mt-1">📍 Jl. Raya Bogor • Masakan Padang • ⭐ 4.8</p>
          
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Berikan Ulasan</h2>
            
            <div className="flex flex-col gap-3">
              <textarea 
                placeholder="Nama"
                value={inputNama}
                onChange={(e) => setInputNama(e.target.value)} 
                className="w-full border border-slate-200 rounded-xl pt-4 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <textarea 
                placeholder="Bagaimana rasa rendangnya hari ini?"
                value={inputPesan}
                onChange={(e) => setInputPesan(e.target.value)} 
                className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                rows={3}
              />
              <button onClick={tambahUlasan} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95">
                Kirim Ulasan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Ulasan Terbaru</p>
          {listUlasan.map((item, index) => (
            <CardKomentar 
              key={index}
              nama={item.nama}
              pesan={item.pesan}
            />
          ))}
        </div>

      </div>
      
    </div>
  )
}