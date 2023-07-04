import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My first post!</title>
            </Head>
            <h1>My first post!</h1>
            <div>
                <Image
                    src="/images/mycat.jpg"
                    height={144}
                    width={144}
                    alt="my cat"
                ></Image>
            </div>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}