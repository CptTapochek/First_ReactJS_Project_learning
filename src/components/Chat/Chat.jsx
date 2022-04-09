import style from './Chat.module.css';
import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {renderEntireTree} from "../../render";

const my_user_id = 4;

const DialogItem = (props) => {
    return (
        <NavLink to={`/chat/${props.id}`} className={style.dialog}>
            <img className={style.avatar} src={props.avatar}/>
            <div className={style.name}>{props.name}</div>
        </NavLink>
    )
}

const MessageItem = (props) => {
    if (props.user_id === my_user_id){
        return (
            <div className={style.my_messages}>
                <div className={style.username}>{props.user_name}</div>
                <div className={style.message}>{props.message}</div><br/>
            </div>
        );
    } else {
        return (
            <div className={style.their_messages}>
                <div className={style.username}>{props.user_name}</div>
                <div className={style.message}>{props.message}</div><br/>
            </div>
        );
    }
}

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user_id: 4,
            user_name: "me",
            message: "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            user_id: 1,
            user_name: "Andrei Bozu",
            message: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
        },
        {
            id: 3,
            user_id: 4,
            user_name: "me",
            message: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        }
    ]);

    const [dialogs, setDialogs] = useState([
        {
            id: 1,
            name: "Andrei Bozu",
            user_id: 1,
            avatar: "https://cdn.ipeeworld.com/wp-content/uploads/2021/06/funny-cat.jpeg?width=600"
        },
        {
            id: 2,
            name: "Guzman Henson",
            user_id: 2,
            avatar: "https://pbs.twimg.com/profile_images/1903539737/image.jpg"
        },
        {
            id: 3,
            name: "Aida Santana",
            user_id: 3,
            avatar: "https://i.pinimg.com/474x/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32--funny-animal-faces-hilarious-animals.jpg"
        }
    ]);


    const getMessage = React.createRef();
    const SendMessage = async () => {
        let msg = {
            id: 5,
            user_id: my_user_id,
            user_name: "me",
            message: getMessage.current.value
        }
        messages.push(msg);
        await setMessages(messages);
        renderEntireTree();
    }

    let dialog_elements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let message_elements = messages
        .map(message => <MessageItem user_name={message.user_name} user_id={message.user_id} id={message.id} message={message.message}/>);

    return (
        <div className={style.chat_block}>
            <div className={style.dialogs}>
                {dialog_elements}
            </div>

            <div className={style.messages}>
                <div className={style.messages_block}>
                    {message_elements}
                </div>
                <div className={style.send_msg_block}>
                    <textarea ref={getMessage}>
                    </textarea>
                    <button onClick={SendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;