import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <h1>Home Page</h1>
    <Link href="/choices">
      <a>Choose a Workout</a>
    </Link>
    </Layout>
  );
}