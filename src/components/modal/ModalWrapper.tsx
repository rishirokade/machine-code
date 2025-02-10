import { useState } from "react";
import { Modal } from "./Modal";

export default function ModalExample() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button
                onClick={openModal}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={closeModal}>
                Modal Title
            </Modal>
        </div>
    );
}
