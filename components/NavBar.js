import Image from "next/image";

export default function NavBar(){
    return(<>
        <nav
            role="navigation "
            className="w-full px-6 h-full  flex items-center justify-between"
        >
            <div className="ml-2 flex items-center justify-center max-w-[250px]">
                <Image
                    className=""
                    src={`/logozapasnoe.png`}
                    width={240}
                    height={90}
                    alt="Логотип Демидовского Университета"
                />

            </div>
            <ul>
                <li>123</li>
            </ul>
        </nav>

    </>)
}