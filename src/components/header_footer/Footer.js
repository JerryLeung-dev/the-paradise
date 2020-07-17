import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Fade delay={500}>
                    <div className="font_caveat footer__logo">The Paradise</div>
                    <div className="footer__copyright">&copy; The paradise. All rights reserved   </div>
                </Fade>
            </footer>
        );
    }
}

export default Footer;