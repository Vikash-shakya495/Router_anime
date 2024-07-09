import React from 'react';

const Home = () => {
    return (
        <div className="flex">
            <div className="flex-1 p-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img src='https://i.pinimg.com/564x/7d/07/74/7d0774c44f6768a8e5696edff37731e9.jpg' alt='Gojo Satoru' className="w-full h-3/6 object-cover" />
                    
                </div>
            </div>
            <div className="flex-1 p-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <div className="p-4 flex flex-col justify-evenly items-evenly h-screen bg-blue-950 text-white">
                    <div className="p-4 bg-slate-900 text-center rounded-lg">
                        <h2 className="text-4xl font-bold border-spacing-3 ">Gojo Satoru</h2>
                    </div>
                        <p className="text-2xl">Gojo possesses the unique "Infinity" technique, allowing him to manipulate space, and the "Six Eyes," a rare trait that enhances his Jujutsu capabilities. These abilities are central to his character and contribute to his reputation as an exceptionally powerful sorcerer.</p>
                        <p className="text-lg">Satoru is a very tall, lean and muscular man who is in his late twenties and is considered relatively attractive, mainly due to his facial features. He has snow-white hair and the Six Eyes, which are a vibrant blue color. Satoru normally covers his eyes with a black blindfold which props up his hair and gives it a spikier appearance. When sporting a more casual look, Satoru will wear sunglasses and let his hair down to reach the base of his neck.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
