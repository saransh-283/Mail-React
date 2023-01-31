import "./global.css";
import { useEffect, useState } from "react";
import Folders from "../components/Folders";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1">
        <Folders />
        <main className="flex flex-1 bg-gray-800 text-gray-400">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
