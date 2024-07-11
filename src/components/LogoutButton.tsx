'use client'
import { useRouter } from 'next/navigation';
import axios from '../utils/axios';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout');
      router.push('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
