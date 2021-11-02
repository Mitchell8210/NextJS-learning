import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { getListings } from "../lib/listings";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allListings = await getListings();
  return {
    props: {
      allPostsData,
      allListings,
    },
  };
}
export default function Home({ allPostsData, allListings }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a sample website - demonstrating SSR (server-side rendering).
          The items listed are sample data from an external API.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allListings.map(({ name, id, created_at }) => (
            <li style={{ marginBottom: 30 }}>
              <Link href={`/listings/${id}`}>
                <a className={utilStyles.headingLg}>{name}</a>
              </Link>
              <div className={utilStyles.lightText} style={{ fontSize: 14 }}>
                <Date dateString={created_at} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
