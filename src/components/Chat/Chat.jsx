import style from './Chat.module.css';
import React from "react";

const Chat = () => {
    return (
        <div className={style.chat_block}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    <img className={style.avatar} src={"https://cdn.ipeeworld.com/wp-content/uploads/2021/06/funny-cat.jpeg?width=600"}></img>
                    <div className={style.name}>Andrei Bozu</div>
                </div>
                <div className={style.dialog}>
                    <img className={style.avatar} src={"https://pbs.twimg.com/profile_images/1903539737/image.jpg"}></img>
                    <div className={style.name}>Guzman Henson</div>
                </div>
                <div className={style.dialog}>
                    <img className={style.avatar} src={"https://i.pinimg.com/474x/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32--funny-animal-faces-hilarious-animals.jpg"}></img>
                    <div className={style.name}>Aida Santana</div>
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.messages_block}>
                    <div className={style.my_messages}>
                        <div className={style.username}>me</div>
                        <div className={style.message}>Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div><br></br>
                    <div className={style.my_messages}>
                        <div className={style.username}>me</div>
                        <div className={style.message}>Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div><br></br>
                    <div className={style.their_messages}>
                        <div className={style.username}>Andrei Bozu</div>
                        <div className={style.message}>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</div>
                    </div><br></br>
                </div>
                <div className={style.send_msg_block}>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;