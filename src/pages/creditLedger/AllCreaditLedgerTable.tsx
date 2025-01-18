import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { CreditLedger } from '../../types/creditLedger';

const creditLedgerData: CreditLedger[] = [
  {
    total_credit: 1000,
    paidAmount: 500,
    remainingAmount: 500,
    lastPaymentDate: '2025-01-10T14:30:00Z',
    dueDate: '2025-02-10T14:30:00Z',
    userId: 1,
    orderId: 'ORD12345',
  },
  {
    total_credit: 1500,
    paidAmount: 700,
    remainingAmount: 800,
    lastPaymentDate: '2025-01-11T16:00:00Z',
    dueDate: '2025-02-11T16:00:00Z',
    userId: 2,
    orderId: 'ORD12346',
  },
  {
    total_credit: 2000,
    paidAmount: 1500,
    remainingAmount: 500,
    lastPaymentDate: '2025-01-09T10:00:00Z',
    dueDate: '2025-02-09T10:00:00Z',
    userId: 3,
    orderId: 'ORD12347',
  },
  {
    total_credit: 1200,
    paidAmount: 400,
    remainingAmount: 800,
    lastPaymentDate: '2025-01-12T11:00:00Z',
    dueDate: '2025-02-12T11:00:00Z',
    userId: 4,
    orderId: 'ORD12348',
  },
];

const AllCreditLedgerTable = () => {
  return (
    <>
      <Breadcrumb pageName="All Credit Ledger Table" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              All Credit Ledger
            </h4>
          </div>

          {/* Header Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <div className="flex items-center col-span-2">
              <p className="font-medium">Total Credit</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">Paid Amount</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">Remaining Amount</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">Last Payment Date</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">Due Date</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">User Id</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium">Order Id</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-medium">Actions</p>
            </div>
          </div>

          {/* Product Rows */}
          {creditLedgerData.map((creditLedger, key) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.total_credit}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.paidAmount}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.remainingAmount}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.lastPaymentDate}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.dueDate}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.userId}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {creditLedger.orderId}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-3">
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

export default AllCreditLedgerTable;
