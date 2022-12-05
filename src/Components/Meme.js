// import memesData from "../memesData"
import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1g8my4.jpg"
    })

    let [allMemeImages, setAllMemeImages] = useState()

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    },[allMemeImages])
    

    function RandomMeme() {

        const memeArray = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memeArray.length)
        setMeme(oldMeme => ({
            ...oldMeme,
            randomImage: allMemeImages.data.memes[random].url
        }))
    }
    function handleChanges(event){
        
        const {name, value} = event.target
        console.log(value)
        setMeme( oldMeme => {
            return({
                ...oldMeme,
                [name] : value
            })
        })

    }
    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="Top text" 
                    type="text" 
                    onChange={handleChanges}
                    name="topText"
                    value={meme.topText}

                />
                <input 
                    className="form--input" 
                    placeholder="Button text" 
                    type="text"
                    onChange={handleChanges}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button type="submit"onClick={RandomMeme} className="form--button">
                    Get a new meme image 🖼 
                </button>
            </div>
            {meme.randomImage!=="" && 
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>}
        </main>
        
    )
}