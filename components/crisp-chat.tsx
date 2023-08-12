"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("04d1e4b9-41bc-4b81-bbd8-79626ee96a6d");
  }, []);

  return null;
};
