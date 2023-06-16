// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllPosts, PostMeta } from "./api";

export default function handler(req, res) {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  res.status(200).json(posts);
}
