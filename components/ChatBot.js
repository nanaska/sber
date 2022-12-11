import Image from "next/image";
import React from "react";
import {Modal, Input, Row, Checkbox, Button, Text, Collapse} from "@nextui-org/react";
import RowOfQuest from "./RowOfQuest"
import {DataForChat} from "./DataForChat";

export default function ChatBot() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);

    };
    return (
        <div>
            <div onClick={handler}
                 className="fixed  bg-gray-500 hover:scale-105 active:scale-95 duration-150 rounded-full w-[55px] h-[55px]  bottom-4 right-3 z-50">
                <Image className="my-auto  mx-auto" src={`/faq.svg`} width={60} height={60}/>
            </div>
            <Modal
                closeButton
                blur
                width="800px"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={24}>
                        Этим ты можешь заниматься, помимо основной учёбы
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col items-center max-h-[600px] justify-center">

                        <Collapse.Group w accordion={false}>

                            <Collapse className="text-xl font-[400]"
                                      title={`У нас ты можешь научиться программировать`}>
                                <Text size={14}>В ЯрГУ имени Демидова проходят дополнительные курсы по изучению питона !
                                    Благодаря им любой человек, знающий как держать мышку, может изучить язык
                                    программирования Python и построить свою карьеру в IT технологиях. А если тебе
                                    нравится программирование и ты хочешь связать с ним свою жизнь, то наш факультет ИВТ
                                    к твоим услугам ! Будем рады видеть тебя в числе наших студентов.</Text>
                            </Collapse>
                            <Collapse className="text-xl font-[400]"
                                      title={`У нас ты можешь научиться делать и защищать проекты`}>
                                <div className="p-2 font-[400]">

                                    <Text className="pl-2 ">

                                        &nbsp;1. В Демиде тебя научат делать классные проекты и защищать их.
                                        У нас есть много крутых мероприятий, на которых ты сможешь узнать не только об
                                        аджайл, но так же и о множество других инструментов, которые помогут прокачать
                                        твои навыки.

                                    </Text>
                                    <Text className="pl-2 ">

                                        &nbsp;2. Благодаря школе Сбера ты сможешь узнать про аджайл и классический
                                        подход введения проектов. У тебя появится крутая возможность создать свой
                                        проект, где ты сможешь применить знания, которые тебе дали в школе.

                                    </Text></div>
                            </Collapse>
                            <Collapse className="text-xl font-[400]"
                                      title={`У нас ты можешь овладеть разговорным английском языком`}>
                                <div className="p-2 font-[400]">

                                    <Text className="pl-2 ">

                                        &nbsp;
                                        В наше время знание иностранных языков играет важную роль в жизни человека. Оно
                                        даёт много возможностей, а так же перспективы трудоустройства и карьерного
                                        роста.

                                    </Text>
                                    <Text className="pl-2 ">

                                        &nbsp;  Наш вуз, ЯрГу им. Демидова предлагает различные общеобразовательные
                                        программы для детей и взрослых, а именно:

                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp; - ДООП Разговорный курс английского языка, 60 ч
                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp; - ДООП Разговорный курс китайского языка, 60 ч
                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp; - ДООП Разговорный курс итальянского языка, 60 ч

                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp; - ДООП для школьников «Подготовка к ОГЭ по английскому языку», 90 ч
                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp;- ДООП для школьников «Подготовка к ЕГЭ по английскому языку», 90 ч

                                    </Text>
                                    <Text className="pl-2">
                                        &nbsp; - Театральная студия на английском языке (дополнительная
                                        общеобразовательная программа), 72 ч
                                    </Text>
                                </div>
                            </Collapse>
                        </Collapse.Group>
                        <div className="w-full h-[1px] border-b border-gray-400"></div>
                        <Text size={24} className="mt-2 font-[500]">Появились вопросы? Заходи к нам</Text>
                        <div className="flex p-4 items-center justify-between  ">
                            <div className={`mr-2 hover:bg-[#C8C8C8] p-2 rounded duration-100 text-center flex items-center justify-center gap-x-2`}><Image src={`/discord.svg`} width={40} height={30}/> ЯрГУ в Discord</div>
                            <div className={`ml-2 hover:bg-[#C8C8C8] p-2 rounded duration-100 text-center flex items-center justify-center gap-x-2`}><Image src={`/tg.svg`} width={40} height={30}/>ЯрГУ в Telegram</div>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </div>
    );
}