import { articles } from "../../../data";

const handler = ({ query: { id } }, res) => {
  // req.query.id if you pass in req. But we would destructure req instead
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
};

export default handler;
