function TableHeader() {
    return (
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold text-white">Pays</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Une liste de tous les pays récupérés à l'aide de GraphQL.
                </p>
            </div>
        </div>
    )
}

export default TableHeader;