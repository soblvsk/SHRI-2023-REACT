import { Metadata } from 'next';
import { CartPage } from '@/pagesComponents/Cart/component';

export const metadata: Metadata = {
  title: 'Корзина',
};

export default function Cart() {
  return <CartPage />;
}
