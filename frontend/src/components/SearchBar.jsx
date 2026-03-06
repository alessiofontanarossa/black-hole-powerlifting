import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const ALL_SECTIONS = [
    'home', 'squat', 'panca', 'stacco', 'mobilita', 'stretching',
    'dips', 'trazioni', 'complementari',
]

const LABEL_MAP = {
    home: 'Home',
    squat: 'Squat',
    panca: 'Panca Piana',
    stacco: 'Stacco da Terra',
    mobilita: 'Mobilità',
    stretching: 'Stretching',
    dips: 'Dips',
    trazioni: 'Trazioni',
    complementari: 'Complementari',
}

let cachedContent = null

async function loadAllContent() {
    if (cachedContent) return cachedContent
    const results = await Promise.all(
        ALL_SECTIONS.map(s =>
            fetch(`http://localhost:8000/api/content/${s}`)
                .then(r => r.json())
                .then(data => ({ section: s, ...data }))
                .catch(() => null)
        )
    )
    cachedContent = results.filter(Boolean)
    return cachedContent
}

function highlight(text, query) {
    if (!query) return text
    const idx = text.toLowerCase().indexOf(query.toLowerCase())
    if (idx === -1) return text
    const start = Math.max(0, idx - 30)
    const end = Math.min(text.length, idx + query.length + 40)
    let snippet = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '')
    return snippet
}

// Hardcoded videos not in the backend (Storia del Powerlifting on Home)
const STORIA_VIDEOS = [
    { title: 'Old School PL', path: '/#storia-old-school-pl' },
    { title: '242,5kg Squat Riccardo Angelini Nose Bleed', path: '/#storia-squat-angelini-nose-bleed' },
    { title: '272,5kg Stacco Riccardo Angelini 1° Posto 74 Jr', path: '/#storia-stacco-angelini-74jr' },
    { title: '226kg Squat Carola Garra', path: '/#storia-squat-carola-226' },
    { title: '340kg Squat Youssuf el Adlani', path: '/#storia-squat-youssuf-340' },
    { title: '352,5kg Stacco Luca Angrisano', path: '/#storia-stacco-luca-3525' },
    { title: '150 kg Panca Carola Garra Sheffield 2024', path: '/#storia-panca-carola-150' },
]

function searchVideoList(videos, q, basePath, sectionLabel, type, hits) {
    for (const video of videos || []) {
        const anchor = video.videoId ? `#video-${video.videoId}` : ''
        const path = basePath + anchor
        if (video.title?.toLowerCase().includes(q)) {
            hits.push({ path, label: sectionLabel, match: video.title, type })
        }
        if (video.description?.toLowerCase().includes(q)) {
            hits.push({ path, label: sectionLabel, match: highlight(video.description, q), type })
        }
    }
}

function searchContent(allContent, query) {
    const q = query.toLowerCase().trim()
    if (q.length < 2) return []
    const hits = []

    for (const section of allContent) {
        const sectionLabel = LABEL_MAP[section.section] || section.section
        const path = section.section === 'home' ? '/' : `/${section.section}`

        // Title match
        if (section.title?.toLowerCase().includes(q)) {
            hits.push({ path, label: sectionLabel, match: section.title, type: 'Sezione' })
        }

        // Subtitle match
        if (section.subtitle?.toLowerCase().includes(q)) {
            hits.push({ path, label: sectionLabel, match: section.subtitle, type: 'Sottotitolo' })
        }

        // Description match
        if (section.description?.toLowerCase().includes(q)) {
            hits.push({ path, label: sectionLabel, match: highlight(section.description, query), type: 'Descrizione' })
        }

        // Tips
        for (const tip of section.tips || []) {
            if (tip.toLowerCase().includes(q)) {
                hits.push({ path, label: sectionLabel, match: highlight(tip, query), type: 'Consiglio' })
            }
        }

        // Video Tutorial
        searchVideoList(section.videos, q, path, sectionLabel, 'Video Tutorial', hits)

        // Tecnica di esecuzione
        searchVideoList(section.tecnica, q, path, sectionLabel, 'Tecnica', hits)

        // Spiegazione varianti
        searchVideoList(section.varianti, q, path, sectionLabel, 'Variante', hits)

        // Storico alzate
        searchVideoList(section.storico, q, path, sectionLabel, 'Storico', hits)
    }

    // Hardcoded storia del powerlifting (Home)
    for (const video of STORIA_VIDEOS) {
        if (video.title?.toLowerCase().includes(q)) {
            hits.push({ path: video.path, label: 'Home', match: video.title, type: 'Storia del PL' })
        }
    }

    // Deduplicate by path+match
    const seen = new Set()
    return hits.filter(h => {
        const key = h.path + h.match
        if (seen.has(key)) return false
        seen.add(key)
        return true
    }).slice(0, 10)
}

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allContent, setAllContent] = useState(null)
    const inputRef = useRef(null)
    const containerRef = useRef(null)
    const navigate = useNavigate()

    // Close on outside click
    useEffect(() => {
        function handle(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handle)
        return () => document.removeEventListener('mousedown', handle)
    }, [])

    // Close on Escape
    useEffect(() => {
        function handle(e) {
            if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur() }
        }
        document.addEventListener('keydown', handle)
        return () => document.removeEventListener('keydown', handle)
    }, [])

    const runSearch = useCallback(async (q) => {
        if (q.trim().length < 2) { setResults([]); setOpen(false); return }
        setLoading(true)
        try {
            let content = allContent
            if (!content) {
                content = await loadAllContent()
                setAllContent(content)
            }
            const hits = searchContent(content, q)
            setResults(hits)
            setOpen(hits.length > 0)
        } finally {
            setLoading(false)
        }
    }, [allContent])

    function handleChange(e) {
        const val = e.target.value
        setQuery(val)
        runSearch(val)
    }

    function handleSelect(path) {
        setOpen(false)
        setQuery('')
        navigate(path)
    }

    return (
        <div className="search-bar-container" ref={containerRef}>
            <div className="search-input-wrap">
                <span className="search-icon">🔍</span>
                <input
                    ref={inputRef}
                    className="search-input"
                    type="text"
                    placeholder="Cerca…"
                    value={query}
                    onChange={handleChange}
                    onFocus={() => results.length > 0 && setOpen(true)}
                    aria-label="Cerca nel sito"
                    autoComplete="off"
                />
                {loading && <span className="search-spinner" />}
                {query && !loading && (
                    <button className="search-clear" onClick={() => { setQuery(''); setResults([]); setOpen(false) }} aria-label="Cancella">✕</button>
                )}
            </div>
            {open && results.length > 0 && (
                <div className="search-results">
                    {results.map((r, i) => (
                        <button key={i} className="search-result-item" onClick={() => handleSelect(r.path)}>
                            <span className="search-result-section">{r.label}</span>
                            <span className="search-result-type">{r.type}</span>
                            <span className="search-result-match">{r.match}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
