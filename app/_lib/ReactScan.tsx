// React-scan
//https://dashboard.react-scan.com/project
'use client';
import { scan } from 'react-scan';
import { JSX, useEffect } from 'react';

export function ReactScan(): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true,
      // highlight: true
    });
  }, []);

  return <></>;
}
