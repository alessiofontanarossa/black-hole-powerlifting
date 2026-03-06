export default function YouTubeEmbed({ videoId, title }) {
    return (
        <div className="video-embed-wrapper">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    )
}
