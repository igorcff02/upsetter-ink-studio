import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";

const FlashShop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Floral", "Geometric", "Typography", "Small", "Medium"];

  const flashDesigns = [
    {
      id: 1,
      title: "Delicate Rose",
      category: "Floral",
      size: "Small",
      price: 80,
      description: "Simple fine line rose with stem",
      popular: true,
    },
    {
      id: 2,
      title: "Geometric Heart",
      category: "Geometric",
      size: "Small",
      price: 70,
      description: "Modern geometric heart design",
      popular: false,
    },
    {
      id: 3,
      title: "\"Stay Wild\"",
      category: "Typography",
      size: "Medium",
      price: 120,
      description: "Handwritten script quote",
      popular: true,
    },
    {
      id: 4,
      title: "Tiny Sunflower",
      category: "Floral",
      size: "Small",
      price: 60,
      description: "Minimal sunflower design",
      popular: false,
    },
    {
      id: 5,
      title: "Triangle Trio",
      category: "Geometric",
      size: "Small",
      price: 75,
      description: "Three connected triangles",
      popular: false,
    },
    {
      id: 6,
      title: "\"Breathe\"",
      category: "Typography",
      size: "Small",
      price: 65,
      description: "Single word in elegant script",
      popular: true,
    },
    {
      id: 7,
      title: "Botanical Branch",
      category: "Floral",
      size: "Medium",
      price: 100,
      description: "Eucalyptus branch with leaves",
      popular: false,
    },
    {
      id: 8,
      title: "Dotwork Circle",
      category: "Geometric",
      size: "Small",
      price: 85,
      description: "Intricate dotwork pattern",
      popular: false,
    },
    {
      id: 9,
      title: "Wildflower Set",
      category: "Floral",
      size: "Medium",
      price: 110,
      description: "Three small wildflowers",
      popular: true,
    },
  ];

  const filteredDesigns = selectedCategory === "All" 
    ? flashDesigns 
    : flashDesigns.filter(design => 
        design.category === selectedCategory || design.size === selectedCategory
      );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-8">
            <span className="text-4xl text-primary flower-decoration">✿</span>
            <span className="text-3xl text-foreground">✿</span>
            <span className="text-4xl text-primary flower-decoration">✿</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-handwritten text-primary mb-6">Flash Shop</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready-made tattoo designs at affordable prices. Perfect for those who want beautiful art 
            with quicker booking times.
          </p>
          
          {/* Special Offer */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto mb-8 tape-effect">
            <p className="font-handwritten text-primary text-lg mb-2">Special Offer!</p>
            <p className="text-muted-foreground">
              Book 3 flash tattoos in one session and get 15% off the total price.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Filter className="h-5 w-5 text-primary self-center mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-handwritten" : "grunge-border"}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Flash Designs Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design, index) => (
              <Card key={design.id} className={`gallery-item ${index % 4 === 0 ? 'tape-effect' : ''} relative`}>
                {design.popular && (
                  <Badge className="absolute -top-2 -right-2 z-10 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="font-handwritten text-xl text-foreground px-4">{design.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{design.description}</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-4 space-y-4">
                  <div className="w-full space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {design.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {design.size}
                        </Badge>
                      </div>
                      <span className="font-handwritten text-2xl text-primary">€{design.price}</span>
                    </div>
                    
                    <Button className="w-full btn-handwritten">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Book This Design
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-card p-12 rounded-lg mb-20">
          <h2 className="text-4xl font-handwritten text-primary text-center mb-12">How Flash Tattoos Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">1</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Choose Design</h3>
              <p className="text-muted-foreground text-sm">
                Browse the flash collection and select your favorite pre-designed piece
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">2</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Book Session</h3>
              <p className="text-muted-foreground text-sm">
                Schedule your appointment - flash tattoos have shorter wait times!
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">3</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Get Tattooed</h3>
              <p className="text-muted-foreground text-sm">
                Come in for your session - most flash pieces take 1-2 hours
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-handwritten text-primary">Flash Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Flash tattoos are offered at fixed prices based on size and complexity. 
                This makes booking easier and more transparent - you know exactly what you'll pay.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium">Small designs (up to 3cm)</span>
                  <span className="font-handwritten text-lg text-primary">€60-€85</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium">Medium designs (3-7cm)</span>
                  <span className="font-handwritten text-lg text-primary">€100-€130</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium">Multi-piece sets</span>
                  <span className="font-handwritten text-lg text-primary">15% off</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                * Prices include consultation, design application, and aftercare instructions
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center grunge-border">
                <div className="text-center space-y-4">
                  <ShoppingCart className="h-20 w-20 text-primary mx-auto" />
                  <p className="font-handwritten text-2xl text-foreground">Flash Collection</p>
                  <p className="text-muted-foreground">Ready-made designs</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-16 bg-gray-200 opacity-70 -rotate-12 tape-effect"></div>
            </div>
          </div>
        </section>

        {/* Custom vs Flash */}
        <section className="bg-gradient-to-r from-background to-muted p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-handwritten text-primary text-center mb-8">Flash vs Custom Tattoos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-handwritten text-xl text-primary">Flash Tattoos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Fixed pricing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Shorter wait times</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>1-2 hour sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Pre-designed artwork</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-handwritten text-xl text-primary">Custom Tattoos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Personalized design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Consultation included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Variable session length</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Completely unique</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-handwritten text-primary mb-6">Ready to Get Inked?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose a flash design for quick booking or schedule a consultation for a custom piece. 
            Either way, let's create something beautiful together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-handwritten text-lg px-8 py-4">
              Book Flash Session <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="grunge-border text-lg px-8 py-4">
              Custom Consultation <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FlashShop;