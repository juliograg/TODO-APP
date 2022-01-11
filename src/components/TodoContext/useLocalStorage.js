import React, { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue = []) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = JSON.parse(localStorage.getItem(itemName));
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("todos_V1", JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = localStorageItem;
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
