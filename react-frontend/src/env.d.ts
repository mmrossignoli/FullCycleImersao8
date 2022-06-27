interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_URL: string;
  readonly VITE_REACT_APP_GOOGLE_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
