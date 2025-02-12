import {graphql, useFragment} from "react-relay";

function Country ({ country, openModal }) {

    const CountryFragment = graphql`
        fragment CountryFragment on Country {
            emoji
            code
            name
        }
    `

    const data = useFragment(
        CountryFragment,
        country,
    )

    return (
        <tr key={data.code}>
            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">
                {data.emoji}
            </td>
            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{data.code}</td>
            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{data.name}</td>
            <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                <p onClick={() => openModal(country)} className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
                    Voir Plus<span className="sr-only">, {data.name}</span>
                </p>
            </td>
        </tr>
    )
}

export default Country;