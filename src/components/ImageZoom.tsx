import { useState, useRef, useCallback } from "react";
import { ZoomIn, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageZoomProps {
  src: string;
  alt: string;
  allImages?: string[];
  selectedIndex?: number;
  onChangeIndex?: (index: number) => void;
}

const ImageZoom = ({ src, alt, allImages = [], selectedIndex = 0, onChangeIndex }: ImageZoomProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  }, []);

  const handlePrev = () => {
    if (onChangeIndex && allImages.length > 1) {
      onChangeIndex(selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (onChangeIndex && allImages.length > 1) {
      onChangeIndex(selectedIndex === allImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      {/* Main image with hover zoom */}
      <div
        ref={containerRef}
        className="aspect-square rounded-2xl overflow-hidden bg-card border border-border mb-4 relative cursor-zoom-in group"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-200"
          style={
            isZooming
              ? {
                  transform: "scale(2)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                }
              : undefined
          }
        />
        {/* Zoom icon hint */}
        <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn size={18} className="text-foreground" />
        </div>
        <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-xs text-foreground font-medium">اضغط لتكبير الصورة</span>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          <div className="relative flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-2 left-2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
            >
              <X size={20} className="text-foreground" />
            </button>

            {/* Navigation arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handleNext}
                  className="absolute right-2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                >
                  <ChevronRight size={24} className="text-foreground" />
                </button>
                <button
                  onClick={handlePrev}
                  className="absolute left-12 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                >
                  <ChevronLeft size={24} className="text-foreground" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />

            {/* Image counter */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-sm text-foreground font-medium">
                  {selectedIndex + 1} / {allImages.length}
                </span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageZoom;
