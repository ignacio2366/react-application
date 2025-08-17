import { useCallback, useState } from "react";
import CLOSE from "@/assets/svg/ic-close.svg";
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  style?: React.CSSProperties;
  classname?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  title,
}: ModalProps) => {
  const [open, setOpen] = useState(isOpen);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  return (
    <>
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <section className="flex-row-between">
              <h1 className="modal-title">{title}</h1>
              <button
                style={{ border: "none", background: "none" }}
                onClick={handleClose}
                className="modal-close-button"
              >
                <img src={CLOSE} alt="close-modal" height={24} width={24} />
              </button>
            </section>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
