import Image from "next/legacy/image";

const slides = [
    "/img/carousel/MelodyMania-Steam-Main-Capsule.jpg",
    "/img/carousel/OnTheRun-TwoTeams-PassTheMic-StreamingNotes.jpg",
    "/img/carousel/SonicRainboom-TwoPlayers-StaticNotes-SameLyrics.jpg",
    "/img/carousel/TeamResults-FinalRound.jpg",
]

const SlideIndicator = (props: {index: number}) => 
{
    return <button className={props.index === 0 ? 'active' : ''} type="button"
                   data-bs-target="#image-carousel" data-bs-slide-to={props.index}></button>
}

const SlideImage = (props: {index: number, path: string}) =>
{
    return <div className={`carousel-item ${props.index === 0 ? 'active' : ''}`} style={{textAlign: 'center'}}>
                <div className="image-container">
                    <Image src={props.path} alt="" layout="fill" objectFit="contain" />
                </div>
            </div>
}

const ImageCarousel = () => (
<>
    <div className="col-lg-6">
        <div id="image-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                { slides.map(slide => <SlideImage key={slides.indexOf(slide)} index={slides.indexOf(slide)} path={slide} />) }
            </div>
            <div className="carousel-indicators">
                { slides.map(slide => <SlideIndicator key={slides.indexOf(slide)} index={slides.indexOf(slide)} />) }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#image-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#image-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</>
)

export default ImageCarousel