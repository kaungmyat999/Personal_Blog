export default function Footer(){
    const _YEAR = new Date().getFullYear()

    return <footer >
        <p className="footer-text">© {_YEAR} George. All rights reserved.</p>
        {/* <p className="footer-text">Created with NextJS</p> */}
    </footer>
}