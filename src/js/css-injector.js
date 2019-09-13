class CssInjector {

}

CssInjector.main = `
    /* Hide Tasks Button */
    ._3dhUZymTHbxfDmBQWt4m_j .ms-OverflowSet-item:last-child {
        display: none;
    }
    /* Prevent Relocd on Logo Click */
    #owaBranding_container {
        pointer-events: none;
    }
`

CssInjector.noFrame = `
    /* make the header higher and dragable */
    ._1Kg3ffZABPxXxDqcmoxkBA {
        padding-top: 30px !important;
        -webkit-app-region: drag;
    }

    /* make the clickable component in header not dragable */
    .ms-FocusZone,
    ._3Nd2PGu67wifhuPZp2Sfj5 {
        -webkit-app-region: no-drag;
    }
`

module.exports = CssInjector