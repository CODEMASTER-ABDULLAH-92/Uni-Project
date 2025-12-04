// "use client";
// import { useRef } from "react";
// import { Provider } from "react-redux";
// import { makeStore, AppStore } from "../../src/app/lib/store";
// export default function StoreProvider({
//   children,
// }: {
//   count: number;
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore | null>(null);
//   if (!storeRef.current) {
//     storeRef.current = makeStore();
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }

'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
