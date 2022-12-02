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
          <h1 className={'pb-5 pl-3'}>{data.title}</h1>
        </Row>
      </Col>
      <Row className={'d-flex flex-column flex-md-row'}>
        <Col sm={2} md={2} className={'mr-4'}>
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
        </Col>
        <Col sm={12} md={10} className={'mt-4 mt-md-0'}>
          <h5 className="font-weight-bold pb-2 mb-0">
            {data.founderTitle}
          </h5>
          <p className="welcome-text">{data.contactIntro}</p>
          <Row className={''}>
            <Col className={'d-flex text-center pt-2 pl-0'}>
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
                    size="2x"
                    icon={'envelope'}
                  />
                  <div
                    className={
                      'h-100 d-flex justify-content-center align-items-center'
                    }
                  >
                    {/* {data.emailTitle} */}
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
                    size="2x"
                    icon={'phone'}
                  />
                  <div
                    className={
                      'h-100 d-flex justify-content-center align-items-center'
                    }
                  >
                    {/* {data.phoneTitle} */}
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
                    size="2x"
                    icon={faFacebook}
                  />
                  <div
                    className={
                      'h-100 d-flex justify-content-center align-items-center'
                    }
                  >
                    {/* {data.facebookTitle} */}
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
                      size="2x"
                      icon={faInstagram}
                    />
                    <div
                      className={
                        'h-100 d-flex justify-content-center align-items-center'
                      }
                    >
                      {data.instagramTitle}
                    </div>
                  </a>
                </div>
              ) : null}
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <Row className={'pl-5 ml-5'}>
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
                size="2x"
                icon={'envelope'}
              />
              <div
                className={
                  'h-100 d-flex justify-content-center align-items-center'
                }
              >
                {data.emailTitle}
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
                size="2x"
                icon={'phone'}
              />
              <div
                className={
                  'h-100 d-flex justify-content-center align-items-center'
                }
              >
                {data.phoneTitle}
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
                size="2x"
                icon={faFacebook}
              />
              <div
                className={
                  'h-100 d-flex justify-content-center align-items-center'
                }
              >
                {data.facebookTitle}
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
                  size="2x"
                  icon={faInstagram}
                />
                <div
                  className={
                    'h-100 d-flex justify-content-center align-items-center'
                  }
                >
                  {data.instagramTitle}
                </div>
              </a>
            </div>
          ) : null}
        </Col>
      </Row> */}
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
