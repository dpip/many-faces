import { Media, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import PageLayout from 'components/PageLayout';

import { getContact, urlFor } from 'lib/api';

export default function Contact({ contact }) {
  const [data] = contact;
  return (
    <PageLayout>
      <Col>
        <Row>
          <h1 className={'pb-5 pl-3 ml-3'}>{data.title}</h1>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className={'pb-2 pl-3 ml-3'}>
            <Row>
              <Col md="10">
                <Media className="mb-4 admin-intro">
                  <Image
                    roundedCircle
                    width={120}
                    height={120}
                    className="mr-3"
                    src={urlFor(data.founderAvatar)
                      .height(120)
                      .crop('center')
                      .fit('clip')
                      .url()}
                    alt="Founder image"
                  />
                  <Media.Body>
                    <h5 className="font-weight-bold pb-2 mb-0">
                      {data.founderTitle}
                    </h5>
                    <p className="welcome-text">
                      {data.contactIntro}
                    </p>
                  </Media.Body>
                </Media>
                <Row className={'pl-5 ml-5'}>
                  <div className={'pb-5 pl-3 ml-3'}>
                    <Col className={'d-flex text-center pt-2'}>
                      <div className={'d-flex mr-5'}>
                        <a
                          className={
                            'd-flex justify-content-center align-items-center'
                          }
                          href={`${data.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="d-flex justify-content-center align-items-center mr-3"
                            size="4x"
                            icon={'envelope'}
                          />
                          <div
                            className={
                              'h-100 d-flex justify-content-center align-items-center'
                            }
                          >
                            Email
                          </div>
                        </a>
                      </div>
                      <div className={'d-flex mr-5'}>
                        <a
                          className={
                            'd-flex justify-content-center align-items-center'
                          }
                          href={`${data.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="d-flex justify-content-center align-items-center mr-3"
                            size="4x"
                            icon={'phone'}
                          />
                          <div
                            className={
                              'h-100 d-flex justify-content-center align-items-center'
                            }
                          >
                            Phone
                          </div>
                        </a>
                      </div>
                      <div className={'d-flex mr-5'}>
                        <a
                          className={
                            'd-flex justify-content-center align-items-center'
                          }
                          href={`${data.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="d-flex justify-content-center align-items-center mr-3"
                            size="4x"
                            icon={faFacebook}
                          />
                          <div
                            className={
                              'h-100 d-flex justify-content-center align-items-center'
                            }
                          >
                            Facebook
                          </div>
                        </a>
                      </div>
                      {data.instagram ? (
                        <div className={'d-flex'}>
                          <a
                            className={
                              'd-flex justify-content-center align-items-center'
                            }
                            href={`${data.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              className="d-flex justify-content-center align-items-center"
                              size="4x"
                              icon={faInstagram}
                            />
                            <div
                              className={
                                'h-100 d-flex justify-content-center align-items-center'
                              }
                            >
                              Instagram
                            </div>
                          </a>
                        </div>
                      ) : null}
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </Col>
      <hr />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const contact = await getContact();
  return {
    props: {
      contact,
    },
  };
}
