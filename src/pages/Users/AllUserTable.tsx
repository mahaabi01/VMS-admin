import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const userData = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main Street, Cityville',
    createdAt: '2025-01-01T10:00:00Z',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+9876543210',
    address: '456 Elm Street, Townsville',
    createdAt: '2025-01-03T09:00:00Z',
  },
  {
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    phone: '+1122334455',
    address: '789 Oak Avenue, Villageton',
    createdAt: '2025-01-05T12:00:00Z',
  },
  {
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+6677889900',
    address: '101 Pine Lane, Hamletburg',
    createdAt: '2025-01-07T15:00:00Z',
  },
];

const AllUserTable = () => {
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
                <button
                  className="text-blue-500 hover:text-blue-700"
                  title="View"
                >
                  <i className="fas fa-eye">View</i>
                </button>
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
