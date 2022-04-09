import style from './Navbar.module.css';
import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {renderEntireTree} from "../../render";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className={style.star-rating}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <img
                        key={index}
                        src={index <= (hover || rating) ? "images/icons/full_star.png" : "images/icons/empty_star.png"}
                        className={style.star}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    />
                );
            })}
        </div>
    );
};


const Navbar = () => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <img src={"images/icons/telephone.svg"}/>
                +40 735945678
            </div>
            <div className={style.item}>
                <img src={"images/icons/letter.svg"}/>
                bozu168@gmail.com
            </div>
            <div className={style.chat_btn}>
                <NavLink to={"/chat"}>
                    {/*<img className={style.chat_img_w} src={"images/icons/chat_green.svg"}/>*/}
                    <img className={style.chat_img_g} src={"images/icons/chat_white.svg"}/>Chat
                </NavLink>
            </div> <br></br>
            <div className={style.stars_block}>
                <StarRating/>
            </div>
        </nav>
    );
}

export default Navbar;