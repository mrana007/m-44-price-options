import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Unlimited use of cardio equipment",
            "Free weights and resistance machines",
            "Locker room access"
          ],
          "price": 30.00
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "All Basic Membership features",
            "Access to group fitness classes",
            "Sauna and steam room access",
            "Access to sports courts (tennis, basketball)",
            "Guest privileges (3 times/month)"
          ],
          "price": 50.00
        },
        {
          "id": 3,
          "name": "Platinum Membership",
          "features": [
            "All Gold Membership features",
            "Unlimited guest passes",
            "Personalized fitness plan",
            "Exclusive access to VIP events",
            "Complimentary massage sessions",
            "Access to exclusive lounges",
            "Discounted spa treatments"
          ],
          "price": 80.00
        }
      ]
            
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-8">Best Prices in the town</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;