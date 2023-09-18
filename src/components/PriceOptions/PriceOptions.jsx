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
            "Locker room access",
            "Discounted personal training sessions",
            "Monthly fitness assessment",
            "24/7 access"
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
            "Nutritional consultation",
            "Towel service",
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
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;