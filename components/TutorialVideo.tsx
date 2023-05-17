const TutorialVideo = (props: { src: string }) =>
{
    return (
        <video  controls>
            <source src={ props.src } type="video/mp4" />
            Your browser does not support the video tag.
        </video> 
    )
}

export default TutorialVideo;