import './index.css'

const Footer = () => {


    return (
        <div className='footer-container'>
            <div className='code-languages-container'>
                <div>
                    <span>
                        <i className="devicon-javascript-plain"></i>

                        Javascript
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-express-original"></i>
                        Express
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-sequelize-plain"></i>
                        Sequelize
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-git-plain"></i>
                        Git
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-react-original"></i>
                        React
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-redux-original"></i>
                        Redux
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-html5-plain"></i>
                        HTML
                    </span>
                </div>
                <div>
                    <span>
                        <i className="devicon-css3-plain-wordmark"></i>
                        CSS
                    </span>
                </div>
            </div>
            <div className='my-information'>
                <div className='fwb'>Developed By</div>
                <div className="my-information-creators">
                    <div className="single-creator">
                    <div className='fwb p1' style={{"fontSize":"18px"}}>Brandon Bimestefer</div>
                        <a className="user-link" rel="noreferrer" href="https://github.com/bbimestefer" target="_blank">
                            <i className="fa-brands fa-github" style={{"fontSize":"30px"}}></i>
                        </a>
                        <a className="user-link" rel="noreferrer" href="https://www.linkedin.com/in/brandon-bimestefer-a01924250/" target="_blank">
                            <i className="fa-brands fa-linkedin" style={{"fontSize":"30px"}}></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
