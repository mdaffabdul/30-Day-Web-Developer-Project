import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Dompetku from "./components/Dompetku";

export default function App() {
  const [halamanAktif, setHalamanAktif] = useState("login");

  return (
    <main>
      {halamanAktif === "login" && (
        <Login 
        pindahKeSignup={() => setHalamanAktif("signup")}
        pindahKeHome={() => setHalamanAktif("home")}
         />)}

      {halamanAktif === "signup" && (
        <SignUp pindahHalaman={() => setHalamanAktif("login")} />
      )}

      {halamanAktif === "home" && (
        <Dompetku PindahkeLogin={() => setHalamanAktif("login")} />)}
    </main>
  );
}