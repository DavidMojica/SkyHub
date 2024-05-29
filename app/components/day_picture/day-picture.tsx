'use client'

import RainbowTitle from "../rainbow_title";

interface dayPictureInterface {
    title: string;
    date: string;
    media_element: string;
    explanation: string;
    isVideo: boolean;
}

export const PictureOfTheDay = (props: dayPictureInterface): React.JSX.Element => {

    return (
        <main className="font-poppins flex justify-center py-8">
            <article className="container">
                <RainbowTitle text="NASA's Astronomy Picture of the Day" />
                <h2 className="font-bold text-xl text-sky-500 dark:text-purple-600 transition-all mt-4">
                    {props.title}
                </h2>
                <p id="date" className="font-bold text-xl text-sky-500 dark:text-purple-600 transition-all mt-1">
                    {props.date}
                </p>
                {
                    props.isVideo
                        ?
                        <section className="picture-explanation-container">
                            <article id="media_container" dangerouslySetInnerHTML={{ __html: props.media_element }}></article>
                            <p className="font-medium text-xl text-justify leading-8 text-black dark:text-slate-100 transition-all">
                                {props.explanation}
                            </p>
                        </section>
                        :
                        <section className="flex justify-center gap-4">
                            <article id="media_container" className="w-1/3 rounded-xl shadow-lg shadow-gray-200">
                                <img src={props.media_element} alt={props.title} className="rounded-xl" />
                            </article>
                            <article className="w-1/2">
                                <p className="font-medium text-xl text-justify leading-8 text-black dark:text-slate-100 transition-all">
                                    {props.explanation}
                                </p>
                            </article>
                        </section>
                }
            </article>
        </main>
    )
} 
