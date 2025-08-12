import React, { useEffect, useState } from "react";
import { auth, logout } from "../firebase";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u?.displayName) setName(u.displayName);
      else if (u?.email) setName(u.email.split("@")[0]);
      else setName("");
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <div className="spinner-border text-success" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-light">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", padding: "20px" }}>
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="auth-card p-5 text-center fade-in-up">
            <div className="mb-4">
              <div className="display-1 mb-3">🏠</div>
              <h1 className="text-light fw-bold mb-3">
                {t("homeTitle", { defaultValue: "Bienvenido a tu Dashboard" })}
              </h1>
              <p className="text-muted fs-5">
                Has iniciado sesión exitosamente
              </p>
            </div>

            {user && (
              <div className="mb-5">
                <div className="bg-success bg-opacity-25 border border-success border-opacity-50 rounded-3 p-4 mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px" }}>
                      <i className="fas fa-user text-white fs-4"></i>
                    </div>
                    <div className="text-start">
                      <h3 className="text-light fw-bold mb-1">
                        {t("hello", { defaultValue: "Hola" })} {name}
                      </h3>
                      <p className="text-success mb-0">{user.email}</p>
                    </div>
                  </div>
                  
                  {user.displayName && (
                    <div className="text-center">
                      <span className="badge bg-success bg-opacity-75 fs-6 px-3 py-2">
                        <i className="fas fa-check-circle me-2"></i>
                        Usuario Verificado
                      </span>
                    </div>
                  )}
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="auth-card p-3 h-100">
                      <div className="text-success mb-2">
                        <i className="fas fa-shield-alt fs-2"></i>
                      </div>
                      <h5 className="text-light">Seguridad</h5>
                      <p className="text-muted small mb-0">Tu cuenta está protegida</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="auth-card p-3 h-100">
                      <div className="text-success mb-2">
                        <i className="fas fa-clock fs-2"></i>
                      </div>
                      <h5 className="text-light">Último acceso</h5>
                      <p className="text-muted small mb-0">Hace unos momentos</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="d-grid gap-3">
              <button 
                className="btn btn-custom-primary btn-lg"
                onClick={() => window.location.reload()}
              >
                <i className="fas fa-sync-alt me-2"></i>
                Actualizar
              </button>
              
              <button 
                className="btn btn-outline-danger btn-lg" 
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                {t("logout", { defaultValue: "Cerrar sesión" })}
              </button>
            </div>

            <div className="mt-4">
              <p className="text-muted small">
                <i className="fas fa-info-circle me-1"></i>
                Esta es una aplicación PWA con autenticación Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
