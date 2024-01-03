"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Setup() {
  return (
    // Getting a hydration error here. Need to fix.
    <div className="p-4">
      <div className="flex items-end justify-end p-5 ">
        <UserButton afterSignOutUrl="/" />
      </div>
      <Modal
        title="Setup"
        description="Test Description"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
}
