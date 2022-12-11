import Image from "next/image";
import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Collapse } from "@nextui-org/react";
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
            <div onClick={handler} className="fixed  bg-gray-500 hover:scale-105 active:scale-95 duration-150 rounded-full w-[55px] h-[55px]  bottom-4 right-3 z-50">
                <Image className="my-auto  mx-auto" src={`/chaticon.png`} width={40} height={40}/>
            </div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Здесь вы можете увидеть ответы на самые часто задаваемые вопросы
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Collapse.Group accordion={false}>
                    {DataForChat.map((item,index)=>{
                        return(<div  key={index}>
                            <Collapse title={item.title}><Text size={14}>{item.description}</Text></Collapse>



                        </div>)
                    })}
                    </Collapse.Group>


                </Modal.Body>

            </Modal>
        </div>
    );
}