import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Product } from '../../types/product';

const productData: Product[] = [
  {
    name: 'Apple Watch Series 7',
    description: 'Smartwatch with advanced features and health monitoring.',
    price: 299,
    category: 'Electronics',
    stock: 150,
    imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Apple+Watch',
    createdAt: '2025-01-01T10:00:00Z',
    updatedAt: '2025-01-10T14:30:00Z',
  },
  {
    name: 'Macbook Pro M1',
    description: 'Powerful laptop with Apple M1 chip and sleek design.',
    price: 1299,
    category: 'Electronics',
    stock: 50,
    imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Macbook+Pro',
    createdAt: '2025-01-03T09:00:00Z',
    updatedAt: '2025-01-11T16:00:00Z',
  },
  {
    name: 'Dell Inspiron 15',
    description:
      'Affordable laptop with reliable performance for everyday use.',
    price: 750,
    category: 'Electronics',
    stock: 80,
    imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Dell+Inspiron',
    createdAt: '2025-01-02T12:00:00Z',
    updatedAt: '2025-01-09T10:00:00Z',
  },
  {
    name: 'HP Probook 450',
    description: 'Professional-grade laptop for work and productivity.',
    price: 950,
    category: 'Electronics',
    stock: 100,
    imageUrl: 'https://dummyimage.com/300x300/000/fff&text=HP+Probook',
    createdAt: '2025-01-05T15:00:00Z',
    updatedAt: '2025-01-12T11:00:00Z',
  },
];
const AllProductTable = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              All Products
            </h4>
          </div>

          {/* Header Row */}
          <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Product Name</p>
            </div>
            
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Price</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Category</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Stock</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Created At</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Updated At</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Actions</p>
            </div>
          </div>

          {/* Product Rows */}
          {productData.map((product, key) => (
            <div
              className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <img src={product.imageUrl} alt="Product" />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    {product.name}
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.price}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.category}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.stock}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.createdAt}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.updatedAt}
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


export default AllProductTable;
