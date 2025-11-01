import successPurchase from "../assets/success.svg";

const SuccessfulPurchase = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 text-center min-h-screen sm:min-h-0">
      <img
        src={successPurchase}
        alt="Successful Purchase"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-4"
      />
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-base-content mb-2">
        Purchase Successful 🥳!
      </h3>
      <p className="text-sm sm:text-base text-base-content/70 max-w-md">
        Thank you for your purchase. Your order has been confirmed.
      </p>
    </div>
  );
};

export default SuccessfulPurchase;
