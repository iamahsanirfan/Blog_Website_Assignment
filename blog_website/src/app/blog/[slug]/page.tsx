// src/app/blog/[slug]/page.tsx
'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { Post, posts } from '@/data/posts';
import Image from 'next/image';

type CommentType = {
  id: number;
  text: string;
  date: string;
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<CommentType[]>([]);
  const [nextId, setNextId] = useState(1);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState('');
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, {
        id: nextId,
        text: commentText,
        date: new Date().toISOString(),
      }]);
      setNextId(nextId + 1);
      setCommentText('');
    }
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      setComments(comments.map(comment => {
        if (comment.id === editingId) {
          return { ...comment, text: editedText };
        }
        return comment;
      }));
      setEditingId(null);
      setEditedText('');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedText('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="mb-12">
        {/* Post Meta */}
        <div className="mb-6 flex items-center gap-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4 flex gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{post.description}</p>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose max-w-none text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Comments Section */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 border rounded-lg mb-4 h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="font-medium">Anonymous</span>
              </div>
              
              {editingId === comment.id ? (
                <>
                  <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-2">{comment.text}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(comment.id, comment.text)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(comment.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}