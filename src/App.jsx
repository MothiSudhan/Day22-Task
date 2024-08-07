import Card from "./Components/Card";
import "./App.css";

const App = () => {
  const cardPricing = [
    {
      title: "FREE",
      price: "$0/month",
      features: [
        "included:Single User",
        "included:50GB Storage",
        "included:Unlimited Public Projects",
        "included:Community Access",
        "excluded:Unlimited Private Projects",
        "excluded:Dedicated Phone Support",
        "excluded:Free Subdomain",
        "excluded:Monthly Status Reports",
      ],
    },
    {
      title: "PLUS",
      price: "$9/month",
      features: [
        "included:Single User",
        "included:50GB Storage",
        "included:Unlimited Public Projects",
        "included:Community Access",
        "included:Unlimited Private Projects",
        "included:Dedicated Phone Support",
        "included:Free Subdomain",
        "excluded:Monthly Status Reports",
      ],
    },
    {
      title: "PRO",
      price: "$49/month",
      features: [
        "included:Single User",
        "included:50GB Storage",
        "included:Unlimited Public Projects",
        "included:Community Access",
        "included:Unlimited Private Projects",
        "included:Dedicated Phone Support",
        "included:Free Subdomain",
        "included:Monthly Status Reports",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardPricing.map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
