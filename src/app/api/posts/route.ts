
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import { BlogPostList } from "@/types/posts";

export let posts: BlogPostList = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn how to set up a Next.js project from scratch.",
    content:
      "This post will guide you through creating your first Next.js project, installing dependencies, and understanding the folder structure...",
  },
  {
    id: 2,
    title: "Understanding Static Site Generation",
    slug: "understanding-ssg",
    excerpt: "Explore how Next.js pre-renders pages at build time.",
    content:
      "Static Site Generation (SSG) allows you to generate HTML at build time. Next.js uses `getStaticProps` and `getStaticPaths` for this purpose...",
  },
  {
    id: 3,
    title: "Dynamic Routing in Next.js",
    slug: "dynamic-routing-nextjs",
    excerpt: "Implement dynamic routes for blog posts using the file system.",
    content:
      "Dynamic routing lets you create pages based on dynamic data using the `[slug].tsx` file naming pattern inside the `app/posts` or `pages/posts` directory...",
  },
  {
    id: 4,
    title: "Styling with Tailwind CSS",
    slug: "styling-with-tailwind",
    excerpt:
      "Integrate Tailwind CSS with your Next.js app for utility-first styling.",
    content:
      "Tailwind CSS is a utility-first framework. You can easily add it to your Next.js project and build responsive, consistent UIs fast...",
  },
];

export async function GET() {
  return Response.json(posts);
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return new Response(
        JSON.stringify({ error: "Title and content are required." }),
        {
          status: 400,
        }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/\\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const excerpt = content.slice(0, 100) + "...";

    const newPost = {
      id: posts.length + 1,
      title,
      slug,
      excerpt,
      content,
    };

    posts.push(newPost);

    return new Response(
      JSON.stringify({ message: "Post added successfully", post: newPost }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid JSON or request failed." }),
      {
        status: 500,
      }
    );
  }
}