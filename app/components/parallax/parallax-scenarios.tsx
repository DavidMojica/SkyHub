'use client';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';

export const MoonlightScene = ():React.JSX.Element => {
    useEffect(() => {
        const moonlightScene = Atropos({
            el: '.a-moonlight',
        });
    }, []);

    return (
        <section className="a-moonlight mainScene h-full w-3/5 aspect-video m-auto atropos hidden dark:block" id="a-moonlight">
            <article className="atropos-scale">
                <article className="atropos-rotate">
                    <article className="atropos-inner relative bg-gradient-to-b from-slate-900 via-purple-900 to-pink-500 rounded-2xl text-center items-center">
                        <img src="./parallax/moonlight-scene/night-stars.png" alt="stars" className="absolute object-cover -top-mini" data-atropos-offset="-9.5" />
                        <img src="./parallax/moonlight-scene/night-moon.png" alt="moon" className="absolute object-cover mix-blend-screen" data-atropos-offset="-6.5" />
                        <img src="./parallax/moonlight-scene/night-mountains_behind.png" alt="mountains_behind" className="absolute object-cover" data-atropos-offset="-4" />           
                        <img src="./parallax/moonlight-scene/night-mountains_front.png" alt="mountains_front" className="absolute object-cover"  data-atropos-offset="0" />
                        <a href="#section2" className="bg-purple-700 text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl  hover:bg-opacity-70 duration-200 hidden md:inline-flex md:translate-y-64 lg:translate-y-72 xl:translate-y-96">Empieza el viaje </a>
                    </article>
                </article>
            </article>
        </section>
    )
}

export const ForestScene = ():React.JSX.Element =>{
    useEffect(() => {
        const forestScene = Atropos({
            el: '.a-forest',
        });
    }, []);

    return(
        <section className="a-forest h-full w-3/5 aspect-video m-auto atropos block dark:hidden" id="a-forest">
            <article className="atropos-scale">
                <article className="atropos-scale">
                    <article className="atropos-rotate">
                        <article className="atropos-inner relative bg-gradient-to-l from-yellow-200  via-yellow-100 to-blue-400 rounded-2xl text-center">
                            <img src="./parallax/forest-scene/day-mountains.png" alt="mountains_behind" className="absolute object-cover -top-6 md:-top-14 lg:-top-14 xl:-top-20" data-atropos-offset="-10.5" />
                            <img src="./parallax/forest-scene/day-forest.png" alt="forest" className="absolute object-cover" data-atropos-offset="0" />
                            <img src="./parallax/forest-scene/day-bird2.png" alt="bird2" className="absolute object-cover" data-atropos-offset="5.5" />
                            <img src="./parallax/forest-scene/day-bird1.png" alt="bird1" className="absolute object-cover" data-atropos-offset="-5.5" />
                            <img src="./parallax/forest-scene/day-rocks.png" alt="rocks" className="absolute object-cover w-extra" data-atropos-offset="1.5" />
                            <img src="./parallax/forest-scene/day-water.png" alt="water"className="absolute object-cover" />
                            <a href="#section2" className="bg-green-700 text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl  hover:bg-opacity-70 duration-200 hidden md:inline-flex md:translate-y-60 lg:translate-y-72 xl:translate-y-96">Empieza el viaje</a>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}