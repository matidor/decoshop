
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '2254416272'; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={openWhatsApp}>
      <FaWhatsapp size={25} />
    </button>
  );
};

export default WhatsAppButton;