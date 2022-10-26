// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      {JSON.stringify(blogs)}
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Home;

// The getStaticProps function is called during the build (build time)
// Provides props to the page
// Creates static page content
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
