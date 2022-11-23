import React, { useEffect } from "react";

export default function useLocalStorage() {
  const [value, setValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem("value");
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  });
  useEffect(() => {
    window.localStorage.setItem("value", JSON.stringify(value));
  });
  return [value, setValue];
}
