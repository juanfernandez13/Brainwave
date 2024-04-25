import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((plan, index) => (
        <div
          key={index}
          className="w-[19rem] max-lg:w-full h-full bg-n-8 border border-n-6 rounded-[2rem] px-6 lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          id={plan.id}
        >
          <h4 className="h4 mb-4">{plan.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{plan.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {plan.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{plan.price}</div>
              </>
            )}
          </div>
          <Button
            className={"w-full mb-6"}
            href={plan.price ? "/pricing" : ""}
            white={!!plan.price}
          >
            {plan.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {plan.features.map((item,index) => (
              <li key={index} className="flex items-start py-5 border-t border-n-6">
                <img src={check} width={24} height={24} alt="Check"/>
                <p className="body-6 ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
