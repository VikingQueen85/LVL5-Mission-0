import React, {useState} from 'react';

const images = [
    { id: 1, src: "/SpiritualHealing.jpg", alt: "Spiritual Healing", text: "Healing", description: '' },
    { id: 2, src: "/Chakras.jpg", alt: "Chakras", text: "Chakras", description: '' },
    { id: 3, src: "/Nature.jpg", alt: "Nature", text: "Energy Flow", description: '' },
    { id: 4, src: "/SoundHealing.jpg", alt: "Sound Healing", text: "Sound Healing", description: '' },
    { id: 5, src: "/HolisticMedicine.jpg", alt: "Holistic Medicine", text: "Holistic Medicine", description: '' }
];

function ImagesSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="images-section">
            <div className="image-container">
                {images.map((image) => (
                    <div key={image.id} className="image-box" onClick={() => setSelectedImage(image)}>
                        <img src={image.src} alt={image.alt} />
                        <p>{image.alt}</p>
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image and Description */}
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
                        <p className="modal-description">{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImagesSection;
