import './App.css'
import NavBar from "./Components/NavBar.jsx";
import ArtPiece from "./Components/ArtPiece.jsx";
import ArtPiecesData from "./assets/HardcodedData.js"

function App() {


    const artPiecesContent = ArtPiecesData.map(artPiece => (<ArtPiece {...artPiece} />));

    return (
        <>
            <NavBar/>
            <div className="gallery">
                {artPiecesContent}
            </div>
        </>
    )
}

export default App
