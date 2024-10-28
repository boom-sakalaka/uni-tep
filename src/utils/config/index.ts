const PREFIX = "VITE_";

type CleanedImportMetaEnv = {
  [K in keyof ImportMetaEnv as K extends `VITE_${infer Rest}`
    ? Rest
    : never]: ImportMetaEnv[K];
};

// 使用示例
type CleanedEnv = CleanedImportMetaEnv;

export const getEnvs = () => {
  const result: Partial<CleanedEnv> = {};
  const raw = { ...import.meta.env };

  for (const key in raw) {
    raw[key.replace(PREFIX, "")] = raw[key];
  }
  return Object.assign(result, raw);
};
