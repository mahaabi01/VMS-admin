import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import ECommerce from './pages/Dashboard/ECommerce';
import DefaultLayout from './layout/DefaultLayout';
import { Provider } from 'react-redux';
import store from './store/store';
import AddProduct from './pages/Products/AddProduct';
import AllProductTable from './pages/Products/AllProductTable';
import AllUserTable from './pages/Users/AllUserTable';
import AllCreditLedgerTable from './pages/creditLedger/AllCreaditLedgerTable';
import AddProducts from './pages/Product/AddProduct';
import UserCard from './pages/Users/SingleUser';
import SingleProduct from './pages/Product/SingleProduct';
import UpdateProduct from './pages/Product/UpdateProduct';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Provider store={store}>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/adminDashboard"
          index
          element={
            <>
              <PageTitle title="VMS Admin Dashboard" />
              <DefaultLayout>
                <ECommerce />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/product/addProduct"
          element={
            <>
              <PageTitle title="Add Products" />
              <DefaultLayout>
                <AddProducts />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/product/allProducts"
          element={
            <>
              <DefaultLayout>
                <PageTitle title="All Product Dashboard" />
                <AllProductTable />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/SingleProduct/:id"
          element={
            <>
              <DefaultLayout>
                <PageTitle title="Single Product Card" />
                <SingleProduct />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/product/update/:id"
          element={
            <>
              <DefaultLayout>
                <PageTitle title="Update Product" />
                <UpdateProduct />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/user/allUsers"
          element={
            <>
              <DefaultLayout>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <AllUserTable />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/user/:id"
          element={
            <>
              <DefaultLayout>
                <PageTitle title="Single User Card" />
                <UserCard />
              </DefaultLayout>
            </>
          }
        />

        <Route
          path="/creditLedger/allCreditLedgers"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllCreditLedgerTable />
            </>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
