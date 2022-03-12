import style from './Profile.module.css';
import Post from './Post/Post'

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.post}>
                <div className={style.post_cover}>
                    <img src={"https://www.teahub.io/photos/full/162-1620611_nature-wallpapers-hd-background-wallpaper-widescreen-full-screen.jpg"}/>
                </div>
                <div>
                    <div className={style.post_title}>
                        Pellentesque in ipsum id orci porta dapibus
                    </div>
                    <div className={style.post_author}>
                        By Andrei Bozu
                    </div>
                    <div className={style.realise_date}>
                        Feb 23, 2022
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.post_cover}>
                    <img src={"https://monitormedia.ro/wp-content/uploads/2020/09/top-gear.jpg"}/>
                </div>
                <div>
                    <div className={style.post_title}>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </div>
                    <div className={style.post_author}>
                        By Andrei Bozu
                    </div>
                    <div className={style.realise_date}>
                        Feb 16, 2022
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.post_cover}>
                    <img src={"https://ichef.bbci.co.uk/news/1024/branded_news/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg"}/>
                </div>
                <div>
                    <div className={style.post_title}>
                        Donec rutrum congue leo eget malesuada.
                    </div>
                    <div className={style.post_author}>
                        By Andrei Bozu
                    </div>
                    <div className={style.realise_date}>
                        Dec 11, 2021
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.post_cover}>
                    <img src={"https://e3.365dm.com/19/09/2048x1152/skynews-drew-scanlon-blinking-white-guy_4786055.jpg"}/>
                </div>
                <div>
                    <div className={style.post_title}>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </div>
                    <div className={style.post_author}>
                        By Andrei Bozu
                    </div>
                    <div className={style.realise_date}>
                        Nov 14, 2021
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;