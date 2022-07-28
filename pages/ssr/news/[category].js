const ArticleListByCategory = ({ articles }) => {
  return (
    <div>
      <h2>Article List By Category</h2>
      {articles?.map((article) => {
        return (
          <div key={article.id}>
            <h2>ID: {article.id}</h2>
            <h3>Title: {article.title}</h3>
            <h4> {article.description}</h4>
            <h2>Category: {article.category}</h2>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req } = context;
  const res = await fetch(
    "http://localhost:4000/news?category=" + params?.category
  );
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
