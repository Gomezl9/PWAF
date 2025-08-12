# 🔐 PWA Firebase Auth - Login Moderno

Una aplicación PWA (Progressive Web App) moderna con autenticación Firebase, diseñada con un tema oscuro elegante y sombras verdes.

## ✨ Características

- 🎨 **Diseño Moderno**: Tema oscuro con sombras verdes y efectos de hover
- 🔐 **Autenticación Completa**: Login/registro con email y contraseña
- 🌐 **Autenticación Social**: Integración con Google
- 📱 **PWA Ready**: Instalable en dispositivos móviles y desktop
- 🌍 **Multiidioma**: Soporte para Español, Inglés y Francés
- ⚡ **Next.js 15**: Framework moderno con TypeScript
- 🎯 **Responsive**: Diseño adaptativo para todos los dispositivos
- 🔒 **Seguro**: Autenticación Firebase con validaciones

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Bootstrap 5, CSS personalizado
- **Autenticación**: Firebase Auth
- **Base de Datos**: Firestore
- **PWA**: next-pwa
- **Iconos**: Font Awesome 6
- **Internacionalización**: i18next

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta de Firebase

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd pwa-firebase-auth
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto
   - Habilita Authentication (Email/Password y Google)
   - Habilita Firestore Database
   - Copia las credenciales a `src/firebase.js`

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Configuración de Firebase

El archivo `src/firebase.js` ya está configurado con las credenciales del proyecto. Si quieres usar tu propio proyecto Firebase:

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.firebasestorage.app",
  messagingSenderId: "tu-sender-id",
  appId: "tu-app-id"
};
```

## 🎨 Personalización de Estilos

Los colores principales están definidos en `src/app/globals.css`:

```css
:root {
  --primary-green: #00ff88;      /* Verde principal */
  --secondary-green: #00cc6a;    /* Verde secundario */
  --dark-bg: #0a0a0a;           /* Fondo oscuro */
  --card-bg: #1a1a1a;           /* Fondo de tarjetas */
  --text-light: #ffffff;         /* Texto claro */
  --text-muted: #cccccc;         /* Texto atenuado */
  --border-color: #333333;       /* Color de bordes */
}
```

## 📱 Funcionalidades PWA

- **Instalable**: Se puede instalar como app nativa
- **Offline**: Funciona sin conexión (con datos cacheados)
- **Push Notifications**: Preparado para notificaciones
- **App-like**: Experiencia similar a una app nativa

## 🌍 Idiomas Soportados

- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **Inglés**
- 🇫🇷 **Francés**

Los archivos de traducción están en `src/locales/`.

## 📁 Estructura del Proyecto

```
pwa-firebase-auth/
├── src/
│   ├── app/                 # App Router de Next.js
│   ├── components/          # Componentes React
│   │   ├── Login.js        # Formulario de autenticación
│   │   └── Home.js         # Dashboard principal
│   ├── firebase.js         # Configuración de Firebase
│   └── i18n.js            # Configuración de idiomas
├── public/                 # Archivos estáticos
├── locales/               # Traducciones
└── package.json           # Dependencias
```

## 🔐 Funcionalidades de Autenticación

### Login con Email/Contraseña
- Validación de campos
- Manejo de errores
- Persistencia de sesión

### Registro de Usuario
- Campos: Nombre, Email, Contraseña, Estado Civil
- Validaciones personalizadas
- Almacenamiento en Firestore

### Autenticación con Google
- OAuth 2.0 con Google
- Integración automática con Firebase
- Sincronización de datos de perfil

## 🎯 Uso

1. **Acceso**: Ve a la ruta principal `/`
2. **Login**: Usa email/contraseña o Google
3. **Registro**: Cambia a modo registro si no tienes cuenta
4. **Dashboard**: Accede a tu panel personalizado
5. **Cerrar Sesión**: Usa el botón de logout

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta .next a Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la [documentación de Firebase](https://firebase.google.com/docs)
2. Consulta la [documentación de Next.js](https://nextjs.org/docs)
3. Abre un issue en este repositorio

## 🙏 Agradecimientos

- [Firebase](https://firebase.google.com/) por la plataforma de autenticación
- [Next.js](https://nextjs.org/) por el framework
- [Bootstrap](https://getbootstrap.com/) por los componentes de UI
- [Font Awesome](https://fontawesome.com/) por los iconos

---

**¡Disfruta tu nueva aplicación PWA con autenticación Firebase! 🚀**
