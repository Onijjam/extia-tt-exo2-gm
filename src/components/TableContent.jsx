import Country from "./Country.jsx";
import {graphql, useLazyLoadQuery} from "react-relay";
import {useState} from "react";
import Modal from "./Modal.jsx";
import CountryDetails from "./CountryDetails.jsx";

function TableContent () {
    const [open, setOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const closeModal = () => {
        setOpen(false);
    }

    const openModal = (country) => {
        setSelectedCountry(country);
        setOpen(true);
    };

    const TableContentQuery = graphql`
        query TableContentQuery {
            countries {
                ...CountryFragment
                ...CountryDetailsFragment
            }
        }
    `;

    const data = useLazyLoadQuery(
        TableContentQuery,
        {},
    )

    const countries = data.countries;

    return (
        <div className="mt-8 flow-root h-96 overflow-y-auto">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                        <tr>
                            <th scope="col"
                                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">
                                Emoji
                            </th>
                            <th scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                Code
                            </th>
                            <th scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                Nom
                            </th>
                            <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                        {countries.map((country, index) => (
                            <Country key={index} country={country} openModal={openModal} />
                        ))}
                        </tbody>
                    </table>
                    <Modal open={open} close={closeModal} >
                        <CountryDetails selectedCountry={selectedCountry} close={closeModal} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default TableContent;