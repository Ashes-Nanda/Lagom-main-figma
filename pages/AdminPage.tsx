import { useState, useEffect } from 'react';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authToken = localStorage.getItem('admin_auth_token');
    if (authToken) {
      // In a real app, you'd validate this token with your backend
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth_token', 'authenticated');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth_token');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}