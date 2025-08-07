import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const testimonials = [
    {
      name: "Sofia",
      text: "Rafaela made my first tattoo experience so comfortable and beautiful!",
      rating: 5,
    },
    {
      name: "Miguel",
      text: "Amazing attention to detail and such a warm personality.",
      rating: 5,
    },
    {
      name: "Ana",
      text: "The flash designs are absolutely gorgeous. Can't wait for my next piece!",
      rating: 5,
    },
  ];

  const portfolioSamples = [
    { id: 1, title: "Minimalist Rose", category: "Floral" },
    { id: 2, title: "Geometric Heart", category: "Geometric" },
    { id: 3, title: "Script Quote", category: "Typography" },
    { id: 4, title: "Fine Line Bird", category: "Animals" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Decorative flowers */}
            <div className="flex justify-center space-x-4 mb-8">
              <span className="text-4xl text-primary flower-decoration">✿</span>
              <span className="text-3xl text-foreground">✿</span>
              <span className="text-4xl text-primary flower-decoration">✿</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-handwritten text-foreground mb-6">
              upsettertattoo
            </h1>
            
            <p className="text-xl lg:text-2xl handwritten text-primary mb-8">
              Tattoo with love, art, and care — by Rafaela Castro in Lisbon
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Creating beautiful, minimalistic tattoos with a personal touch at @straypepperoni studio. 
              Each piece is crafted with care, combining modern design with handmade artistry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="btn-handwritten text-lg px-8 py-4">
                  Book a Session <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/flash-shop">
                <Button variant="outline" size="lg" className="grunge-border text-lg px-8 py-4">
                  Explore Flash Tattoos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-handwritten text-primary mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my latest tattoo creations, each telling a unique story
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioSamples.map((item) => (
              <Card key={item.id} className="gallery-item tape-effect">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-2" />
                      <h3 className="font-handwritten text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="grunge-border">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-handwritten text-primary">Meet Rafaela</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in the heart of Lisbon at @straypepperoni studio, I create tattoos that blend 
                modern minimalism with a personal, handmade touch. Every piece is approached with care, 
                attention to detail, and a deep respect for the art form.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My style combines clean lines, delicate details, and a grunge aesthetic that gives 
                each tattoo its own unique character. I believe tattooing is about creating a 
                connection and telling your story through art.
              </p>
              <Link to="/about">
                <Button className="btn-handwritten">
                  Learn More About Me <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center grunge-border">
                <div className="text-center">
                  <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="font-handwritten text-xl text-foreground">Rafaela Castro</p>
                  <p className="text-muted-foreground">Tattoo Artist</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-16 bg-gray-200 opacity-70 rotate-12 tape-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-handwritten text-primary mb-4">Client Love</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What my clients say about their tattoo experience
            </p>
          </div>
          
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-handwritten text-foreground">
              Ready for Your Next Tattoo?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create something beautiful together. Book a consultation and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-handwritten text-lg px-8 py-4">
                  Book Consultation <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/flash-shop">
                <Button variant="outline" size="lg" className="grunge-border text-lg px-8 py-4">
                  Browse Flash Designs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;