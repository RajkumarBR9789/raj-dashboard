"use client";

import { useEffect, useState } from "react";
import { User } from "./types";
import { UserTable } from "./components/UserTable";
import { CreateUserDialog } from "./components/CreateUserDialog";
import { mockUsers } from "./mockData";
import { Crown } from "lucide-react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const handleCreateUser = async (userData: Omit<User, "id" | "createdAt">) => {
    try {
      const newUser: User = {
        id: `rk-${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        ...userData
      };
      setUsers([...users, newUser]);
      setError(null);
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Failed to create user. Please try again.");
    }
  };

  const handleEditUser = async (userData: User) => {
    try {
      setUsers(users.map((user) => (user.id === userData.id ? userData : user)));
      setError(null);
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user. Please try again.");
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      setUsers(users.filter((user) => user.id !== id));
      setError(null);
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-900">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h1 className="text-4xl font-bold text-white">Rajkumar's Dashboard</h1>
            </div>
            <CreateUserDialog onCreateUser={handleCreateUser} />
          </div>
          {error && (
            <div className="bg-red-800 border border-red-600 text-white px-4 py-3 rounded-lg relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
            <UserTable
              users={users}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}