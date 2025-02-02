import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Product } from '../../types/data';
import { updateProduct, singleProduct } from '../../store/dataSlice';
import { useAppDispatch } from '../../store/hooks';

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(singleProduct(id)).then((response: any) => {
        setData(response.payload);
      });
    }
  }, [dispatch, id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevData) =>
      prevData ? { ...prevData, [name]: value } : prevData
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data && id) {
      dispatch(updateProduct( id,  data ));
      navigate('/products');
    }
  };

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Breadcrumb pageName="Update Product" />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Update Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.category}
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

              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.stock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.imageUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Details
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                  value={data.description}
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
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
