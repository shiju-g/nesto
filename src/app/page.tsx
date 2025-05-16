import BlogLists from "@/components/BlogList";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Dashboard() {
  const [postsRes, quoteRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/posts`, { cache: "no-store" }),
    fetch("https://dummyjson.com/quotes/random", { cache: "no-store" }),
  ]);

  if (!postsRes.ok) throw new Error("Failed to fetch posts");
  if (!quoteRes.ok) throw new Error("Failed to fetch quote");

  const posts: any[] = await postsRes.json();
  const { quote, author } = await quoteRes.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Quote of the Day */}
      <div className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-8 rounded-md shadow-sm">
        <p className="italic text-gray-700">&quot;{quote}&quot;</p>
        <p className="text-sm text-right mt-2 text-gray-500">— {author}</p>
      </div>

      {/* Header and Create Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
        <Link href="/new-post">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow transition">
            + Create New Blog
          </button>
        </Link>
      </div>

      {/* Blog List */}
       <BlogLists posts={posts} />
    </main>
  );
}
