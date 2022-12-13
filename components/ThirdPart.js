import { Collapse, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ThirdPart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="ml-10 mt-10 flex flex-col mr-auto ">
        <span className="text-xl md:text-6xl text-[#0E0544] font-[700]">
          Ты можешь поговорить с нами
        </span>
      </div>
      <div className="md:pl-8 mt-5 ">
        <Collapse.Group>
          <Collapse
            className="text-xl md:text-3xl  font-[400]"
            title="Присоединяйся к ЯрГУ COMUNITY в Discord"
          >

              <Link href="https://discord.gg/cSg4WFxFkK">
              <div className="flex p-4 items-center justify-between  ">
                <div className={`mr-2 hover:bg-[#C8C8C8] p-2 rounded duration-100 text-center flex items-center justify-center gap-x-2`}><Image src={`/discord.svg`} width={40} height={30}/> ЯрГУ в Discord</div>
              </div>
              </Link>

          </Collapse>
          <Collapse
            className="text-xl md:text-3xl font-[400]"
            title="Присоединяйся к ЯрГУ COMUNITY  в Telegram"
          >
            <Link href="https://t.me/DemidHelpForEntrant_bot">
            <div className="flex  p-4 items-center justify-between  ">
              <div className={`ml-2 hover:bg-[#C8C8C8] p-2 rounded duration-100 text-center flex items-center justify-center gap-x-2`}><Image src={`/tg.svg`} width={40} height={30}/>ЯрГУ в Telegram</div>
            </div>
            </Link>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}
