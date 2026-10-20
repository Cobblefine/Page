# Cobblefine Website

Official fan-made website for **Cobblefine** — the optimization modpack of the Cobblemon mod, for Fabric.

- Modpack: https://modrinth.com/modpack/cobblefine
- Minecraft: Java Edition 1.21.1 · Fabric · Client-side

## Run on GitHub Pages

1. Upload `index.html`, `style.css`, `script.js` and `README.md` to the root of your repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute, your site will be live at `https://<username>.github.io/<repository>/`.

## Run locally

Open `index.html` in your browser, or start a tiny server:

```
python -m http.server 8000
```

## Customize

- Mod, resource pack and server lists live at the top of `script.js`.
- Colors are CSS variables at the top of `style.css`.
- Download count, followers, latest version and last-updated time are loaded live from the Modrinth API.

Cobblefine is not affiliated with Cobbled Studios. Not an official Minecraft service. Not approved by or associated with Mojang or Microsoft.
