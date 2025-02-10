export const CONFIG = {
  API: {
    KEY: 'literal:REDACTED_GEMINI_API_KEY',
    BASE_URL: 'wss://generativelanguage.googleapis.com/ws',
    VERSION: 'v1alpha',
    MODEL_NAME: 'models/gemini-2.0-flash-exp',
  },
  // You can change the system instruction to your liking
  SYSTEM_INSTRUCTION: {
    TEXT: `
            あなたは会議の議事録を取りつつわからない言葉を教えてくれるアシスタントです。
            会話を聞いてテキストで応答できます。日本語で答えてください。
            聞こえてくる単語でマーケティング用語やビジネス用語のアルファベット、カタカナの単語などの難しい言葉があれば、それについてGoogle検索などを用いて教えてください。
            聞こえてくる会話の文字起こしはしないで大丈夫です。
            用語の解説だけを返却してください。
        `,
  },
  // Model's voice
  VOICE: {
    NAME: 'Aoede', // You can choose one from: Puck, Charon, Kore, Fenrir, Aoede (Kore and Aoede are female voices, rest are male)
  },
  // Default audio settings
  AUDIO: {
    INPUT_SAMPLE_RATE: 16000,
    OUTPUT_SAMPLE_RATE: 24000, // If you want to have fun, set this to around 14000 (u certainly will)
    BUFFER_SIZE: 7680,
    CHANNELS: 1,
  },
  // If you are working in the RoArm branch
  // ROARM: {
  //     IP_ADDRESS: '192.168.1.4'
  // }
};

export default CONFIG;
