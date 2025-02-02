import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [singleProduct, setSingleProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/product/getSingleProduct/${id}`,
        );
        setSingleProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // ✅ Added missing closing bracket for useEffect

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {singleProduct && (
                  <img
                    className="w-full h-full object-cover"
                    src={
                      'http://localhost:3000/' + singleProduct.imageUrl ||
                      'https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'
                    }
                    alt={singleProduct.name || 'Product Image'}
                  />
                )}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              {singleProduct ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {singleProduct.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {singleProduct.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ${singleProduct.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {singleProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Loading product details...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
