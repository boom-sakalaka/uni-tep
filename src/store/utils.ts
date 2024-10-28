import { getEnvs } from "@/utils/config";

const Envs = getEnvs();

export const PINIA_PERSIST_KEY_PREFIX = `_P_${Envs.MP_ENV?.toUpperCase().slice(0, 3)}_`;

export function storageKey(name: string) {
  return PINIA_PERSIST_KEY_PREFIX + name;
}
