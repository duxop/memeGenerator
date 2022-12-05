import logo from "../image/troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={logo} className="header--img" alt="logo"/>
            <h2 className="header--h2">Meme Generator</h2>
            <h5 className="header--h5">React course - 3</h5>
        </header>
    )
}