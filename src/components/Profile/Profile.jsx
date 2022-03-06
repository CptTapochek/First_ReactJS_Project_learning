import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.background}>
                <img src="https://wallpaperforu.com/wp-content/uploads/2020/07/neon-wallpaper-200702140825151366x768.jpg"></img>
            </div>
            <div className={style.user_info}>
                <img className={style.avatar} src={"https://cdn.ipeeworld.com/wp-content/uploads/2021/06/funny-cat.jpeg?width=600"}></img>
            </div>
            <div>
                My posts
                <div>new post</div>
            </div>

            <div>
                <div className={style.item}>post 1</div>
                <div className={style.item}>post 2</div>
                <div>post 3</div>
            </div>

        </div>
    );
}

export default Profile;