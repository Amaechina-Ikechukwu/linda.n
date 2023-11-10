import React, { useEffect, useState } from 'react';

interface ConfettiProps {
    numberOfParticles: number;
    onAnimationEnd: () => void;
}

const ConfettiParticle: React.FC<ConfettiProps> = ({ numberOfParticles, onAnimationEnd }) => {
    const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

    useEffect(() => {
        const generateRandomParticles = () => {
            const newParticles: Array<{ x: number; y: number }> = [];
            for (let i = 0; i < numberOfParticles; i++) {
                newParticles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                });
            }
            setParticles(newParticles);
        };

        generateRandomParticles();

        const animationDuration = 3000; // Adjust the animation duration as needed

        const animationTimer = setTimeout(() => {
            onAnimationEnd();
        }, animationDuration);

        return () => clearTimeout(animationTimer);
    }, [numberOfParticles, onAnimationEnd]);

    return (
        <svg
            className="absolute inset-0"
            style={{ zIndex: 9999, pointerEvents: 'none' }}
        >
            {particles.map((particle, index) => (
                <circle
                    key={index}
                    cx={particle.x}
                    cy={particle.y}
                    r={Math.random() * 6}
                    fill="#f39c12"  // You can change the color of the confetti particles
                />
            ))}
        </svg>
    );
};

export default ConfettiParticle;
