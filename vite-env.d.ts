/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare interface ViteEnv {
  VITE_APP_ENV: string
  VITE_APP_BASE_URL: string
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli'
  VITE_APP_TITLE:string
}
