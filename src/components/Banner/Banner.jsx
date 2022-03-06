import style from './Banner.module.css';

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.background_image}>

            </div>
            <div className={style.info_block}>
                <img className={style.avatar} src={"https://cdn.ipeeworld.com/wp-content/uploads/2021/06/funny-cat.jpeg?width=600"}></img>
                <div className={style.features}>
                    <div className={style.user_name}>Andrei Bozu</div>
                    <div className={style.user_job_position}>FullStack Web Developer at Company inc.</div>
                    <div className={style.user_contact_info}>
                        <div className={style.item_map}>
                            <img src={"images/icons/map_pin.svg"}/>
                            Romania, Iasi
                        </div>
                        <div className={style.item}>
                            <a href={"https://www.facebook.com/andrei.bozu"} target={"_blank"}>
                                <img src={"images/icons/facebook.svg"}/>
                                andrei.bozu
                            </a>
                        </div>
                        <div className={style.item}>
                            <a href={"https://www.linkedin.com/in/andrei-bozu-057408194/"} target={"_blank"}>
                                <img  src={"images/icons/linkedin.svg"}/>
                                andrei-bozu-057408194
                            </a>
                        </div>
                        <div className={style.item}>
                            <a href={"https://www.instagram.com/ay.bozy/"} target={"_blank"}>
                                <img src={"images/icons/instagram.svg"}/>
                                ay.bozy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;