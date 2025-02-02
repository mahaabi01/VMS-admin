import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Product } from '../../types/product';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProductTable = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/product/getAllProduct',
        );
        console.log(response.data.data, 'Data');
        setProductData(response.data.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

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
                    <img src={"http://localhost:3000/"+product.imageUrl} alt="Product" />
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
                {/* <button className="text-blue-500 hover:text-blue-700" title="View">
                  <i className="fas fa-eye">View</i>
                </button> */}
                <Link
                  to={`/SingleProduct/${product.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                >
                  View Product
                </Link>

                {/* <button
                  className="text-yellow-500 hover:text-yellow-700"
                  title="Update"
                >
                  <i className="fas fa-edit">Update</i>
                </button> */}

                <Link
                  to={`/product/update/${product.id}`}
                  className="bg-orange-500-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600"
                >
                  Update Product
                </Link>
                
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
