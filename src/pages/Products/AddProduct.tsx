import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectCategory from '../../components/Forms/SelectGroup/SelectCategory';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { Product } from '../../types/product';
import { addProduct } from '../../store/dataSlice';

const AddProduct = () => {
  const navigate = useNavigate();

  //form submission handler
  const dispatch = useAppDispatch();
  const handleAddProduct = async (data: Product) => {
    console.log("Data from data: ", data)
    dispatch(addProduct(data));
  };

  return (
    <div>
      <Breadcrumb pageName="Add Products" />
      <div className="flex flex-col gap-9">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Product Details
            </h3>
          </div>

          <form
            onSubmit={handleAddProduct}
            className="flex flex-col gap-5.5 p-6.5"
          >
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Product Description
              </label>
              <input
                type="text"
                placeholder="Product Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Product Price
              </label>
              <input
                type="text"
                placeholder="Product Price"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <SelectCategory />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Total Stock
              </label>
              <input
                type="number"
                placeholder="Product Stock"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Product Image
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add Product
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
