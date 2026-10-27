# Configuration

`config.js` holds non-secret app settings (model, voice, system instruction).

## Gemini API key

The API key is **never** stored in this repository. Provide it in one of these ways:

1. **Browser prompt** — shown on first connect; saved in `localStorage` only on this device.
2. **Settings panel** — use the API key field in the configuration panel (when visible).
3. **Local override** — copy `config.local.example.js` to `config.local.js` (gitignored) and set `LOCAL_GEMINI_API_KEY`.
4. **Deploy-time injection** — set `window.GEMINI_API_KEY` before the app loads (e.g. from your host’s secret env).

Get a key from [Google AI Studio](https://aistudio.google.com/apikey).
