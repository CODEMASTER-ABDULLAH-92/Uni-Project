'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: 'published' | 'draft';
  featured: boolean;
  image: string;
  createdAt: string;
  publishedAt?: string;
  readTime?: number;
}

export default function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      content: '<h1>Getting Started with Next.js</h1><p>This is a comprehensive guide to Next.js...</p>',
      author: 'John Doe',
      category: 'Technology',
      tags: ['nextjs', 'react', 'webdev'],
      status: 'published',
      featured: true,
      image: '/api/placeholder/400/200',
      createdAt: '2024-01-15',
      publishedAt: '2024-01-15',
      readTime: 5,
    },
    {
      id: '2',
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is changing web development',
      content: '<h1>The Future of AI in Web Development</h1><p>AI is transforming how we build web applications...</p>',
      author: 'Jane Smith',
      category: 'AI',
      tags: ['ai', 'webdev', 'future'],
      status: 'draft',
      featured: false,
      image: '/api/placeholder/400/200',
      createdAt: '2024-01-10',
      readTime: 8,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    status: 'draft' as 'published' | 'draft',
    featured: false,
    readTime: '',
  });

  const editorRef = useRef<HTMLDivElement>(null);

  // Get unique categories for filter
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const statuses = ['all', 'published', 'draft'];

  // Filter blog posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || post.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Rich Text Editor Functions - Fixed version
  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    updateContent();
    editorRef.current?.focus();
  };

  const updateContent = () => {
    if (editorRef.current) {
      setFormData(prev => ({
        ...prev,
        content: editorRef.current?.innerHTML || ''
      }));
    }
  };

  const insertHTML = (html: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      
      const div = document.createElement('div');
      div.innerHTML = html;
      const fragment = document.createDocumentFragment();
      let node: ChildNode | null;
      while ((node = div.firstChild)) {
        fragment.appendChild(node);
      }
      range.insertNode(fragment);
      
      // Move cursor after inserted content
      range.setStartAfter(fragment.lastChild || fragment);
      range.setEndAfter(fragment.lastChild || fragment);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    updateContent();
  };

  const formatBlock = (tag: string) => {
    document.execCommand('formatBlock', false, tag);
    updateContent();
    editorRef.current?.focus();
  };

  const createLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      document.execCommand('createLink', false, url);
      updateContent();
    }
    editorRef.current?.focus();
  };

  const calculateReadTime = (content: string): number => {
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / 200); // 200 words per minute
  };

  const openAddModal = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      tags: '',
      status: 'draft',
      featured: false,
      readTime: '',
    });
    setShowModal(true);
  };

  const openEditModal = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags.join(', '),
      status: post.status,
      featured: post.featured,
      readTime: post.readTime?.toString() || '',
    });
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const readTimeValue = formData.readTime ? parseInt(formData.readTime) : calculateReadTime(formData.content);
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      readTime: readTimeValue,
    };

    if (editingPost) {
      // Update post
      setBlogPosts(blogPosts.map(post => 
        post.id === editingPost.id 
          ? { 
              ...editingPost, 
              ...postData,
              publishedAt: postData.status === 'published' && editingPost.status === 'draft' 
                ? new Date().toISOString().split('T')[0] 
                : editingPost.publishedAt
            }
          : post
      ));
    } else {
      // Add new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...postData,
        image: '/api/placeholder/400/200',
        createdAt: new Date().toISOString().split('T')[0],
        publishedAt: postData.status === 'published' ? new Date().toISOString().split('T')[0] : undefined,
      };
      setBlogPosts([...blogPosts, newPost]);
    }
    setShowModal(false);
  };

  const deletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  const toggleFeatured = (id: string) => {
    setBlogPosts(blogPosts.map(post =>
      post.id === id ? { ...post, featured: !post.featured } : post
    ));
  };

  const toggleStatus = (id: string) => {
    setBlogPosts(blogPosts.map(post =>
      post.id === id 
        ? { 
            ...post, 
            status: post.status === 'published' ? 'draft' : 'published',
            publishedAt: post.status === 'draft' ? new Date().toISOString().split('T')[0] : post.publishedAt
          } 
        : post
    ));
  };

  // Focus editor when modal opens
  useEffect(() => {
    if (showModal && editorRef.current) {
      // Set initial content and focus
      if (formData.content) {
        editorRef.current.innerHTML = formData.content;
      } else {
        editorRef.current.innerHTML = '<p>Start writing your blog post here...</p>';
      }
      editorRef.current.focus();
    }
  }, [showModal, formData.content]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Post
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Posts
            </label>
            <input
              type="text"
              placeholder="Search by title, excerpt, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <span className="text-sm text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} posts
            </span>
          </div>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Featured
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Read Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {post.tags.map(tag => (
                          <span key={tag} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleStatus(post.id)}
                    className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                    }`}
                  >
                    {post.status}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleFeatured(post.id)}
                    className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                      post.featured
                        ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {post.featured ? 'Featured' : 'Standard'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.readTime} min
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditModal(post)}
                      className="text-indigo-600 hover:text-indigo-900 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPosts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No blog posts found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Add/Edit Blog Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      required

                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter blog post title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt *</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of the blog post"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
                    
                    {/* Rich Text Editor Toolbar */}
                    <div className="border border-gray-300 rounded-t-md bg-gray-50 p-2 flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => execCommand('bold')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Bold"
                      >
                        <strong>B</strong>
                      </button>
                      <button
                        type="button"
                        onClick={() => execCommand('italic')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Italic"
                      >
                        <em>I</em>
                      </button>
                      <button
                        type="button"
                        onClick={() => execCommand('underline')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Underline"
                      >
                        <u>U</u>
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onClick={() => formatBlock('<h1>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Heading 1"
                      >
                        H1
                      </button>
                      <button
                        type="button"
                        onClick={() => formatBlock('<h2>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Heading 2"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => formatBlock('<h3>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Heading 3"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => formatBlock('<p>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Paragraph"
                      >
                        P
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onClick={() => execCommand('insertUnorderedList')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Bullet List"
                      >
                        • List
                      </button>
                      <button
                        type="button"
                        onClick={() => execCommand('insertOrderedList')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Numbered List"
                      >
                        1. List
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onClick={() => formatBlock('<blockquote>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Blockquote"
                      >
                        Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => insertHTML('<code>Code</code>')}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Code"
                      >
                        Code
                      </button>
                      <button
                        type="button"
                        onClick={createLink}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                        title="Link"
                      >
                        Link
                      </button>
                    </div>

                    {/* Rich Text Editor */}
                    <div
                      ref={editorRef}
                      contentEditable
                      onInput={updateContent}
                      onBlur={updateContent}
                      className="min-h-[300px] border border-t-0 border-gray-300 rounded-b-md p-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 prose max-w-none"
                      style={{ 
                        fontFamily: 'inherit',
                        lineHeight: '1.6',
                        textAlign: 'left',
                        // direction: 'ltr'

                      }}
                    />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="nextjs, react, webdev"
                    />
                    <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (minutes)</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Auto-calculated if empty"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                      Featured Post
                    </label>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">Content Preview</h4>
                    <div className="text-xs text-blue-700 space-y-1">
                      <div>Words: {formData.content.replace(/<[^>]*>/g, '').split(/\s+/).length}</div>
                      <div>Read Time: {formData.readTime || calculateReadTime(formData.content)} minutes</div>
                      <div>Tags: {formData.tags.split(',').filter(tag => tag.trim()).length}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                >
                  {editingPost ? 'Update' : 'Create'} Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}