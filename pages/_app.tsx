import "./global.css";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="flex-1 overflow-y-scroll p-5 bg-gray-800 text-gray-400">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
