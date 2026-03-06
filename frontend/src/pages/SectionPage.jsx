import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

const SQUAT_DESCRIPTION = 'Il re degli esercizi'
const PANCA_DESCRIPTION = 'La regina della precisione'
const STACCO_DESCRIPTION = 'Il principe della forza'
const MOBILITA_DESCRIPTION = 'Muoviti meglio, solleva di più'
const STRETCHING_DESCRIPTION = 'Recupera e previeni gli infortuni'
const DIPS_DESCRIPTION = 'I cavalieri dell\'ipertrofia'
const TRAZIONI_DESCRIPTION = 'I ninja della schiena'
const COMPLEMENTARI_DESCRIPTION = 'Esercizi che fanno la differenza'

const SQUAT_ICON = '🏋️'
const PANCA_ICON = '💪'
const STACCO_ICON = '🚢'
const MOBILITA_ICON = '⬅️'
const STRETCHING_ICON = '➡️'
const DIPS_ICON = '⚔️'
const TRAZIONI_ICON = '🥷'
const COMPLEMENTARI_ICON = '⚡️'

const sectionMeta = {
    squat: { tag: 'Per gambe come pistoni', icon: SQUAT_ICON },
    panca: { tag: 'Per un petto come una corazza', icon: PANCA_ICON },
    stacco: { tag: 'Per una schiena come una portaerei', icon: STACCO_ICON },
    mobilita: { tag: 'Pre-allenamento', icon: MOBILITA_ICON },
    stretching: { tag: 'Post-allenamento', icon: STRETCHING_ICON },
    dips: { tag: 'Per tricipiti come cannoni', icon: DIPS_ICON },
    trazioni: { tag: 'Per una schiena che non passa dalle porte', icon: TRAZIONI_ICON },
    complementari: { tag: 'Per diventare un atleta completo', icon: COMPLEMENTARI_ICON },
}

// Sections that get the expandable extra panels
const EXPANDABLE_SECTIONS = ['squat', 'panca', 'stacco', 'dips', 'trazioni']

function AccordionSection({ title, icon, children, defaultOpen = false, targetHash = '' }) {
    // Auto-open if the hash targets a video inside this accordion
    const autoOpen = targetHash ? children?.props?.children?.some?.(
        child => child?.props?.id === targetHash.replace('#', '')
    ) : false
    const [open, setOpen] = useState(defaultOpen || autoOpen)

    // Re-evaluate if hash changes after mount
    useEffect(() => {
        if (autoOpen) setOpen(true)
    }, [autoOpen])

    return (
        <div className={`accordion ${open ? 'accordion--open' : ''}`}>
            <button
                className="accordion-header"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span className="accordion-title">
                    {icon && <span className="accordion-icon">{icon}</span>}
                    {title}
                </span>
                <span className="accordion-chevron" aria-hidden="true">
                    {open ? '▲' : '▼'}
                </span>
            </button>

            <div className="accordion-body" style={{ display: open ? 'block' : 'none' }}>
                {children}
            </div>
        </div>
    )
}

export default function SectionPage({ section }) {
    const [content, setContent] = useState(null)
    const location = useLocation()
    const meta = sectionMeta[section] || {}
    const isExpandable = EXPANDABLE_SECTIONS.includes(section)
    const hash = location.hash // e.g. '#video-hyemQWpldOA'

    useEffect(() => {
        setContent(null)
        fetch(`http://localhost:8000/api/content/${section}`)
            .then(r => r.json())
            .then(setContent)
            .catch(() => setContent(null))
    }, [section])

    // Scroll to anchor after content loads
    useEffect(() => {
        if (!content || !hash) return
        const id = hash.slice(1)
        const timer = setTimeout(() => {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 250)
        return () => clearTimeout(timer)
    }, [content, hash])

    if (!content) return <div className="loading">Caricamento...</div>

    return (
        <>
            {/* Section Hero */}
            <section className="section-hero" data-title={content.title}>
                <span className="section-hero-tag">{meta.icon} {meta.tag}</span>
                <h1 className="section-hero-title">{content.title}</h1>
                <p className="section-hero-subtitle">{content.subtitle}</p>
            </section>

            {/* Description */}
            <div className="content-section">
                <h2 className="section-heading">Panoramica</h2>
                <div className="section-divider" />
                <p className="section-text">{content.description}</p>

                {/* Tips */}
                {content.tips?.length > 0 && (
                    <>
                        <h2 className="section-heading" style={{ marginTop: '3rem' }}>
                            🔑 Passaggi Fondamentali
                        </h2>
                        <div className="section-divider" />
                        <div className="tips-grid">
                            {content.tips.map((tip, i) => (
                                <div key={i} className="tip-card">
                                    <span className="tip-icon">✦</span>
                                    <span className="tip-text">{tip}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Expandable sections (only for squat, panca, stacco, dips, trazioni) */}
            {isExpandable && (
                <div className="accordion-section-wrapper">

                    {/* Tecnica di esecuzione */}
                    {content.tecnica?.length > 0 && (
                        <AccordionSection title="Tecnica di esecuzione" icon="📐" targetHash={hash}>
                            <div className="video-grid accordion-video-grid">
                                {content.tecnica.map(v => (
                                    <VideoCard key={v.videoId + v.title} id={`video-${v.videoId}`} title={v.title} videoId={v.videoId} description={v.description} />
                                ))}
                            </div>
                        </AccordionSection>
                    )}

                    {/* Spiegazione varianti */}
                    {content.varianti?.length > 0 && (
                        <AccordionSection title="Spiegazione varianti" icon="🔀" targetHash={hash}>
                            <div className="video-grid accordion-video-grid">
                                {content.varianti.map(v => (
                                    <VideoCard key={v.videoId + v.title} id={`video-${v.videoId}`} title={v.title} videoId={v.videoId} description={v.description} />
                                ))}
                            </div>
                        </AccordionSection>
                    )}

                    {/* Video Tutorial — expandable */}
                    {content.videos?.length > 0 && (
                        <AccordionSection title="Video Tutorial" icon="▶️" targetHash={hash}>
                            <div className="video-grid accordion-video-grid">
                                {content.videos.map(v => (
                                    <VideoCard key={v.videoId} id={`video-${v.videoId}`} title={v.title} videoId={v.videoId} description={v.description} />
                                ))}
                            </div>
                        </AccordionSection>
                    )}

                    {/* Storico Alzate */}
                    {content.storico?.length > 0 && (
                        <AccordionSection title="Storico Alzate" icon="📊" targetHash={hash}>
                            <div className="video-grid accordion-video-grid">
                                {content.storico.map(v => (
                                    <VideoCard key={v.videoId + v.title} id={`video-${v.videoId}`} title={v.title} videoId={v.videoId} description={v.description} />
                                ))}
                            </div>
                        </AccordionSection>
                    )}
                </div>
            )}

            {/* Non-expandable sections: keep original video layout */}
            {!isExpandable && content.videos?.length > 0 && (
                <div className="videos-section">
                    <h2 className="section-heading">Video Tutorial</h2>
                    <div className="section-divider" />
                    <div className="video-grid">
                        {content.videos.map(v => (
                            <VideoCard key={v.videoId} title={v.title} videoId={v.videoId} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
