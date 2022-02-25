import { useState } from 'react';
import clientPromise from '../../lib/mongodb';
import styles from '../../styles/category.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Book({ books }) {
  const router = useRouter();
  const category = router.query;

  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      {books.map((book) => {
        return (
          <>
            <a
              target="_blank"
              href={session ? book.bk_url : '/api/auth/callback/google'}
              rel="noopener noreferrer"
            >
              <img className={styles.img} src={book.cv_url} />
            </a>
          </>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const client = await clientPromise;
  const database = client.db('e-library');
  const userdb = await database
    .collection('books')
    .find({ category })
    .project({ _id: 0 })
    .toArray();
  return {
    props: {
      books: JSON.parse(JSON.stringify(userdb)),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { category: 'csc' },
      },
      {
        params: { category: 'web' },
      },
      {
        params: { category: 'elect' },
      },
      {
        params: { category: 'dbs' },
      },
    ],
    fallback: false,
  };
}
