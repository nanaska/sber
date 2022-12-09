import { Collapse, Text } from "@nextui-org/react";

export default function ThirdPart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="ml-10 mt-10 flex flex-col mr-auto ">
        <span className="text-xl md:text-6xl text-[#0E0544] font-[700]">
          Ты можешь поговорить с нами
        </span>
      </div>
      <div>
        <Collapse.Group>
          <Collapse
            className="text-3xl font-[600]"
            title="Присоединяйся к ЯрГУ COMUNITY в Discord"
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse
            className="text-3xl font-[600]"
            title="Присоединяйся к ЯрГУ COMUNITY  в Telegram"
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}
