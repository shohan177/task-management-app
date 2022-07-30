import React from 'react'
import { Container } from 'react-bootstrap'

function ErrorPage() {
    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {/* <img src={"https://c.tenor.com/vYTwUEafhogAAAAC/404.gif"} alt="" width={500} /> */}
                <h3>Page Not Found !</h3>
            </div>
        </Container>
    )
}

export default ErrorPage