import { Status } from "./status"

export interface User {
  id: string,
  email: string,
  username: string
}

export interface Product{
  id:string,
  name: string,
  description: string,
  price: number,
  stock: number,
  imageUrl: string,
  userId: string,
  category: string
}

export enum PaymentMethod{
  COD = 'cod',
  khalti = 'khalti'
}

export enum OrderStatus{
  Pending = 'pending',
  Delivered = 'delivered',
  Ontheway = 'ontheway',
  Cancel = 'cancelled',
  Preparation = 'preparation',
  All = 'all'
}

interface Payment {
  paymentMethod : PaymentMethod
}

export interface ItemDetails {
  productId: string,
  quantity: number
}

export interface OrderData{
  phoneNumber: string,
  shippingAddress: string,
  totalAmount: number,
  paymentDetails: Payment,
  items : ItemDetails[]
}

export interface InitialState{
  products : Product[],
  users : User[],
  orders : OrderData[],
  status : Status
}