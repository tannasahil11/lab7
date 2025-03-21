import '../styles/Footer.css';
function Footer({ theme }){
    return(
            <footer className={` ${theme}-card p-4 text-center shadow-sm bottom`}>
              © {new Date().getFullYear()} Sahil. All Rights Reserved.
            </footer>

    )
}

export default Footer