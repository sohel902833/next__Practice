const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h2>News Article List</h2>
      {articles?.map((article) => {
        return (
          <div key={article.id}>
            <h2>ID: {article.id}</h2>
            <h3>Title: {article.title}</h3>
            <h4> {article.description}</h4>
            <h2>Category {article.category}</h2>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news/");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
