
import { useState } from 'react';
import { Heart, Home, MapPin, Square, BadgeIndianRupee } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  className?: string;
  featured?: boolean;
  type?: 'residential' | 'commercial';
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  className,
  featured = false,
  type = 'residential'
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden bg-white property-card-shadow h-full",
        featured ? "md:col-span-2" : "",
        className
      )}
    >
      <div className="relative">
        {/* Image with blur-up loading */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-royal-100">
          <div className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            imageLoaded ? "opacity-0" : "opacity-100"
          )} />
          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          <button
            onClick={handleLikeToggle}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all duration-300"
            aria-label="Like property"
          >
            <Heart size={20} className={cn(
              "transition-colors duration-300",
              isLiked ? "fill-rose-500 text-rose-500" : "text-royal-800"
            )} />
          </button>
          
          {featured && (
            <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Featured
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded">
            {type === 'residential' ? 'Residential' : 'Commercial'}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-xl font-semibold text-royal-800 line-clamp-2">{title}</h3>
          </div>
          
          <div className="flex items-center text-royal-600 mb-4">
            <MapPin size={16} className="text-gold-500 mr-1.5" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center justify-between border-t border-royal-100 pt-4 mt-4">
            <div className="flex space-x-4">
              <div className="flex items-center text-royal-700">
                <Home size={16} className="mr-1.5" />
                <span className="text-sm">{bedrooms} bd</span>
              </div>
              <div className="flex items-center text-royal-700">
                <Home size={16} className="mr-1.5" />
                <span className="text-sm">{bathrooms} ba</span>
              </div>
              <div className="flex items-center text-royal-700">
                <Square size={16} className="mr-1.5" />
                <span className="text-sm">{area}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center">
            <BadgeIndianRupee size={18} className="text-gold-500 mr-1" />
            <span className="font-display text-xl font-semibold text-royal-800">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
