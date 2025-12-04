// // app/admin/dashboard/components/UserManagement.tsx
// "use client";

// import { useState } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: "active" | "inactive";
//   createdAt: string;
// }

// export default function UserManagement() {
//   const [users, setUsers] = useState<User[]>([
//     {
//       id: "1",
//       name: "John Doe",
//       email: "john@example.com",
//       role: "user",
//       status: "active",
//       createdAt: "2024-01-15",
//     },
//     {
//       id: "2",
//       name: "Jane Smith",
//       email: "jane@example.com",
//       role: "admin",
//       status: "active",
//       createdAt: "2024-01-10",
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState<User | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "user",
//     status: "active",
//   });

//   const openAddModal = () => {
//     setEditingUser(null);
//     setFormData({ name: "", email: "", role: "user", status: "active" });
//     setShowModal(true);
//   };

//   const openEditModal = (user: User) => {
//     setEditingUser(user);
//     setFormData({
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       status: user.status,
//     });
//     setShowModal(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingUser) {
//       // Update user
//       setUsers(
//         users.map((user) =>
//           user.id === editingUser.id ? { ...user, ...formData } : user
//         )
//       );
//     } else {
//       // Add new user
//       const newUser: User = {
//         id: Date.now().toString(),
//         ...formData,
//         createdAt: new Date().toISOString().split("T")[0],
//       };
//       setUsers([...users, newUser]);
//     }
//     setShowModal(false);
//   };

//   const deleteUser = (id: string) => {
//     if (confirm("Are you sure you want to delete this user?")) {
//       setUsers(users.filter((user) => user.id !== id));
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
//         <button
//           onClick={openAddModal}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
//         >
//           Add New User
//         </button>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 User
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Created
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div className="ml-4">
//                       <div className="text-sm font-medium text-gray-900">
//                         {user.name}
//                       </div>
//                       <div className="text-sm text-gray-500">{user.email}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       user.role === "admin"
//                         ? "bg-purple-100 text-purple-800"
//                         : "bg-green-100 text-green-800"
//                     }`}
//                   >
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       user.status === "active"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {user.createdAt}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button
//                     onClick={() => openEditModal(user)}
//                     className="text-indigo-600 hover:text-indigo-900 mr-3"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteUser(user.id)}
//                     className="text-red-600 hover:text-red-900"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add/Edit User Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full p-6">
//             <h3 className="text-lg font-medium mb-4">
//               {editingUser ? "Edit User" : "Add New User"}
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Role
//                   </label>
//                   <select
//                     value={formData.role}
//                     onChange={(e) =>
//                       setFormData({ ...formData, role: e.target.value })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Status
//                   </label>
//                   <select
//                     value={formData.status}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         status: e.target.value as "active" | "inactive",
//                       })
//                     }
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md"
//                 >
//                   {editingUser ? "Update" : "Create"} User
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react'

const UserManagment = () => {
  return (
    <div>
      
    </div>
  )
}

export default UserManagment
