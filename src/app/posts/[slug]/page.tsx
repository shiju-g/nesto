import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogDetailPage({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="text-center py-10 text-red-500 font-medium">
        Post not found.
      </div>
    );
  }

  const post = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Published on {new Date().toLocaleDateString()}
      </p>

      <div className="prose prose-lg prose-blue max-w-none text-gray-800">
        <p>{post.content}</p>
      </div>

      <div className="mt-10 border-t pt-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
