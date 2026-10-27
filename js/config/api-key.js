const STORAGE_KEY = 'gemini_api_key';

/**
 * Reads the API key saved in localStorage (browser-only).
 * @returns {string|null}
 */
export function getStoredApiKey() {
  const value = localStorage.getItem(STORAGE_KEY);
  return value && value.trim() ? value.trim() : null;
}

/**
 * Persists or clears the API key in localStorage.
 * @param {string|null|undefined} key
 */
export function setStoredApiKey(key) {
  const trimmed = key?.trim();
  if (trimmed) {
    localStorage.setItem(STORAGE_KEY, trimmed);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Resolves a Gemini API key from (in order): gitignored config.local.js,
 * localStorage, window.GEMINI_API_KEY (e.g. injected at deploy time), then prompt.
 * @param {{ promptIfMissing?: boolean }} [options]
 * @returns {Promise<string|null>}
 */
export async function resolveApiKey(options = {}) {
  const { promptIfMissing = true } = options;

  try {
    const local = await import('./config.local.js');
    const fromLocal = local.LOCAL_GEMINI_API_KEY?.trim();
    if (fromLocal) {
      return fromLocal;
    }
  } catch {
    // config.local.js is optional and gitignored
  }

  const stored = getStoredApiKey();
  if (stored) {
    return stored;
  }

  if (typeof window !== 'undefined' && window.GEMINI_API_KEY?.trim()) {
    return window.GEMINI_API_KEY.trim();
  }

  if (!promptIfMissing) {
    return null;
  }

  const entered = window.prompt(
    'Google AI Studio の Gemini API キーを入力してください（このブラウザの localStorage にのみ保存されます）:',
    ''
  );
  const trimmed = entered?.trim();
  if (trimmed) {
    setStoredApiKey(trimmed);
    return trimmed;
  }

  return null;
}
