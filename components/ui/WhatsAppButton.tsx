
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello, I'm interested in Royal Group of Real Estates properties.", 
  className 
}: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex items-center justify-center",
        "w-14 h-14 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)]",
        "bg-[#25D366] hover:bg-[#20BA5C] transition-all duration-300",
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-[#25D366] before:rounded-full before:animate-pulse",
        "before:animation-duration-2000 before:opacity-75",
        "hover:scale-110 hover:shadow-[0_6px_24px_rgba(37,211,102,0.4)]",
        className
      )}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="w-8 h-8 fill-white z-10 hover:scale-105 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="whatsapp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M147.934 27.582C131.85 11.497 110.45 2.5 87.5 2.5 40.734 2.5 2.5 40.734 2.5 87.5c0 15.484 4.168 30.6 12.016 43.76L2.5 173.05l43.25-11.516c12.7 6.916 26.95 10.566 41.75 10.566h.034c46.75 0 85-38.234 85-85 0-22.95-8.95-44.35-24.6-60.518zM87.5 158.116h-.034c-12.684 0-25.116-3.4-36.016-9.8l-2.584-1.534-26.766 7.016 7.15-26.1-1.684-2.666c-7.1-11.25-10.834-24.25-10.834-37.532 0-38.984 31.766-70.734 70.8-70.734 18.916 0 36.684 7.35 50.066 20.734 13.366 13.366 20.734 31.15 20.734 50.066-.016 38.984-31.784 70.55-70.832 70.55zm38.75-53.066c-2.134-1.066-12.6-6.216-14.55-6.916-1.95-.716-3.366-1.066-4.784 1.066-1.416 2.134-5.484 6.916-6.734 8.334-1.234 1.416-2.466 1.6-4.6.534-2.134-1.066-9-3.316-17.15-10.584-6.366-5.666-10.65-12.65-11.884-14.784s-.134-3.284 1-4.35c1.016-.95 2.25-2.484 3.366-3.734 1.116-1.234 1.484-2.134 2.234-3.55.734-1.416.366-2.666-.184-3.734-.534-1.066-4.784-11.516-6.55-15.766-1.716-4.134-3.466-3.584-4.784-3.65a91.075 91.075 0 0 0-4.084-.234c-1.416 0-3.734.534-5.684 2.666-1.95 2.134-7.45 7.284-7.45 17.734s7.616 20.566 8.666 22c1.066 1.416 14.834 22.65 35.966 31.766 5.016 2.166 8.95 3.45 12 4.434 5.05 1.6 9.65 1.384 13.266 0.834 4.066-.6 12.6-5.15 14.366-10.1s1.766-9.234 1.234-10.1c-.516-.884-1.934-1.416-4.084-2.484z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;