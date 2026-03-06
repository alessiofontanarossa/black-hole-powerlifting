import { useState, useEffect } from 'react'

const LABEL = {
    squat: 'Squat',
    panca: 'Panca Piana',
    stacco: 'Stacco da Terra',
    dips: 'Dips',
    trazioni: 'Trazioni',
}

function formatDate(isoStr) {
    if (!isoStr) return '—'
    const [y, m, d] = isoStr.split('-')
    return `${d}/${m}/${y}`
}

export default function LiftHistory({ section }) {
    const storageKey = `lifts_${section}`
    const [entries, setEntries] = useState([])
    const [form, setForm] = useState({ date: '', weight: '', reps: '', note: '' })
    const [error, setError] = useState('')

    // Load from localStorage
    useEffect(() => {
        try {
            const raw = localStorage.getItem(storageKey)
            if (raw) setEntries(JSON.parse(raw))
        } catch {
            setEntries([])
        }
    }, [section])

    function save(newEntries) {
        setEntries(newEntries)
        localStorage.setItem(storageKey, JSON.stringify(newEntries))
    }

    function handleAdd(e) {
        e.preventDefault()
        if (!form.date || !form.weight) {
            setError('Data e peso sono obbligatori.')
            return
        }
        const entry = {
            id: Date.now(),
            date: form.date,
            weight: parseFloat(form.weight),
            reps: form.reps ? parseInt(form.reps) : null,
            note: form.note.trim(),
        }
        const updated = [entry, ...entries].sort((a, b) => b.date.localeCompare(a.date))
        save(updated)
        setForm({ date: '', weight: '', reps: '', note: '' })
        setError('')
    }

    function handleDelete(id) {
        save(entries.filter(e => e.id !== id))
    }

    // best entry by weight
    const best = entries.reduce((acc, e) => (!acc || e.weight > acc.weight ? e : acc), null)

    return (
        <div className="lh-wrapper">
            {/* Stats bar */}
            {entries.length > 0 && (
                <div className="lh-stats">
                    <div className="lh-stat">
                        <span className="lh-stat-value">{best?.weight ?? '—'} kg</span>
                        <span className="lh-stat-label">Miglior alzata</span>
                    </div>
                    <div className="lh-stat">
                        <span className="lh-stat-value">{entries.length}</span>
                        <span className="lh-stat-label">Sessioni registrate</span>
                    </div>
                    <div className="lh-stat">
                        <span className="lh-stat-value">{formatDate(entries[entries.length - 1]?.date)}</span>
                        <span className="lh-stat-label">Prima sessione</span>
                    </div>
                </div>
            )}

            {/* Form */}
            <form className="lh-form" onSubmit={handleAdd}>
                <div className="lh-form-grid">
                    <div className="lh-field">
                        <label className="lh-label">Data *</label>
                        <input
                            type="date"
                            className="lh-input"
                            value={form.date}
                            onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        />
                    </div>
                    <div className="lh-field">
                        <label className="lh-label">Peso (kg) *</label>
                        <input
                            type="number"
                            className="lh-input"
                            placeholder="es. 140"
                            step="0.5"
                            min="0"
                            value={form.weight}
                            onChange={e => setForm(f => ({ ...f, weight: e.target.value }))}
                        />
                    </div>
                    <div className="lh-field">
                        <label className="lh-label">Rip</label>
                        <input
                            type="number"
                            className="lh-input"
                            placeholder="es. 3"
                            min="1"
                            value={form.reps}
                            onChange={e => setForm(f => ({ ...f, reps: e.target.value }))}
                        />
                    </div>
                    <div className="lh-field lh-field--note">
                        <label className="lh-label">Note</label>
                        <input
                            type="text"
                            className="lh-input"
                            placeholder="es. cintura, buona tecnica..."
                            maxLength={120}
                            value={form.note}
                            onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                        />
                    </div>
                </div>
                {error && <p className="lh-error">{error}</p>}
                <button type="submit" className="lh-add-btn">+ Aggiungi alzata</button>
            </form>

            {/* Table */}
            {entries.length > 0 ? (
                <div className="lh-table-wrap">
                    <table className="lh-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Peso</th>
                                <th>Rip</th>
                                <th>Note</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map(e => (
                                <tr key={e.id} className={e.id === best?.id ? 'lh-best-row' : ''}>
                                    <td>{formatDate(e.date)}</td>
                                    <td className="lh-weight-cell">
                                        {e.weight} kg
                                        {e.id === best?.id && <span className="lh-crown" title="Record personale">👑</span>}
                                    </td>
                                    <td>{e.reps ?? '—'}</td>
                                    <td className="lh-note-cell">{e.note || '—'}</td>
                                    <td>
                                        <button
                                            className="lh-delete-btn"
                                            onClick={() => handleDelete(e.id)}
                                            title="Elimina"
                                            aria-label="Elimina alzata"
                                        >✕</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="lh-empty">Nessuna alzata registrata. Inizia a tracciare i tuoi progressi!</p>
            )}
        </div>
    )
}
