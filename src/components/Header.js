import Logo from '/home/tony/Apps/firstapp/src/img/Daco_6126558.png'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="">
                        <h1>Task Tracker</h1>
                        <p>
                            Using fake api & json web server with react hooks
                        </p>
                    </div>
                    <img src={Logo} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header