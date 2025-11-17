import React, { useState } from 'react';
import '../styles/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onYes: () => void;
  onNo: () => void;
  question: string;
  showConfirmation?: boolean;
  confirmationMessage?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onYes,
  onNo,
  question,
  showConfirmation = false,
  confirmationMessage = "Thank you, I love you! ❤️"
}) => {
  const [buttonsSwapped, setButtonsSwapped] = useState(false);

  const handleYes = () => {
    onYes();
  };

  const handleNo = () => {
    setButtonsSwapped(!buttonsSwapped);
    onNo();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Prevent closing when clicking overlay if not in confirmation state
    if (showConfirmation) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {!showConfirmation ? (
          <>
            <div className="modal-header">
              <h2 className="modal-question">{question}</h2>
            </div>
            <div className="modal-body">
              <div className="hearts-decoration">
                <span className="heart">💕</span>
                <span className="heart">💖</span>
                <span className="heart">💕</span>
              </div>
            </div>
            <div className={`modal-footer ${buttonsSwapped ? 'swapped' : ''}`}>
              <button className="btn btn-yes" onClick={handleYes}>
                Có ❤️
              </button>
              <button className="btn btn-no" onClick={handleNo}>
                Không 💔
              </button>
            </div>
          </>
        ) : (
          <div className="confirmation-content">
            <div className="confetti">
              <span>🎉</span>
              <span>💖</span>
              <span>✨</span>
              <span>💕</span>
              <span>🌸</span>
              <span>💝</span>
            </div>
            <h2 className="confirmation-message">{confirmationMessage}</h2>
            <div className="hearts-animation">
              <span className="floating-heart">💖</span>
              <span className="floating-heart">💕</span>
              <span className="floating-heart">💝</span>
              <span className="floating-heart">🌸</span>
            </div>
            <button className="btn btn-close" onClick={onClose}>
              Quay sang đây ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;