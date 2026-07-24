import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

function useFavicon() {
  useEffect(() => {
    // Build an SVG favicon: white background, burgundy "H.W" text
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="8" fill="#ffffff"/>
      <text
        x="32" y="44"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-weight="bold"
        font-size="22"
        fill="#5B1E2D"
        letter-spacing="-1"
      >H.W</text>
    </svg>`;

    const encoded = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = encoded;
    document.title = "Hazel White — Portfolio";
  }, []);
}

export default function App() {
  useFavicon();
  return <RouterProvider router={router} />;
}
