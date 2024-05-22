'use client'

interface dayPictureInterface {
    title: string;
    date: string;
    media_element: string;
    explanation: string;
    isVideo: boolean;
  }

export const PictureOfTheDay = (props:dayPictureInterface): React.JSX.Element => {

    return (
        <main className="container font-poppins">
            <h1>NASA's Astronomy Picture of the Day</h1>
            <h2>{props.title}</h2>
            <p id="date">{props.date}</p>
            <section className="picture-explanation-container">
                <section id="media_container" dangerouslySetInnerHTML={{ __html: props.media_element }}></section>
              <p>{props.explanation}</p>
            </section>
          </main>
    )
} 