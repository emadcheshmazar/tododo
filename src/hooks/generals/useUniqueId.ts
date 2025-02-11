import { useMemo } from "react";

const useUniqueId = (): string => {
  return useMemo(() => {
    const now = Date.now();
    const randomPart = Math.floor(Math.random() * 1000000);
    return `${now}-${randomPart}`;
  }, []);
};

export default useUniqueId;
