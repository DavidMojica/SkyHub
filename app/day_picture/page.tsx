'use client'
export const PictureOfTheDay = (): React.JSX.Element => {
    return (
        <main className="container font-poppins">
            <h1>NASA's Astronomy Picture of the Day</h1>
            <h2>Titulo de la Foto</h2>
            <p id="date">21/05/2024</p>
            <section className="picture-explanation-container">
              <section id="media_container">
              </section>
              <p>Información: Lorem ipsum dolor sit amet.</p>
            </section>
          </main>
    )
} 
