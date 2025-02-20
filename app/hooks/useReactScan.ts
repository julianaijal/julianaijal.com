"use client";
import { scan } from "react-scan";
import { useEffect } from "react";

export function useReactScan(): void {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);
}
