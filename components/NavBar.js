    import Image from "next/image";
import Link from "next/link"
export default function NavBar(){
    return(<>
        <nav
            role="navigation "
            className="w-full bg-nav px-6 h-full  flex items-center justify-between"
        >
            <Link href="#"><div className="ml-2  max-w-[50px] md:max-w-[90px] flex flex-col items-center justify-center max-w-[250px]">
                <Image
                    className="block md:hidden"
                    src={`/logo.png`}
                    width={35}
                    height={35}
                    alt="Логотип Ярославского государственнго Университета им П.Г. Демидова"
                />
                <Image
                    className="hidden md:block"
                    src={`/logo.png`}
                    width={55}
                    height={55}
                    alt="Логотип Ярославского государственнго Университета им П.Г. Демидова"
                />
                <span className="text-[7px] md:text-[13px] leading-[10px] md:leading-4 text-center text-white font-[400]">Демидовский Университет</span>
            </div></Link>
            <ul className="flex items-center justify-center">
                <Link href="#faculty " ><li className="mx-2 text-[7px] text-white cursor-pointer md:text-[20px] font-[700]">Факультеты</li></Link>
                <Link href="#activity "><li className=" mx-2 text-[7px] text-white cursor-pointer md:text-[20px] font-[700]">Активность</li></Link>
                <Link href="#community "><li className=" mx-2 text-[7px] text-white cursor-pointer md:text-[20px] font-[700]">ЯрГУ COMMUNITY</li></Link>
                <Link href="https://www.uniyar.ac.ru/"><li className=" mx-2 text-[7px] text-white cursor-pointer md:text-[20px]  md:max-w-[180px] font-[700]"><button className="border active:scale-100 hover:scale-105 duration-100 p-1 btn-afe rounded-2xl">Перейти на основной сайт</button></li></Link>
            </ul>
        </nav>

    </>)
}