"use client";
import { useEffect, useState } from "react";

export const isVisibleHook = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return isVisible;
};
