'use client'

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
                <h1 className="text-6xl">NASA's Astronomy Picture of the Day</h1>
                <h2 className="text-xl">{props.title}</h2>
                <p id="date">{props.date}</p>
                {
                    props.isVideo
                        ?
                        <section className="picture-explanation-container">
                            <article id="media_container" dangerouslySetInnerHTML={{ __html: props.media_element }}></article>
                            <p>{props.explanation}</p>
                        </section>
                        :
                        <section className="flex justify-center gap-4">
                            <article id="media_container" className="w-1/3 rounded-xl shadow-lg shadow-gray-200">
                                <img src={props.media_element} alt={props.title} className="rounded-xl" />
                            </article>
                            <article className="w-1/2">
                                <p className="text-lg text-justify leading-8">{props.explanation}</p>
                            </article>
                        </section>
                }
            </article>
        </main>
    )
} 
