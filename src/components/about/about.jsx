import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                             Chocolates
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Chocolates, the enchanting symphony of cocoa and sweetness, are like tiny drops of joy that gracefully pirouette on the taste buds. With each velvety bite, they weave tales of indulgence, wrapping the senses in a decadent embrace. Whether dark and mysterious or milk-chocolaty comfort, these divine confections are the alchemists of happiness, turning the ordinary into extraordinary. In the world of chocolates, every moment becomes a celebration, and every occasion, a sweet rendezvous with bliss. So, unwrap a piece of delight, let it melt on your tongue, and savor the magic that only chocolates can conjure. Life is too short for anything less than a moment of pure chocolatey euphoria.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Chocolates: a symphony of cocoa whispers, enchanting the senses with each velvety note of sweetness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}