"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase";
import type { User } from "firebase/auth";
import Login from "../components/Login";
import Home from "../components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u: User | null) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <div className="spinner-border text-success" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-light">Inicializando aplicación...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
}
