/**
 * VideoCard
 *
 * Props:
 *  - title       string   (required)
 *  - id          string   (optional) — HTML id for anchor scroll
 *  - description string   (optional)
 *  - portrait    boolean  (optional) — use 9:16 aspect ratio for vertical/Shorts/Instagram
 *  - videoId     string   — YouTube videoId, used when embedUrl is not provided
 *  - embedUrl    string   — full custom embed URL (YouTube with timestamps, Instagram, etc.)
 */
export default function VideoCard({ title, videoId, description, embedUrl, portrait, id }) {
    const src = embedUrl ?? `https://www.youtube.com/embed/${videoId}`
    const aspectPadding = portrait ? '177.78%' : '56.25%'

    return (
        <div id={id} className="video-card">
            <p className="video-title">{title}</p>
            <div className="video-embed-wrapper" style={{ paddingBottom: aspectPadding }}>
                <iframe
                    src={src}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            {description && (
                <p className="video-description">{description}</p>
            )}
        </div>
    )
}
