import React from 'react';

// Carousel component
const Carousel = ({ imageUrls }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Rendering each carousel item */}
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className={`${
                            index === currentSlide ? '' : 'hidden'
                        } duration-700 ease-in-out`}
                        data-carousel-item
                    >
                        <img
                            src={url}
                            className="absolute block w-40 h-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? 'bg-black' : 'bg-gray-300'
                        }`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrevSlide}
            >
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-end hover:bg-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-start">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

// Image URLs
const imageUrls = [
    "https://i.ibb.co/4V7MrDj/slide1.jpg",
    "https://i.ibb.co/FndvzNJ/slide2.jpg",
    "https://i.ibb.co/GHtcLzL/slide3.jpg",
    "https://i.ibb.co/rvY2T53/slide4.jpg",
    "https://i.ibb.co/pbNr7SZ/DSC01215.jpg",
    "https://i.ibb.co/FB03VcR/DSC01217.jpg",
    "https://i.ibb.co/LzJ2k4Q/DSC01216.jpg"
];

// App component
function Nepale() {
    return (
        <div>
            {/* Rendering the Carousel component with imageUrls */}
            <Carousel imageUrls={imageUrls} />
        </div>
    );
}

export default Nepale;









