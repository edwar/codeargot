import Link from "next/link";
import { Check, Sparkle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { pricingData } from "./Pricing.data";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-purple-700/10 to-purple-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Choose your plan</h2>
          <p className="text-slate-200 text-xl max-w-2xl mx-auto">Start free, upgrade when you are ready to ace every interview.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-all duration-300 px-2 py-6 rounded-md border border-purple-400/30 text-purple-200 ${plan.popular ? "bg-purple-900/70" : "bg-purple-600/20"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-purple-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                    <Sparkle className="h-4 w-4"/>
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
                <p className="text-slate-200 mt-2 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0"/>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className={`w-full font-semibold text-white ${plan.popular ? "bg-indigo-500 hover:bg-indigo-600 shadow-md" : "bg-purple-600/30 hover:bg-purple-700/50 border border-purple-400/20"}`} asChild>
                  <Link href="/dashboard">{plan.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
