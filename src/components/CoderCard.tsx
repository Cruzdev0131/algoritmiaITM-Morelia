import Tilt from 'react-parallax-tilt'; // Importa la librería
import './CoderCard.css';

interface CoderCardProps {
  category: string;
  imageSrc: string;
  name: string;
  details: string[];
  extraImage?: string;
  extraText?: string;
}

function CoderCard({ category, imageSrc, name, details, extraImage, extraText }: CoderCardProps) {
  return (
    // Envuelve todo en Tilt para el efecto 3D
    <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.02} transitionSpeed={2500}>
      <div className="coder-card" style={{ height: '100%' }}> {/* height 100% para que se estiren igual */}
        <div className="card-badge">{category}</div>
        <div className="card-image-container">
          <img src={imageSrc} alt={name} className="card-image" />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          {details.map((text, index) => (
            <p key={index} className="card-detail">{text}</p>
          ))}
          
          {extraImage && (
            <img src={extraImage} alt="Reconocimiento" className="card-extra-img" />
          )}
          {extraText && <p className="card-extra-text">{extraText}</p>}
        </div>
      </div>
    </Tilt>
  );
}

export default CoderCard;