import React, { useState } from 'react';
import Cardcontent from '~/components/_cardcontent.astro';

export default function PostsList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // Sort posts by date descending
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate));

  const visiblePosts = sortedPosts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((count) => count + 6);
  };

  return (
    <>
      <div className="wrapper horizontalbar mx-auto my-10 grid max-w-5xl list-none grid-cols-1 gap-8 text-gray-900 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {visiblePosts.map((post) => (
          <Cardcontent post={post} key={post.frontmatter.slug} imageClass="h-64" />
        ))}
      </div>
      {visibleCount < sortedPosts.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

