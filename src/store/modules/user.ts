import { defineStore } from "pinia";
const USER_STORE_KEY = "UserStore";
import { storageKey } from "../utils";

export const useUserStore = defineStore(
  USER_STORE_KEY,
  () => {
    const _storage = ref({});

    return {
      _storage
    };
  },
  {
    persist: {
      enabled: true,
      enforceCustomStorage: true,
      strategies: [
        {
          key: storageKey(USER_STORE_KEY),
          paths: ["_storage"],
          storage: useStorage() as Storage
        }
      ]
    }
  }
);
