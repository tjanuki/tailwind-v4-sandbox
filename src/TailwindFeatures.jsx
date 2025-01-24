import React, { useState } from 'react';

const TailwindFeatures = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="space-y-8">
            {/* Native Color System with OKLCH */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">New Color System (OKLCH)</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-neon-pink p-4 rounded text-white text-center">
                        Neon Pink
                    </div>
                    <div className="bg-neon-lime p-4 rounded text-black text-center">
                        Neon Lime
                    </div>
                    <div className="bg-neon-cyan p-4 rounded text-black text-center">
                        Neon Cyan
                    </div>
                </div>
            </section>

            {/* Container Queries */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Container Queries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="@container">
                        <div className="bg-gray-100 rounded p-4">
                            <p className="@[400px]:text-xl @[200px]:text-sm transition-all">
                                This text changes size based on container width.
                                Try resizing your browser!
                            </p>
                        </div>
                    </div>
                    <div className="@container">
                        <div className="@[400px]:grid @[400px]:grid-cols-2 @[200px]:block gap-4">
                            <div className="bg-gray-100 p-4 rounded mb-4 @[400px]:mb-0">
                                Card 1
                            </div>
                            <div className="bg-gray-100 p-4 rounded">
                                Card 2
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Composable Variants */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Composable Variants</h2>
                <div className="space-y-4">
                    <div className="group">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 bg-gray-100 rounded group-hover:bg-gray-200 transition-colors"
                        >
                            Toggle Content
                        </button>
                        <div className={`
              mt-2 p-4 bg-gray-50 rounded
              transition-all
              group-has-[.open]:bg-neon-cyan/20
              ${isOpen ? 'open' : ''}
            `}>
                            Content that changes when parent has .open class
                        </div>
                    </div>

                    <label className="peer block">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                        />
                        <span className="
              block p-4 rounded
              bg-gray-100
              peer-checked:bg-neon-pink/20
              transition-colors
            ">
              Peer checked demo - click me!
            </span>
                    </label>
                </div>
            </section>

            {/* Color Mixing */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Color Mixing</h2>
                <div className="grid gap-4">
                    <div className="bg-neon-pink/50 p-4 rounded">
                        50% Neon Pink (Opacity)
                    </div>
                    <div className="bg-[color-mix(in_oklab,var(--color-neon-pink)_50%,var(--color-neon-cyan))] p-4 rounded">
                        50% Mix of Neon Pink and Cyan
                    </div>
                    <div className="bg-[color-mix(in_oklab,var(--color-neon-lime)_50%,var(--color-neon-pink))] p-4 rounded">
                        50% Mix of Neon Lime and Pink
                    </div>
                </div>
            </section>

            {/* 3D Card Flip */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">3D Card Flip</h2>
                <div className="h-64 w-full md:w-96 perspective-1000">
                    <div
                        className={`relative preserve-3d transition-transform duration-500 w-full h-full cursor-pointer
              ${isFlipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        {/* Front */}
                        <div className="absolute w-full h-full backface-hidden">
                            <div className="bg-neon-cyan/20 w-full h-full rounded-lg flex items-center justify-center p-6">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold mb-2">Front Side</h3>
                                    <p>Click to flip!</p>
                                </div>
                            </div>
                        </div>
                        {/* Back */}
                        <div className="absolute w-full h-full backface-hidden rotate-y-180">
                            <div className="bg-neon-pink/20 w-full h-full rounded-lg flex items-center justify-center p-6">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold mb-2">Back Side</h3>
                                    <p>Click to flip back!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TailwindFeatures;