import Logo2 from '/home/tony/Apps/firstapp/src/img/1618916.svg'
import { IoIosDesktop, IoIosColorFilter, IoIosCube } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
        <section className="boxes">
        <div className="container">
            <div className="box">
                <h2>
                    <i className='icon'><IoIosCube /></i>
                    Alignment & Space
                </h2>
                {/* <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus doloremque quis
                    consequatur ipsum vitae, reiciendis fuga sequi voluptatem amet.
                </p> */}
            </div>
            <div className="box">
                <h2>
                    <i className='icon'><IoIosDesktop /></i>
                    Tricky Positioning
                </h2>
                {/* <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus doloremque quis
                    consequatur ipsum vitae, reiciendis fuga sequi voluptatem amet.
                </p> */}
            </div>
            <div className="box">
                <h2>
                    <i className='icon'><IoIosColorFilter /></i>
                    Responsive Design
                </h2>
                {/* <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus doloremque quis
                    consequatur ipsum vitae, reiciendis fuga sequi voluptatem amet.
                </p> */}
            </div>
        </div>
    </section>
    <footer className="footer">
        <div className="l-footer">
            <h1><img src={Logo2} alt="" /></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, porro. Animi ab odio ullam libero nemo
                ea sit fuga aspernatur veniam! A eveniet veritatis vero.</p>
        </div>

        <ul className="r-footer">
            <li>
                <h2>Explore</h2>
                <ul className="box">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </li>

            <li className="features">
                <h2>Need Help?</h2>
                <ul className="box h-box">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Sales</a></li>
                    <li><a href="#">Tickets</a></li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
            </li>


            <li>
                <h2>Legal</h2>
                <ul className="box">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Contract</a></li>
                </ul>
            </li>
        </ul>
        <div className="b-footer">
            <p>All rights reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer