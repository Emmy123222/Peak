import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Monthly",
    price: "₦15,000",
    period: "/month",
    features: [
      {
        text: "Access to all video solutions",
        details: "for WAEC, JAMB, Common Entrance, BECE, and more",
      },
      {
        text: "Downloadable PDF past questions and detailed solutions",
        details: "(updated yearly)",
      },
      {
        text: "Full access to subject-based learning communities",
        details: "(ask questions, get tips, join discussions)",
      },
      {
        text: "Progress tracking dashboard",
        details: "for parents/students",
      },
      {
        text: "Cancel anytime",
        details: "– no long-term commitment",
      },
    ],
    description:
      "Perfect for short-term prep, quick catch-up, or trying out the platform.",
    footer:
      "Best for: Trial users, monthly revision goals, or families who want flexibility.",
    color: "white",
    badgeText: "",
  },
  {
    title: "Termly (4months)",
    price: "₦40,000",
    period: "/term",
    features: [
      {
        text: "Everything in the Monthly Plan, plus:",
        details: "",
      },
      {
        text: "Discounted rate",
        details: "(save ₦20,000 compared to paying monthly)",
      },
      {
        text: "Priority tutor access",
        details: "and early-bird slots for limited group sessions",
      },
      {
        text: "Customised monthly learning goals and reminders",
        details: "",
      },
      {
        text: "Exclusive term-based revision planner",
        details: "per subject",
      },
    ],
    description: "Ideal for consistent learners throughout a school term.",
    footer:
      "Best for: Students preparing for exams within 3-4 months or following a termly school calendar.",
    color: "bg-purple-50",
    badgeText: "Termly (4months)",
  },
  {
    title: "Yearly",
    price: "₦100,000",
    period: "/year",
    features: [
      {
        text: "Everything in the Termly Plan, plus:",
        details: "",
      },
      {
        text: "Save ₦80,000",
        details: "compared to monthly payments",
      },
      {
        text: "Access to premium video explanations",
        details: "and masterclass recordings",
      },
      {
        text: "Quarterly progress report cards",
        details: "sent to your email",
      },
      {
        text: "One free consultation session",
        details: "with a certified tutor every term",
      },
      {
        text: "Priority access to new features and subjects",
        details: "as they're added",
      },
    ],
    description:
      "Our best value plan — for families ready to commit to long-term excellence.",
    footer:
      "Best for: Dedicated students preparing for multiple exams across the year (e.g., BECE + WAEC or JAMB + Post-UTME).",
    color: "white",
    badgeText: "",
  },
];

const Pricing = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Flexible Plans for Every Family
        </h1>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Choose a plan that fits your child's learning journey — and your
          budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border border-gray-200 ${plan.color}`}
            >
              <div className="p-8">
                {plan.badgeText && (
                  <div className="mb-4">
                    <span className="bg-purple-700 text-white text-sm py-1 px-3 rounded-full">
                      {plan.badgeText}
                    </span>
                  </div>
                )}

                {!plan.badgeText && (
                  <div className="mb-4">
                    <span className="bg-purple-700 text-white text-sm py-1 px-3 rounded-full">
                      {plan.title}
                    </span>
                  </div>
                )}

                <div className="mt-4 mb-6">
                  <h3 className="text-3xl font-bold">{plan.price}</h3>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                <p className="text-sm text-gray-700 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="text-purple-600 mt-1 shrink-0"
                      />
                      <div>
                        <span className="text-gray-800">{feature.text}</span>
                        {feature.details && (
                          <p className="text-sm text-gray-500">
                            {feature.details}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-500 mb-6">{plan.footer}</div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
