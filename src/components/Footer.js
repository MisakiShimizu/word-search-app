// Footer
import img from "../styles/assets/MWLogo_LightBG_120x120_2x.png"
const Footer = () => {
    return(
    <div>
        <footer>
            <div className="wrapper">
                <p>Created at Juno College.</p>
                <div className="merriam">
                    <p>Data from Merriam Webster API.</p>
                    <img class="merriamLogo" src={img} alt="Merriam Webster logo." />
                </div>
            </div>
      </footer>
    </div>
    )
}

export default Footer;