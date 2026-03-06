import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { CONTENT } from '../data'

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

const sections = [
    { key: 'squat', label: 'Squat', icon: SQUAT_ICON, sub: SQUAT_DESCRIPTION },
    { key: 'panca', label: 'Panca', icon: PANCA_ICON, sub: PANCA_DESCRIPTION },
    { key: 'stacco', label: 'Stacco', icon: STACCO_ICON, sub: STACCO_DESCRIPTION },
    { key: 'mobilita', label: 'Mobilità', icon: MOBILITA_ICON, sub: MOBILITA_DESCRIPTION },
    { key: 'stretching', label: 'Stretching', icon: STRETCHING_ICON, sub: STRETCHING_DESCRIPTION },
    { key: 'dips', label: 'Dips', icon: DIPS_ICON, sub: DIPS_DESCRIPTION },
    { key: 'trazioni', label: 'Trazioni', icon: TRAZIONI_ICON, sub: TRAZIONI_DESCRIPTION },
    { key: 'complementari', label: 'Complementari', icon: COMPLEMENTARI_ICON, sub: COMPLEMENTARI_DESCRIPTION },
]

export default function Home() {
    const content = CONTENT.home
    const location = useLocation()

    // Scroll to anchor after hash changes
    useEffect(() => {
        if (!content) return
        const hash = location.hash.slice(1) // remove '#'
        if (!hash) return
        // Small delay to ensure DOM is painted
        const timer = setTimeout(() => {
            const el = document.getElementById(hash)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 150)
        return () => clearTimeout(timer)
    }, [content, location.hash])

    if (!content) return <div className="loading">Caricamento...</div>

    return (
        <>
            {/* Hero */}
            <section className="hero">
                <span style={{ display: 'block', marginBottom: '2rem' }}>🏆 Il tuo percorso di Forza inizia qui 🏆</span>
                <h1 className="hero-title">
                    <span className="gold">Black</span><span>Hole</span><br />Power<span className="gold">lifting</span>
                </h1>
                <p className="hero-subtitle">Forza · Tecnica · Sacrificio</p>
                <p className="hero-powered">Powered by Alessio Fontanarossa</p>
                <p className="hero-desc">{content.description}</p>
                <Link to="/squat" className="hero-cta">
                    Inizia ora
                </Link>
            </section>

            {/* Stats */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="stat-number">3-5</div>
                    <div className="stat-label">Esercizi fondamentali</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Sezioni di allenamento</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Video tutorial</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Forza da sviluppare</div>
                </div>
            </div>

            {/* Exercise cards */}
            <div className="content-section">
                <h2 className="section-heading">Esplora le Sezioni</h2>
                <div className="section-divider" />
                <div className="exercises-grid">
                    {sections.map(s => (
                        <Link key={s.key} to={`/${s.key}`} className="exercise-card">
                            <span className="exercise-card-icon">{s.icon}</span>
                            <div className="exercise-card-title">{s.label}</div>
                            <div className="exercise-card-sub">{s.sub}</div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured videos */}
            {content.videos?.length > 0 && (
                <div className="videos-section">
                    <h2 className="section-heading">Video in Evidenza</h2>
                    <div className="section-divider" />
                    <div className="video-grid">
                        {content.videos.map(v => (
                            <VideoCard key={v.videoId} title={v.title} videoId={v.videoId} />
                        ))}
                    </div>
                </div>
            )}

            {/* Storia del Powerlifting */}
            <div className="videos-section">
                <h2 className="section-heading">Storia del Powerlifting</h2>
                <div className="section-divider" />
                <p className="section-text" style={{ marginBottom: '2rem' }}>
                    Una raccolta dei video che hanno fatto la storia del PL
                </p>
                <div className="video-grid">
                    <VideoCard
                        id="storia-old-school-pl"
                        title="Old School PL"
                        embedUrl="https://www.youtube.com/embed/B6_7rYB43i4"
                    />
                    <VideoCard
                        id="storia-squat-angelini-nose-bleed"
                        title="242,5kg Squat Riccardo Angelini Nose Bleed"
                        embedUrl="https://www.youtube.com/embed/D4uBln4P06k?start=83&end=115"
                    />
                    <VideoCard
                        id="storia-stacco-angelini-74jr"
                        title="272,5kg Stacco Riccardo Angelini 1° Posto 74 Jr"
                        embedUrl="https://www.youtube.com/embed/D4uBln4P06k?start=306&end=340"
                    />
                    <VideoCard
                        id="storia-squat-carola-226"
                        title="226kg Squat Carola Garra"
                        embedUrl="https://www.youtube.com/embed/Rs1R7hSHSVA"
                    />
                    <VideoCard
                        id="storia-squat-youssuf-340"
                        title="340kg Squat Youssuf el Adlani"
                        embedUrl="https://www.instagram.com/p/DU_Y122jMJU/embed"
                        portrait
                    />
                    <VideoCard
                        id="storia-stacco-luca-3525"
                        title="352,5kg Stacco Luca Angrisano"
                        embedUrl="https://www.instagram.com/p/DR5EN5xDO9b/embed"
                        portrait
                    />
                    <VideoCard
                        id="storia-panca-carola-150"
                        title="150kg Panca Carola Garra Sheffield 2024"
                        embedUrl="https://www.youtube.com/embed/gD8w7gKRPdw?start=289&end=332"
                    />
                </div>
            </div>
        </>
    )
}
