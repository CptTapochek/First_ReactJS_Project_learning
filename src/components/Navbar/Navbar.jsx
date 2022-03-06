import style from './Navbar.module.css';
import React from 'react';
import Rating from "react-rating";

React.createElement(Rating)

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
                <button>
                    {/*<img className={style.chat_img_w} src={"images/icons/chat_white.svg"}/>*/}
                    <img className={style.chat_img_g} src={"images/icons/chat_white.svg"}/>Chat
                </button>
            </div> <br></br>
            <div className={style.stars_block}>
                <Rating
                    placeholderRating={3}
                    placeholderSymbol={<img src="images/icons/full_star.png" className={style.star} />}
                    emptySymbol={<img src="images/icons/empty_star.png" className={style.star} />}
                    fullSymbol={<img src="images/icons/full_star.png" className={style.star} />}
                />
            </div>
        </nav>
    );
}

export default Navbar;