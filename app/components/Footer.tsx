

export const Footer = ()=>{
    return (
        <footer className="bg-[#050a18] py-8 px-4 flex flex-col items-center space-y-4">
            <div className="flex w-3/4 items-center  text-xl flex-col lg:flex-row font-semibold justify-between">
                <span>657857548 - 679840680</span>
                <span> manichdebami@gmail.com</span>
                <span>Yaounde, Cameroun</span>
            </div>
            <span>
            {'copy write'} &copy; {new Date().getFullYear()} MANICH DIBAKTO
            </span>
        </footer>
    )
}