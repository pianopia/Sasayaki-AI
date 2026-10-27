# Configuration

Copy `config.example.js` to `config.js` if you need a local config file. Do **not** put API keys in `config.js`.

Gemini API keys are entered in the app settings panel (stored in `localStorage`) or injected at build time via `globalThis.__GEMINI_API_KEY__` (see `.env.example`).
