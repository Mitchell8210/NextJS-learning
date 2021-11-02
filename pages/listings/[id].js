import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getListings, getSingleListing } from "../../lib/listings";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const listing = await getSingleListing(params.id);
  return {
    props: {
      listing,
    },
  };
}

export async function getStaticPaths() {
  const listings = await getListings();
  const paths = listings.map((listing) => {
    return {
      params: { id: listing.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ listing }) {
  return (
    <Layout>
      <Head>
        <title>{listing.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{listing.location_city}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={listing.created_at} />
        </div>
      </article>
    </Layout>
  );
}
