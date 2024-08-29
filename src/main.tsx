import { StrictMode } from "react";
import App from "./App.jsx";
import "./styles/global.css";
import { ClerkProvider } from "@clerk/clerk-react";

import { createRoot } from "react-dom/client";

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;

const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
      <App />
      {/* <RouterList /> */}
    </ClerkProvider>
  </StrictMode>
);
