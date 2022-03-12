import style from './Post.module.css';

const Post = () => {
    return (
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
    );
}

export default Post;