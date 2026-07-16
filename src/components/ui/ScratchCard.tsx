import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface ScratchCardProps {
    children: React.ReactNode;
    className?: string;
    brushSize?: number;
    revealThreshold?: number; // 0 to 1
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
    children,
    className,
    brushSize = 40,
    revealThreshold = 0.5,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container || isRevealed) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        // Ensure canvas sizing matches container
        const resizeCanvas = () => {
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            
            // Fill with scratch cover color
            ctx.fillStyle = '#1a0b2e'; // Theme dark color
            ctx.fillRect(0, 0, width, height);

            // Add text "Scratch to reveal"
            ctx.fillStyle = '#8B5CF6'; // Theme purple
            ctx.font = `bold ${Math.max(16, width / 12)}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Scratch to Reveal', width / 2, height / 2);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [isRevealed]);

    const getMousePos = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const handleScratch = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDrawing || isRevealed) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d', { willReadFrequently: true });
        if (!canvas || !ctx) return;

        // Note: Prevent default for touch is better handled passively/non-passively depending on use case.
        // We will just do standard mouse tracking.

        const { x, y } = getMousePos(e);

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, brushSize, 0, Math.PI * 2);
        ctx.fill();
        // Check reveal less frequently by just checking on mouse up, but let's do it every move for now
        checkReveal();
    };

    const checkReveal = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d', { willReadFrequently: true });
        if (!canvas || !ctx) return;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let clearedPixels = 0;

        for (let i = 3; i < pixels.length; i += 16) { // Check every 4th pixel for speed
            if (pixels[i] === 0) clearedPixels++;
        }

        const totalPixelsToCheck = pixels.length / 16;
        const clearedPercentage = clearedPixels / totalPixelsToCheck;

        if (clearedPercentage > revealThreshold) {
            setIsRevealed(true);
        }
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        handleScratch(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        checkReveal(); // Check fully when they lift pen/mouse
    };

    return (
        <div 
            ref={containerRef} 
            className={cn("relative overflow-hidden select-none", className)}
        >
            <div className="w-full h-full">
                {children}
            </div>

            <canvas
                ref={canvasRef}
                className={cn(
                    "absolute top-0 left-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-700",
                    isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                onMouseDown={startDrawing}
                onMouseMove={handleScratch}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={handleScratch}
                onTouchEnd={stopDrawing}
            />
        </div>
    );
};
