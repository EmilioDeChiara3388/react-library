import MainMenu from "../components/MainMenu";

export default function Home() {
    return (
        <>
            <header>
                <div className="logo">Logo</div>
                <MainMenu />
            </header>
            <main>
                <div className="container">
                    <h1>Home Page</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo facilis est tempore similique inventore sequi animi temporibus aut reiciendis possimus, aliquam sapiente neque harum voluptatibus quasi praesentium ratione perspiciatis repudiandae?</p>
                </div>
            </main>
            <footer>
                <p>Copyrights 2024</p>
            </footer>
        </>
    )
}