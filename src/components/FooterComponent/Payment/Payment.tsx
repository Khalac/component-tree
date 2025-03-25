const Payment = () => {
  return (
    <div>
      <div>
        Payment
        {Array(2)
          .fill(0)
          .map(() => {
            return <div>Payment image</div>;
          })}
      </div>
    </div>
  );
};

export default Payment;
