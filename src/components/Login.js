"use client";

import "../i18n";
import { useTranslation } from "react-i18next";
import { loginWithGoogle, registerWithEmail, loginWithEmail } from "../firebase";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const { t, i18n } = useTranslation();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = (lng) => {
    if (typeof i18n?.changeLanguage === "function") {
      i18n.changeLanguage(lng);
    }
    if (typeof window !== "undefined") {
      window.localStorage?.setItem("language", lng);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (isRegistering) {
        if (!name.trim()) throw new Error(t("requiredName", { defaultValue: "El nombre es obligatorio." }));
        if (!maritalStatus) throw new Error(t("requiredMarital", { defaultValue: "Selecciona tu estado civil." }));
        if (password.length < 6) throw new Error(t("passwordMin", { defaultValue: "La contraseña debe tener al menos 6 caracteres." }));
        await registerWithEmail(email, password, name.trim(), maritalStatus);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", padding: "20px" }}>
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          {/* Selector de idioma */}
          <div className="text-center mb-4">
            <div className="btn-group">
              <button 
                onClick={() => handleLanguageChange("en")} 
                className={`btn btn-sm ${i18n.language === "en" ? "btn-success" : "btn-outline-secondary"}`}
              >
                🇬🇧 EN
              </button>
              <button 
                onClick={() => handleLanguageChange("es")} 
                className={`btn btn-sm ${i18n.language === "es" ? "btn-success" : "btn-outline-secondary"}`}
              >
                🇪🇸 ES
              </button>
              <button 
                onClick={() => handleLanguageChange("fr")} 
                className={`btn btn-sm ${i18n.language === "fr" ? "btn-success" : "btn-outline-secondary"}`}
              >
                🇫🇷 FR
              </button>
            </div>
          </div>

          {/* Tarjeta principal */}
          <div className="auth-card p-4 fade-in-up">
            <div className="text-center mb-4">
              <h2 className="text-light fw-bold mb-2">
                {isRegistering ? t("register", { defaultValue: "Crear Cuenta" }) : t("login", { defaultValue: "Iniciar Sesión" })}
              </h2>
              <p className="text-muted">
                {isRegistering ? "Únete a nuestra comunidad" : "Bienvenido de vuelta"}
              </p>
            </div>

            <form onSubmit={handleAuth}>
              {isRegistering && (
                <>
                  <div className="mb-3">
                    <label className="form-label text-light fw-semibold">
                      {t("name", { defaultValue: "Nombre completo" })}
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-custom" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder={t("namePlaceholder", { defaultValue: "Tu nombre completo" })} 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light fw-semibold">
                      {t("maritalStatus", { defaultValue: "Estado Civil" })}
                    </label>
                    <select 
                      className="form-select form-control-custom" 
                      value={maritalStatus} 
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="">{t("selectMarital", { defaultValue: "Seleccione..." })}</option>
                      <option value="single">{t("single", { defaultValue: "Soltero/a" })}</option>
                      <option value="married">{t("married", { defaultValue: "Casado/a" })}</option>
                      <option value="cohabiting">{t("cohabiting", { defaultValue: "Unión libre" })}</option>
                      <option value="divorced">{t("divorced", { defaultValue: "Divorciado/a" })}</option>
                      <option value="widowed">{t("widowed", { defaultValue: "Viudo/a" })}</option>
                      <option value="other">{t("other", { defaultValue: "Otro" })}</option>
                    </select>
                  </div>
                </>
              )}

              <div className="mb-3">
                <label className="form-label text-light fw-semibold">
                  {t("email", { defaultValue: "Correo Electrónico" })}
                </label>
                <input 
                  type="email" 
                  className="form-control form-control-custom" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder={t("emailPlaceholder", { defaultValue: "correo@dominio.com" })} 
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-light fw-semibold">
                  {t("password", { defaultValue: "Contraseña" })}
                </label>
                <input 
                  type="password" 
                  className="form-control form-control-custom" 
                  minLength={6} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder={t("passwordPlaceholder", { defaultValue: "Mínimo 6 caracteres" })} 
                />
              </div>

              {error && (
                <div className="alert alert-danger border-0 bg-danger bg-opacity-25 text-danger mb-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-custom-primary w-100 mb-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    {isRegistering ? "Creando cuenta..." : "Iniciando sesión..."}
                  </>
                ) : (
                  isRegistering ? t("register", { defaultValue: "Crear Cuenta" }) : t("signIn", { defaultValue: "Iniciar Sesión" })
                )}
              </button>

              <div className="text-center mb-3">
                <button 
                  type="button" 
                  className="btn btn-link text-decoration-none text-muted" 
                  onClick={() => setIsRegistering(!isRegistering)}
                >
                  {isRegistering
                    ? t("alreadyAccount", { defaultValue: "¿Ya tienes cuenta? Inicia sesión" })
                    : t("noAccount", { defaultValue: "¿No tienes cuenta? Regístrate" })}
                </button>
              </div>

              <div className="text-center">
                <p className="text-muted mb-3">o continúa con</p>
                <button 
                  onClick={handleGoogleLogin} 
                  type="button" 
                  className="btn btn-google w-100"
                  disabled={isLoading}
                >
                  <i className="fab fa-google me-2"></i>
                  {t("signInWithGoogle", { defaultValue: "Google" })}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
