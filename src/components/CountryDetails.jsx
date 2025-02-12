import {DialogTitle} from "@headlessui/react";
import {graphql, useFragment} from "react-relay";
import Card from "./Card.jsx";

function CountryDetails({ close, selectedCountry }) {

    const CountryDetailsFragment = graphql`
        fragment CountryDetailsFragment on Country {
            languages {
                name
            }
            continent {
                name
            }
            currency
            phone
        }
    `

    const data = useFragment(
        CountryDetailsFragment,
        selectedCountry,
    )

    return (
        <>
            <div>
                <div className="mt-2 text-center">
                    <DialogTitle as="h3" className="text-xl mb-2 font-semibold text-white">
                        Détails
                    </DialogTitle>
                    <div className={"w-full flex gap-x-2"}>
                        <div className="mt-2 flex gap-x-2 w-full">
                            <Card title={"Langages"} >
                                    {data.languages.map((language, index) => (
                                        <ul key={index} className="max-w-md space-y-1 list-disc list-inside text-indigo-500 font-bold">
                                            <li>{language.name}</li>
                                        </ul>
                                    ))}
                            </Card>
                        </div>
                        <div className="mt-2 flex flex-col gap-y-2 w-full">
                            <Card title={"Devise"} >
                                    <div className="text-xl text-indigo-500 font-bold">
                                        {data.currency}
                                    </div>
                            </Card>
                            <Card title={"Continent"} >
                                    <div className="text-xl text-indigo-500 font-bold">
                                        {data.continent.name}
                                    </div>
                            </Card>
                            <Card title={"Téléphone"} >
                                    <div className="text-xl text-indigo-500 font-bold">
                                        +{data.phone}
                                    </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    onClick={close}
                    className="inline-flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Retour
                </button>
            </div>
        </>
    )
}

export default CountryDetails;