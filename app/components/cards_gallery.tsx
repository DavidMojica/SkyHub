const GalleryCard = ({img_route,tipo, nombre}: {img_route:string; tipo:string; nombre:string}):React.JSX.Element => {
    return (
        <>
            <section className="w-96  border-solid border-2 border-blue-50">
                <article className="relative h-48 md:h-64 lg:h-72">
                    <img src={img_route} alt={nombre} className="absolute inset-0 w-full h-full object-cover" />
                </article>
                <article className="px-4 py-2 bg-white">
                    <section className="text-center">
                        <h2 className="text-xl font-bold text-gray-800">{tipo}</h2>
                        <p>{nombre}</p>
                    </section>
                </article>
            </section>
        </>
    )
}

export default GalleryCard;