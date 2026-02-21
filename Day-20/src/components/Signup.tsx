import { useState } from "react";

interface User {
  username: string;
  password: string;
}

interface SignupProps {
  pindahHalaman: () => void;
}

export default function Signup(props: SignupProps) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const tambahAkun = () => {
    if (inputUsername === "" || inputPassword === "") {
      alert("Isi dulu nama dan password nya!");
      return;
    }

    const akunBaru: User = {
      username: inputUsername,
      password: inputPassword,
    };

    localStorage.setItem("user_dompetku", JSON.stringify(akunBaru));
    alert("Akun berhasil dibuat! Silakan login.");
    props.pindahHalaman();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6 font-sans">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">Daftar</h1>
        <p className="mb-8 text-sm text-slate-500 text-balance">
          Buat akun untuk mulai mengelola keuanganmu.
        </p>

        <div className="flex flex-col gap-4 text-left">
          <div>
            <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-400">
              Username
            </label>
            <input
              type="text"
              placeholder="Pilih username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          <div>
            <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          <button
            onClick={tambahAkun}
            className="mt-4 w-full rounded-xl bg-black py-3 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 active:scale-95"
          >
            Buat Akun
          </button>
        </div>

        <button
          onClick={props.pindahHalaman}
          className="mt-6 text-sm text-slate-500 transition-colors hover:text-black"
        >
          Sudah punya akun? <span className="font-bold underline text-slate-800">Login di sini</span>
        </button>
      </div>
    </div>
  );
}