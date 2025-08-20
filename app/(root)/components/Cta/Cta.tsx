import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import { ctaData } from "./Cta.data";

export function Cta() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/5" >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Ace <br /> Your Next Interview?
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">Join thousands of developers who ve transformed their interview skills and landed their dream jobs. Start practicing today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group cursor-pointer" variant="secondary">
              <Sparkle className="group-hover:rotate-12 transition-transform" />
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
          {ctaData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{item.title}</div>
              <div className="text-slate-200">{item.description}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
