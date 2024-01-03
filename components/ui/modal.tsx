"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Here we describe the interface for the modal
interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void; // Function described as a void
  children?: React.ReactNode; // Optional children
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  // Defining the onChange function using ShadCN
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    // Rendering our dialog modal
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>
            {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
