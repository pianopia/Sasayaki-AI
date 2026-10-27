const STORAGE_KEY = 'gemini_api_key';

/**
 * Optional build-time injection (e.g. Vite define). Not committed to git.
 * @returns {string|undefined}
 */
function getBuildTimeApiKey() {
    if (typeof globalThis.__GEMINI_API_KEY__ === 'string') {
        const key = globalThis.__GEMINI_API_KEY__.trim();
        if (key) {
            return key;
        }
    }
    return undefined;
}

/**
 * @returns {string|undefined}
 */
export function getStoredGeminiApiKey() {
    const fromBuild = getBuildTimeApiKey();
    if (fromBuild) {
        return fromBuild;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored.trim()) {
        return stored.trim();
    }
    return undefined;
}

/**
 * @param {string} apiKey
 */
export function setStoredGeminiApiKey(apiKey) {
    const trimmed = apiKey.trim();
    if (!trimmed) {
        localStorage.removeItem(STORAGE_KEY);
        return;
    }
    localStorage.setItem(STORAGE_KEY, trimmed);
}

/**
 * @param {{ promptIfMissing?: boolean }} [options]
 * @returns {string|undefined}
 */
export function ensureGeminiApiKey(options = {}) {
    const { promptIfMissing = false } = options;
    const existing = getStoredGeminiApiKey();
    if (existing) {
        return existing;
    }
    if (!promptIfMissing) {
        return undefined;
    }
    const entered = window.prompt(
        'Google AI Studio の Gemini API キーを入力してください。\n（このブラウザの localStorage に保存されます）',
    );
    if (!entered || !entered.trim()) {
        return undefined;
    }
    setStoredGeminiApiKey(entered);
    return entered.trim();
}
