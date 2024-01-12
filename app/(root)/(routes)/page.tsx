"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const Setup = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, []);

  return null;
}

export default Setup;
