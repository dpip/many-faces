import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">
                Hello Friends,
              </h5>
              <p className="welcome-text">
                My name is Brian Quinn and I founded The Many Faces initiative ipsum lorem ipsum ipsum. Any inqueries will be recieved primarily through email and thanks for the support!
              </p>
            </Media.Body>
            <ul>
              <li>Email</li>
              <li>Phone</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      </Row>
    )
}

export default AuthorIntro;