import { ChangeEvent, FormEvent, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Product } from '../../types/data';
import { addProduct } from '../../store/dataSlice';
import { useAppDispatch } from '../../store/hooks';

const AddProducts = () => {
  const categories = {
    Electronics: 'electronics',
    Clothing: 'clothing',
    Grocery: 'grocery',
    Furniture: 'furniture',
    Beauty: 'beauty',
    Toys: 'toys',
    Stationery: 'stationery',
    Sports: 'sports',
    HomeAppliances: 'homeAppliances',
  };

  const dispatch = useAppDispatch();

  const [data, setData] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: '',
    userId: '8b4ab554-e50c-447e-b14c-5f376a0ca4bf',
    category: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "imageUrl" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Entered Data: ", data)
    dispatch(addProduct(data));
  };

  return (
    <>
      <Breadcrumb pageName="Add Products" />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Add Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Name */}
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="E.g., Apple iPhone 13"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  {Object.entries(categories).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stock Quantity */}
              <div>
                <label
                  htmlFor="productTotalStockQty"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="E.g., 50"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="E.g., 500"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  name="imageUrl"
                  id="imageUrl"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  onChange={handleChange}
                  accept="image/*"
                />
              </div>

              {/* Product Details */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Details
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter detailed description"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-600 text-white rounded-md shadow-md hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
