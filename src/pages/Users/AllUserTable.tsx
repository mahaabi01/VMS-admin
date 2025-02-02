import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import { User } from '../../types/data';
import { Link } from 'react-router-dom';

const AllUserTable = () => {
  const [userData, setUserData] = useState<User[]>([]); // Corrected type

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllUsers');
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers(); // Call function inside useEffect
  }, []);

  return (
    <>
      <Breadcrumb pageName="User Table" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              All Users
            </h4>
          </div>

          {/* Header Row */}
          <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Name</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Email</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Phone</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Address</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Created At</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Actions</p>
            </div>
          </div>

          {/* User Rows */}
          {userData.map((user, key) => (
            <div
              className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.name}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.email}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.phone}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.address}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.createdAt}
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-center space-x-3">
                {/* <button
                  className="text-blue-500 hover:text-blue-700"
                  title="View"
                >
                  <i className="fas fa-eye">View</i>
                </button> */}
                <Link
                  to={`/user/${user.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                >
                  View Profile
                </Link>

                <button
                  className="text-yellow-500 hover:text-yellow-700"
                  title="Update"
                >
                  <i className="fas fa-edit">Update</i>
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <i className="fas fa-trash">Delete</i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUserTable;
