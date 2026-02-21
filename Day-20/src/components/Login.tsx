import { useState } from "react";

interface LoginProps {
  pindahKeHome: () => void;
  pindahKeSignup: () => void;
}

export default function Login({ pindahKeHome, pindahKeSignup }: LoginProps) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [pesanError, setPesanError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const dataTersimpan = localStorage.getItem("user_dompetku");

    if (dataTersimpan) {
      const user = JSON.parse(dataTersimpan);

      if (inputUsername === user.username && inputPassword === user.password) {
        alert("Login Berhasil! Selamat datang.");
        pindahKeHome();
      } else {
        setPesanError("Username atau Password salah!");
      }
    } else {
      setPesanError("Akun belum terdaftar. Silakan Sign Up dulu.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Masuk</h1>
        <p className="text-slate-500 mb-6 text-sm text-balance">Gunakan akun yang sudah kamu daftarkan tadi.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 ml-1">Username</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="Username kamu"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-slate-400 ml-1">Password</label>
            <input
              type="password"
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="••••••••"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </div>

          {pesanError && <p className="text-xs text-red-500 italic mt-1 font-medium text-center">! {pesanError}</p>}

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-black py-3 font-bold text-white transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-200"
          >
            Sign In
          </button>
        </form>

        <button 
          onClick={pindahKeSignup}
          className="mt-6 text-sm text-slate-500 hover:text-black transition-colors"
        >
          Belum punya akun? <span className="font-bold underline text-slate-800">Daftar di sini</span>
        </button>
      </div>
    </div>
  );
}