export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand" style={{ textAlign: 'center' }}>
                    <span className="footer-logo">
                        <span className="footer-gold">Black</span>Hole<br />Power<span className="footer-gold">lifting</span>
                    </span>
                </div>
                <div className="footer-contacts">
                    <a href="tel:3209515246" className="footer-contact-item">
                        <span className="footer-contact-icon">📞</span>
                        <span>320 951 5246</span>
                    </a>
                    <a href="mailto:alessio.font7@gmail.com" className="footer-contact-item">
                        <span className="footer-contact-icon">✉️</span>
                        <span>alessio.font7@gmail.com</span>
                    </a>
                </div>
                <div className="footer-copy">
                    © {new Date().getFullYear()} Alessio Fontanarossa
                </div>
            </div>
        </footer>
    )
}
