import React, { useState } from 'react';
import Modal from './modal';
import '../styles/Card.css';

interface CardProps {
  title?: string;
  question?: string;
  confirmationMessage?: string;
  photoUrl?: string;
  photoAlt?: string;
  photo2Url?: string; // Add your second photo here
  photo3Url?: string; // Add your third photo here
}

const Card: React.FC<CardProps> = ({
  title = "💖 Công chúa iuuuuu 💖",
  question = "Công chúa cho mình làm ngừi iuu của công chúa nhá?",
  confirmationMessage = "Cho hun miếng được khôm! ❤️✨",
  photoUrl = `${process.env.PUBLIC_URL}/subeo_di_xe.png`, 
  photoAlt = "Love photo",
  photo2Url = `${process.env.PUBLIC_URL}/subeo_ha_long.jpg`,
  photo3Url = `${process.env.PUBLIC_URL}/subeo_hang_nga.JPG`,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cardOpened, setCardOpened] = useState(false);

  const handleOpenCard = () => {
    setCardOpened(true);
    setIsModalOpen(true);
    setShowConfirmation(false);
  };

  const handleYes = () => {
    setShowConfirmation(true);
  };

  const handleNo = () => {
    // Just let the modal handle the button swapping
    // No need to close and reopen the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowConfirmation(false);
  };

  return (
    <div className="card-container">
      {/* Background decorative elements */}
      <div className="background-decoration">
        <div className="floating-heart heart-1">💖</div>
        <div className="floating-heart heart-2">💕</div>
        <div className="floating-heart heart-3">🌸</div>
        <div className="floating-heart heart-4">💝</div>
        <div className="floating-heart heart-5">✨</div>
        <div className="floating-heart heart-6">💗</div>
      </div>

      <div className="card-content">
        <header className="card-header">
          <h1 className="card-title">{title}</h1>
          <div className="title-decoration">
            <span className="sparkle">✨</span>
            <span className="heart-icon">💕</span>
            <span className="sparkle">✨</span>
          </div>
        </header>

        <main className="card-main">
          {/* Photo placeholder */}
          <div className="photo-section">
            {photoUrl ? (
              <img src={photoUrl} alt={photoAlt} className="love-photo" />
            ) : (
              <div className="photo-placeholder">
                <div className="placeholder-content">
                  <span className="camera-icon">📷</span>
                  <p>Your special photo here</p>
                </div>
              </div>
            )}
            <div className="photo-frame-decoration">
              <span className="corner-heart top-left">💖</span>
              <span className="corner-heart top-right">💖</span>
              <span className="corner-heart bottom-left">💖</span>
              <span className="corner-heart bottom-right">💖</span>
            </div>
          </div>

          {/* NEW: Small photo gallery */}
          <div className="photo-gallery">
            <div className="gallery-item">
              <img src={photo2Url} alt="Memory 2" className="gallery-photo" />
              <div className="gallery-decoration">
                <span className="mini-heart">💖</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src={photo3Url} alt="Memory 3" className="gallery-photo" />
              <div className="gallery-decoration">
                <span className="mini-heart">💕</span>
              </div>
            </div>
          </div>

          {/* Open card button */}
          <div className="button-section">
            <button 
              className={`open-card-btn ${cardOpened ? 'opened' : ''}`}
              onClick={handleOpenCard}
            >
              <span className="btn-text">
                {cardOpened ? "Mở lại 💕" : "Mở thiệp 💌"}
              </span>
              <div className="btn-decoration">
                <span className="sparkle-1">✨</span>
                <span className="sparkle-2">✨</span>
              </div>
            </button>
          </div>

          {/* Decorative message area */}
          <div className="message-preview">
            <p className="preview-text">
              Công chúa xinh đẹp ơi không được từ chối đâu 💕
            </p>
          </div>
        </main>

        <footer className="card-footer">
          <div className="footer-decoration">
            <span>Sến vãi</span>
            <span className="beating-heart">💖</span>
            <span>nhưng mà iêu</span>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onYes={handleYes}
        onNo={handleNo}
        question={question}
        showConfirmation={showConfirmation}
        confirmationMessage={confirmationMessage}
      />
    </div>
  );
};

export default Card;