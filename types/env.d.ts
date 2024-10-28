/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 请求接口环境 */
  readonly VITE_MP_ENV: "development" | "testing" | "production";
  /** 请求接口域名 */
  readonly VITE_API_DOMAIN: string;
  /** 请求接口路径 */
  readonly VITE_API_BASE_URL: string;
  /** 请求接口路径重写 */
  readonly VITE_API_PATH_REWRITE: string;
  /** jenkins构建id */
  readonly VITE_BUILD_ID: string;
  /** 腾讯COS资源路径 */
  readonly VITE_COS_BASE_URL: string;
  /** 微信公众号appId */
  readonly VITE_WOA_APPID: string;
  /** 微信公众号授权URL */
  readonly VITE_WOA_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
