import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star } from "lucide-react";

const Community = () => {
  const testimonials = [
    { name: "Sofia M.", text: "Rafaela made my first tattoo experience amazing!", rating: 5 },
    { name: "Miguel R.", text: "Beautiful work and such a caring artist.", rating: 5 },
    { name: "Ana L.", text: "Love my flash tattoo! Perfect execution.", rating: 5 },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-handwritten text-primary mb-6">Community</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stories, tips, and love from the upsettertattoo family
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-handwritten text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="text-center mt-16">
          <Button className="btn-handwritten">
            <MessageCircle className="mr-2 h-5 w-5" />
            Share Your Story
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Community;