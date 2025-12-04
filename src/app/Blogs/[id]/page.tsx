// "use client"
// import React, { useState } from 'react';
// import { Plus, Search, Filter, FileText } from 'lucide-react';
// import BlogCard from '@/app/Components/admin/BlogManagment';
// import { mockBlogs } from '@/app/mockData/mockData';
// import { Blog } from '@/app/types/dashElement';

// const Blogs: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>(mockBlogs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

//   const filteredBlogs = blogs.filter(blog => {
//     const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          blog.author.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   const handleEdit = (blog: Blog) => {
//     console.log('Edit blog:', blog);
//     // Navigate to edit page or open modal
//   };

//   const handleDelete = (blogId: string) => {
//     if (confirm('Are you sure you want to delete this blog?')) {
//       setBlogs(blogs.filter(blog => blog.id !== blogId));
//     }
//   };

//   const handleView = (blog: Blog) => {
//     console.log('View blog:', blog);
//     // Navigate to blog detail page
//   };

//   const handleCreate = () => {
//     console.log('Create new blog');
//     // Navigate to create blog page
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
//         <button 
//           onClick={handleCreate}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
//         >
//           <Plus size={20} />
//           <span>New Blog Post</span>
//         </button>
//       </div>

//       {/* Filters and Search */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search blogs..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <Filter size={20} className="text-gray-400" />
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value as any)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">All Status</option>
//               <option value="published">Published</option>
//               <option value="draft">Draft</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       {filteredBlogs.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredBlogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//               onView={handleView}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <div className="text-gray-400 mb-4">
//             <FileText size={48} className="mx-auto" />
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
//           <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogs;

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
