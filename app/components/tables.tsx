import React, { useEffect } from 'react'

export const PeopleInTheSpaceTable = ({ people }: { people: { name: string; craft: string }[] }): React.JSX.Element => {
    const placePeople = async (): Promise<void> => {
        const tbody = document.getElementById('tbody');

        if (tbody) {
            tbody.innerHTML = '';
            for (const person of people) {
                tbody.innerHTML += `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${person.name}
                        </th>
                        <td class="px-6 py-4">
                            ${person.craft}
                        </td>
                    </tr>
                `;
            }
        }
    }

     useEffect(() => {
        placePeople();
    }, []);

    return (
        <>
            <section className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nave o misión
                            </th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>

                    </tbody>
                </table>
            </section>
        </>
    )
}

export const PlanetDetailTable = ({planeta, afelio, perihelio, gravedad, tiempo_orbita, tiempo_rotacion, densidad, temperatura, escape, radio_ecuatorial, radio_polar, radio_medio, masa, descubierto_fecha, descubierto_por, lunas}: 
    {planeta:string, afelio:number, perihelio:number, gravedad:number, tiempo_orbita:number, tiempo_rotacion:number, densidad:number, temperatura:number, escape:number, radio_ecuatorial:number, radio_polar:number, radio_medio:number, masa:{[key:string]:number}, descubierto_fecha:string, descubierto_por:string, lunas:string[]}):React.JSX.Element => {
  return (
    <section className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Rasgo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Medida
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Valor
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Descripcion
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* Rotación */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Periodo de rotación
                    </th>
                    <td className="px-6 py-4">
                        Tiempo
                    </td>
                    <td className="px-6 py-4">
                        {(Math.round(tiempo_rotacion)/24).toFixed(2)} Días <br />
                        {Math.round(tiempo_rotacion).toFixed(0)} Horas
                    </td>
                    <td className="px-6 py-4">
                        El periodo de rotación es el tiempo que un cuerpo tarda en dar una vuelta sobre sí mismo. Esto es lo que llamamos ciclo día/noche.
                        <blockquote>
                            <small>Periodo de rotación en la tierra: 1 día / 24 horas</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Translación */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Periodo orbital o translación.
                    </th>
                    <td className="px-6 py-4">
                        Tiempo
                    </td>
                    <td className="px-6 py-4">
                        {tiempo_orbita.toFixed(0)} Días <br />
                        {(tiempo_orbita/365).toFixed(2)} Año(s)
                    </td>
                    <td className="px-6 py-4">
                    El período orbital es el tiempo que tarda un planeta u otro objeto en realizar una órbita completa al rededor de su estrella.
                        <blockquote>
                            <small>Periodo orbital de la tierra: 365 días / 1 año</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Gravedad */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Gravedad
                    </th>
                    <td className="px-6 py-4">
                        Velocidad
                    </td>
                    <td className="px-6 py-4">
                        {gravedad} Metros / Seg
                    </td>
                    <td className="px-6 py-4">
                        La gravedad es un fenómeno natural por el cual los objetos y campos de materia dotados de masa o energía son atraídos entre sí, efecto mayormente observable en la interacción entre los planetas, galaxias y demás objetos del universo.
                        <blockquote>
                            <small>Gravedad de la tierra: 9.8 Metros / Seg</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Afelio */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Afelio
                    </th>
                    <td className="px-6 py-4">
                        Distancia desde el planeta {planeta} al sol.
                    </td>
                    <td className="px-6 py-4">
                        {(afelio / 1000000).toFixed(2)} Millones de Kilómetros.
                    </td>
                    <td className="px-6 py-4 w-2/5">
                        El afelio es el punto más alejado de la órbita de un planeta alrededor de su estrella, dependiendo de la lejanía a ella, su temperatura puede disminuir considerablemente.
                        <blockquote>
                            <small>La Tierra está al afelio en el 3 de julio, aproximadamente.</small>​ 
                        </blockquote>
                    </td>
                </tr>
                {/* Perihelio */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Perihelio
                    </th>
                    <td className="px-6 py-4">
                        Distancia desde el planeta {planeta} al sol.
                    </td>
                    <td className="px-6 py-4">
                        {(perihelio / 1000000).toFixed(2)} Millones de Kilómetros.
                    </td>
                    <td className="px-6 py-4">
                        El perihelio es el punto más cercano de la órbita de un planeta al rededor de su estrella,dependiendo de su cercania a ella, puede causar incrementos en su temperatura. <br /> 
                        <blockquote>
                            <small>La Tierra está en el perihelio en el 3 de Enero, aproximadamente.</small>
                        </blockquote>​ ​
                    </td>
                </tr>
                {/* Densidad */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Densidad
                    </th>
                    <td className="px-6 py-4">
                        g/Cm<sup>3</sup>
                    </td>
                    <td className="px-6 py-4">
                        {densidad.toFixed(2)} g/Cm<sup>3</sup>
                    </td>
                    <td className="px-6 py-4">
                    La densidad de un planeta se define como la relación entre su masa y el volumen que ocupa.
                        <blockquote>
                            <small>Densidad de la tierra: 5.51 g/cm<sup>3</sup></small>
                        </blockquote>
                    </td>
                </tr>
                {/* Temperatura */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Temperatura promedio
                    </th>
                    <td className="px-6 py-4">
                        Grados centígrados
                    </td>
                    <td className="px-6 py-4">
                        {temperatura-273} C°
                    </td>
                    <td className="px-6 py-4">
                        El promedio de la temperatura de la atmósfera del planeta, normalmente en su nivel más superficial
                        <blockquote>
                            <small>Temperatura promedio en la tierra: 14 C°</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Escape */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Velocidad de escape
                    </th>
                    <td className="px-6 py-4">
                        Kilómetros por segundo
                    </td>
                    <td className="px-6 py-4">
                        {escape} Km/s
                    </td>
                    <td className="px-6 py-4">
                        La velocidad de escape de un planeta es la velocidad mínima que un objeto necesita alcanzar para escapar completamente de la influencia gravitatoria del planeta y llegar al espacio abierto.
                        <blockquote>
                            <small>Velocidad de escape de la tierra: 11.19Km/s o 40280Km/h</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Radio */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Radio
                    </th>
                    <td className="px-6 py-4">
                        Kilómetros
                    </td>
                    <td className="px-6 py-4">
                        Radio ecuatorial: {radio_ecuatorial.toFixed(0)} Kms <br />
                        Radio polar: {radio_polar.toFixed(0)} Kms <br />
                        Radio medio: {radio_medio.toFixed(0)} Kms
                    </td>
                    <td className="px-6 py-4">
                        Se toma una regla desde el centro del planeta y se mide la distancia hacia el borde del mismo. Esa distancia se llama Radio.
                        <blockquote>
                            <small>Radio de la tierra: 6.378Km</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Masa */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Masa
                    </th>
                    <td className="px-6 py-4">
                        Toneladas
                    </td>
                    <td className="px-6 py-4">
                        {`${masa['massValue'].toFixed(3)}`}x 10<sup>{`${masa['massExponent']}`}</sup> Tons
                    </td>
                    <td className="px-6 py-4">
                        Peso del objeto.
                        <blockquote>
                            <small>Masa de la tierra: 5.972 x10<sup>24</sup> toneladas</small>
                        </blockquote>
                    </td>
                </tr>
                {/* Descubrimiento */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Descubrimiento
                    </th>
                    <td className="px-6 py-4">
                        Persona - Fecha
                    </td>
                    <td className="px-6 py-4">
                        Descubierto por: {descubierto_por} <br />
                        Fecha descubrimiento: {descubierto_fecha}
                    </td>
                    <td className="px-6 py-4">
                        Fecha y actor del descubrimiento del planeta.
                    </td>
                </tr>
                {/* Lunas */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Número de lunas
                    </th>
                    <td className="px-6 py-4">

                    </td>
                    <td className="px-6 py-4">
                        {lunas?.length||0} luna(s)
                    </td>
                    <td className="px-6 py-4">
                        Cantidad de satélites naturales del objeto
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

