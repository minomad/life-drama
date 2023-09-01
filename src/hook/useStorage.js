import { useCallback, useMemo, useState } from 'react';

const {
  localStorage: storage,
  JSON: { stringify, parse },
} = globalThis;

const setData = (key, nextData) => {
  storage.setItem(key, stringify(nextData));
};

const getData = (key) => {
  return parse(storage.getItem(key));
};

const deleteData = (key) => {
  storage.removeItem(key);
};

function useStorage(key, defaultValue) {
  const [storageData, setStorageData] = useState(() => {
    try {
      return getData(key);
    } catch (error) {
      return defaultValue;
    }
  });

  const update = useCallback(
    (nextData) => {
      setData(key, nextData);
      setStorageData(nextData);
    },
    [key]
  );

  const remove = useCallback(() => {
    deleteData(key);
    setStorageData();
  }, [key]);

  return useMemo(
    () => ({
      storageData,
      update,
      remove,
    }),
    [remove, storageData, update]
  );
}

export default useStorage;
