"use client";

import { StoreModal } from "@/components/modals/store-modals";
import { useState, useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // We want to add this provider to the layout.tsx.
  // The issue with this is that layout.tsx is a server component.
  // This means that I cannot just add a client component to layout.tsx.

  // So until the setIsMounted has executed on runtime which is only something that happens in the client component, we return null.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Otherwise, return StoreModal.
  return (
    <StoreModal />
  )
};
