import ReactDOM from "react-dom";
export const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}> = ({ isOpen, onClose, style, children }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1000,
                backgroundColor: "rgba(24, 120, 120, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: "relative",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                    ...style,
                }}
                // allow to click only on targeted div
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as Element | DocumentFragment
    );
};
