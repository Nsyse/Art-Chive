import '../App.css'
import {usePalette} from 'color-thief-react';

{/* eslint-disable react/prop-types */
}

export default function ArtPiece(props) {
    const imageSource = `./images/${props.fileName}`;
    // eslint-disable-next-line no-unused-vars
    const {data, loading, error} = usePalette(imageSource, 2, "hex")

    const parsedDesc = props.description.split("\n")
        .map((line, index) => (<p className="artPiece--desc" key={index}>{line}</p>));

    const parsedMediums = props.medium.split("\n")
        .map((line, index) => (<p className="artPiece--medium" key={index}>{line}</p>));

    return (
        <>
            <div className="artPieceContainer" style={data && {backgroundColor: data[1]}}>
                <div className="artPiece" >
                    <img className="artPiece--image" src={imageSource}/>
                    <div className="artPiece--details">
                        <h1>{props.title}</h1>
                        {parsedDesc}
                        <div className="artPiece--HorizontalDetails">
                            <p className="artPiece--medium">{props.creationDate}</p>
                            <div className="artPiece--VerticalDetails">
                                {parsedMediums}
                                {props.size && <p className="artPiece--medium">Dimensions: {props.size}</p>}
                            </div>
                        </div>
                    </div>
                </div>
                {props.purchaseLink && (<a className="buyLink" target="_blank" href={props.purchaseLink}>
                    <button style={data && {backgroundColor: data[0], color:data[1]}}>See purchase options</button>
                </a>)
                }
            </div>
        </>
    )
}
