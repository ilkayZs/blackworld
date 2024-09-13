import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      features: ["1 user", "10 projects", "5GB storage", "Basic support"],
      isFeatured: false
    },
    {
      name: "Pro",
      price: "$29",
      features: ["5 users", "50 projects", "100GB storage", "Priority support", "Advanced analytics"],
      isFeatured: true
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited users", "Unlimited projects", "1TB storage", "24/7 support", "Custom solutions"],
      isFeatured: false
    }
  ]

  return (
    <section className="py-16 bg-neutral-950 dark:bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-black text-white">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg p-8 ${
                plan.isFeatured 
                  ? 'bg-black border border-neutral-700 text-white shadow-lg transform scale-105' 
                  : 'bg-gray-200 text-black border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.isFeatured 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}