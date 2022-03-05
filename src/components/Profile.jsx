import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://wallpaperforu.com/wp-content/uploads/2020/07/neon-wallpaper-200702140825151366x768.jpg"></img>
            </div>
            <div>
                avatar + description
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