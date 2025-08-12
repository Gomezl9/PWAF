import type { NextConfig } from "next";

// Exportación estática para desplegar en Firebase Hosting
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
