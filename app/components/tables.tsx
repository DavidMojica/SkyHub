import React from 'react'

const PlanetDetailTable = ({planeta, afelio, perihelio}: {planeta:string, afelio:number, perihelio:number}):React.JSX.Element => {
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
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default PlanetDetailTable
