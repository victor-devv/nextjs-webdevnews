import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({  articles  }) {
  return (
    <div>
      <ArticleList articles={articles}  />
    </div>
  );
}

// getStaticProps fetches data at build time
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};