import '../App.css'
import Color, {useColor} from 'color-thief-react';

export default function NavBar() {

    const imageSource = `./images/Logo.png`;

    const {data, loading, error} = useColor(imageSource, "hex")
    console.log(loading);
    console.log(error)

    return (
        <>
            <div className="navBar" style={{backgroundColor: data}}>
                <a className="logo" href="https://www.scruffybrush.ca" target="_blank">
                    <img src="./images/Logo.png"/>
                </a>
                <h1>Art-chive</h1>
            </div>
        </>
    )
}
