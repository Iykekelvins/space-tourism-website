import { Layout, Seo, Destination } from "../components";

const destinations = () => {
  return (
    <div className="destination">
      <Layout>
        <Seo title="| Destinations" />
        <Destination />
      </Layout>
    </div>
  );
};

export default destinations;
