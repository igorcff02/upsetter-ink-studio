import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Filter } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Floral", "Geometric", "Typography", "Animals", "Abstract"];

  const portfolioItems = [
    { id: 1, title: "Minimalist Rose", category: "Floral", description: "Delicate fine line rose with subtle shading" },
    { id: 2, title: "Geometric Heart", category: "Geometric", description: "Modern geometric interpretation of a heart" },
    { id: 3, title: "Script Quote", category: "Typography", description: "Handwritten inspirational quote" },
    { id: 4, title: "Fine Line Bird", category: "Animals", description: "Small sparrow in minimalist style" },
    { id: 5, title: "Botanical Branch", category: "Floral", description: "Eucalyptus branch with leaves" },
    { id: 6, title: "Triangle Composition", category: "Geometric", description: "Abstract triangular design" },
    { id: 7, title: "Handwritten Name", category: "Typography", description: "Custom lettering design" },
    { id: 8, title: "Small Cat Silhouette", category: "Animals", description: "Minimal cat outline" },
    { id: 9, title: "Wildflower Bunch", category: "Floral", description: "Collection of small wildflowers" },
    { id: 10, title: "Dotwork Pattern", category: "Abstract", description: "Intricate dotwork mandala" },
    { id: 11, title: "Mountain Range", category: "Abstract", description: "Simple mountain landscape" },
    { id: 12, title: "Ivy Vine", category: "Floral", description: "Delicate ivy trailing design" },
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
          <h1 className="text-5xl lg:text-6xl font-handwritten text-primary mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of my recent work, showcasing the range of styles and artistic approaches 
            I bring to each unique piece
          </p>
          
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

        {/* Portfolio Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className={`gallery-item ${index % 3 === 0 ? 'tape-effect' : ''}`}>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center relative group">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-handwritten text-lg text-foreground px-4">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <h4 className="font-handwritten text-primary text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card p-12 rounded-lg mb-20">
          <h2 className="text-4xl font-handwritten text-primary text-center mb-12">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">1</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                We discuss your ideas, placement, size, and style preferences in detail
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">2</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Design</h3>
              <p className="text-muted-foreground text-sm">
                I create a custom design based on our conversation and your vision
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-handwritten text-2xl text-primary">3</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Tattoo Session</h3>
              <p className="text-muted-foreground text-sm">
                The magic happens in a comfortable, professional environment
              </p>
            </div>
          </div>
        </section>

        {/* Style Information */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-handwritten text-primary">My Style</h2>
              <p className="text-muted-foreground leading-relaxed">
                My work is characterized by clean, precise lines and a minimalist approach that 
                emphasizes elegance and timelessness. I'm particularly drawn to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Fine line work:</strong> Delicate, precise linework that ages beautifully</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Botanical elements:</strong> Flowers, leaves, and natural forms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Geometric shapes:</strong> Clean, modern geometric compositions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Custom lettering:</strong> Handwritten-style text and quotes</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center grunge-border">
                <div className="text-center">
                  <div className="space-y-4">
                    <Heart className="h-20 w-20 text-primary mx-auto" />
                    <span className="text-6xl text-primary">✿</span>
                    <div className="text-2xl font-handwritten text-foreground">Style Elements</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-20 bg-gray-200 opacity-70 rotate-12 tape-effect"></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-background to-muted p-12 rounded-lg">
          <h2 className="text-3xl font-handwritten text-primary mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a specific design in mind or need help developing an idea, 
            I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-handwritten text-lg px-8 py-4">
              Book Consultation <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="grunge-border text-lg px-8 py-4">
              Browse Flash Designs
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;