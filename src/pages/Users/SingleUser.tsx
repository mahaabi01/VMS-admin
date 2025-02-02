import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

const UserCard = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get<User>(
          `http://localhost:3000/getUser/${id}`,
        );
        setUser(data.data);
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 shadow-lg rounded-2xl p-6 max-w-sm mx-auto border border-gray-300">
      <div className="flex flex-col items-center">
        <img
          className="w-28 h-28 rounded-full border-4 border-white shadow-md"
          src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
          alt="Profile"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          User ID: {user.id}
        </h2>
        <p className="text-gray-600 mt-1">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>
        <p className="text-gray-600">{user.address}</p>
      </div>
      <div className="bg-white shadow-inner rounded-lg p-4 mt-4 w-full text-center">
        <p className="text-gray-500 text-sm">
          Created At: {new Date(user.createdAt).toLocaleString()}
        </p>
        <p className="text-gray-500 text-sm">
          Updated At: {new Date(user.updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
