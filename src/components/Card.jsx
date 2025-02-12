function Card ({ children, title }) {
    return(
        <div
            className={"rounded-2xl cursor-default h-full w-full p-4 overflow-hidden bg-gray-800 border border-transparent dark:border-white/[0.2] hover:border-indigo-600 relative"}
        >
            <div className="flex flex-start flex-col">
                <div className="text-white">
                    {title}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Card;