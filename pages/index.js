import { Layout, Seo, HomeInfo, Button } from "../components";

export default function Home() {
  return (
    <section className="landing-page">
      <Layout>
        <Seo title="" />
        <section className="landing-page--container container flex-ac-jb">
          <HomeInfo />
          <Button />
        </section>
      </Layout>
    </section>
  );
}
