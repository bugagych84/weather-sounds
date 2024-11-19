interface TotalPriceProps {
  price: number;
  discount: number;
  isInstallment?: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPriceProps) => {
  const discountedPrice = price - price * (discount / 100);

  return isInstallment ? discountedPrice / months : discountedPrice;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);
