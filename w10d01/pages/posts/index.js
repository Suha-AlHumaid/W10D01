import Link from "next/link";

function Posts({ posts }) {
  // Render posts...
  return (
    <div>
      {posts.map((elem) => (
        <>
          <Link href={`/posts/${elem.id}`} key={elem.id}>
            <div>
              <h1>{elem.title}</h1>
              <p>{elem.body}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
