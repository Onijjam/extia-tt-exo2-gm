import TableHeader from "./TableHeader.jsx";
import TableContent from "./TableContent.jsx";

function Table () {

    return (
                <div className="bg-gray-900 py-10 rounded-xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <TableHeader />
                        <TableContent />
                    </div>
                </div>
    )
}

export default Table;