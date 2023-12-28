/// <reference types="vite/client" />
declare module '*.vue' {
  import {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
}

declare global {
    interface ImportMeta {
        env: ImportMetaEnv
    }
}
