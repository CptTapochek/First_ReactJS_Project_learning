import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo_name}>Project Name</div>
            <div className={style.search_block}>
                <button className={style.search_button} title={"Search"}>
                    <img src={"https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/search-3-256.png"}/>
                </button>
                <input className={style.search_input} placeholder={"Search here..."}/>
            </div>
            <div className={style.sign_up}>
                <button>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;