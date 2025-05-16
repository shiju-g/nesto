/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogPostList } from '@/types/posts';
import Link from 'next/link';
import React from 'react'

const BlogLists = ({ posts }: { posts: BlogPostList }) => {
  return (
    <ul className="space-y-6">
      {posts?.map((post) => (
        <li
          key={post.id}
          className="border border-gray-500 rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600 hover:underline">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-gray-600 mt-2">{post.excerpt}</p>
          <Link
            href={`/posts/${post.slug}`}
            className="text-sm text-blue-500 mt-3 inline-block hover:underline"
          >
            Read more →
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogLists;