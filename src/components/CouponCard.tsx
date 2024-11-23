interface CouponCardProps {
  image: string;
  productName: string;
  discount: number;
  expirationDate: string;
  onRedeem: () => void;
}

export const CouponCard = ({
  image,
  productName,
  discount,
  expirationDate,
  onRedeem
}: CouponCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{productName}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{discount}% OFF</span>
          <span className="text-sm text-gray-500">Expires: {expirationDate}</span>
        </div>
        <button
          onClick={onRedeem}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Get Coupon
        </button>
      </div>
    </div>
  );
};
