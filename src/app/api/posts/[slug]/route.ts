import { posts } from "../route";

export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }

  return Response.json(post);
}
