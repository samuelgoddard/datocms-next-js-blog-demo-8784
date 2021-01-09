import Container from "../components/container";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        <Container>
          <div className="content mb-12 md:mb-24">
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            
            <p>In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const config = {
  unstable_runtimeJS: false
};