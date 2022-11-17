import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
              roundedCircle
              width={120}
              height={120}
              className="mr-3"
              src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">
                Hey! I'm Brian Quin, Owner of On the Lash Brewing Co.
              </h5>
              <p className="welcome-text">
                Interested in applying to the program, donating, or learning more about things over a beer? Email is the most efficient way to get in touch but feel free to reach out on social media or other means!
              </p>
            </Media.Body>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      </Row>
    )
}

export default AuthorIntro;