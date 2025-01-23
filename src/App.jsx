import React from 'react';
import TailwindFeatures from "./TailwindFeatures.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold">Tailwind CSS v4 Sandbox</h1>
            <TailwindFeatures/>
        </div>
    );
};

export default App;