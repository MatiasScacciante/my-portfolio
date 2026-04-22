# Portfolio — Deploy Guide

## 1. Pre-requisitos
- Node.js 18+ instalado (https://nodejs.org)
- Git instalado
- Cuenta en GitHub
- Cuenta en Vercel (vercel.com) o Netlify (netlify.com)

---

## 2. Primer uso local

```bash
# Entrar a la carpeta del proyecto
cd matias-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# Generar build de producción
npm run build
```

---

## 3. Subir a GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "feat: initial portfolio"

# Crear repo en GitHub (github.com/new)
# Luego conectar y subir:
git remote add origin https://github.com/TU_USUARIO/matias-portfolio.git
git branch -M main
git push -u origin main
```

---

## 4. Deploy en Vercel (recomendado)

1. Ir a https://vercel.com/new
2. "Import Git Repository" → seleccionar `matias-portfolio`
3. Vercel detecta automáticamente que es Vite → clic en **Deploy**
4. En ~2 minutos tu portfolio está en vivo en `https://matias-portfolio.vercel.app`

> El archivo `vercel.json` ya está configurado para SPA routing.

### Dominio personalizado en Vercel:
Settings → Domains → Add Domain → `matiasscacciante.com`

---

## 5. Deploy en Netlify (alternativa)

1. Ir a https://app.netlify.com/start
2. "Import from Git" → GitHub → seleccionar repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**

---

## 6. Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Textos en inglés | `src/i18n/en.js` |
| Textos en español | `src/i18n/es.js` |
| Colores de acento | `tailwind.config.js` → `accent` |
| Tu email de contacto | `src/components/ContactSection.vue` |
| Tu LinkedIn/GitHub URL | `src/components/ContactSection.vue` |
| Foto de perfil | Agregar `<img>` en `AboutSection.vue` |
| URL de Cartafaro | `src/components/ProjectsSection.vue` |

---

## 7. Stack

- **Framework:** Vue 3 + Vite
- **Styling:** Tailwind CSS
- **i18n:** vue-i18n v9
- **Animaciones:** CSS + IntersectionObserver (sin dependencias extra)
- **Deploy:** Vercel / Netlify (gratuito)
