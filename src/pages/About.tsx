import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex justify-center space-x-4 mb-8">
            <span className="text-4xl text-primary flower-decoration">✿</span>
            <span className="text-3xl text-foreground">✿</span>
            <span className="text-4xl text-primary flower-decoration">✿</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-handwritten text-primary mb-6">About Rafaela</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The artist behind upsettertattoo, creating meaningful art with love and care in Lisbon
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Artist Photo & Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center grunge-border">
                <div className="text-center">
                  <Heart className="h-32 w-32 text-primary mx-auto mb-6" />
                  <p className="font-handwritten text-2xl text-foreground">Rafaela Castro</p>
                  <p className="text-muted-foreground text-lg">Tattoo Artist & Creative Soul</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-20 bg-gray-200 opacity-70 rotate-12 tape-effect"></div>
            </div>

            {/* Quick Facts */}
            <Card className="tape-effect">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>@straypepperoni studio, Lisbon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>5+ years of tattooing experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Specializing in minimalist & fine line work</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-handwritten text-primary mb-6">My Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey into tattooing began with a deep love for art and a desire to create 
                  meaningful connections through creativity. What started as sketching flowers and 
                  geometric patterns in the margins of notebooks evolved into a passion for 
                  permanent art that tells personal stories.
                </p>
                <p>
                  Based in the vibrant city of Lisbon, I work from the beautiful @straypepperoni 
                  studio, where every session feels like a collaboration between artist and client. 
                  I believe that getting a tattoo should be a comfortable, positive experience that 
                  honors both the art and the person wearing it.
                </p>
                <p>
                  My style blends modern minimalism with a handmade, slightly grunge aesthetic. 
                  I'm drawn to clean lines, delicate details, and designs that feel both timeless 
                  and personal. Whether it's a tiny flower behind your ear or a meaningful quote 
                  along your ribcage, each piece is approached with the same level of care and attention.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-handwritten text-primary mb-4">My Philosophy</h3>
              <div className="bg-card p-6 rounded-lg grunge-border">
                <p className="text-foreground italic">
                  "Tattooing is about more than creating beautiful art – it's about understanding 
                  someone's story, their vision, and translating that into something that will be 
                  part of them forever. Every line I draw carries intention, care, and respect for 
                  the trust my clients place in me."
                </p>
                <p className="font-handwritten text-primary mt-4 text-right">— Rafaela</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Info */}
        <section className="mb-20">
          <h2 className="text-4xl font-handwritten text-primary text-center mb-12">The Studio</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-handwritten text-primary">@straypepperoni</h3>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Lisbon, @straypepperoni is more than just a studio – 
                it's a creative sanctuary. The space is designed to be welcoming, clean, and 
                inspiring, with plenty of natural light and a relaxed atmosphere that puts 
                clients at ease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The studio follows all health and safety protocols, ensuring every session 
                is conducted in a sterile, professional environment. We believe that getting 
                a tattoo should feel special and safe.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Lisbon, Portugal</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8">
                  Exact address provided upon booking confirmation
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center grunge-border">
                <div className="text-center">
                  <Heart className="h-20 w-20 text-primary mx-auto mb-4" />
                  <p className="font-handwritten text-xl text-foreground">@straypepperoni</p>
                  <p className="text-muted-foreground">Lisbon Studio</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-16 bg-gray-200 opacity-70 -rotate-12 tape-effect"></div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-20 bg-card p-12 rounded-lg">
          <h2 className="text-4xl font-handwritten text-primary text-center mb-12">My Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-handwritten text-xl text-primary">Fine Line Work</h3>
              <p className="text-muted-foreground text-sm">
                Delicate, precise lines that create elegant and timeless designs
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✿</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Floral Designs</h3>
              <p className="text-muted-foreground text-sm">
                Botanical illustrations and flower motifs with a modern twist
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="font-handwritten text-xl text-primary">Script & Lettering</h3>
              <p className="text-muted-foreground text-sm">
                Beautiful typography and handwritten-style text pieces
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-handwritten text-primary">Ready to Work Together?</h2>
            <p className="text-muted-foreground">
              I'd love to hear about your tattoo ideas and help bring your vision to life. 
              Let's schedule a consultation to discuss your project.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-handwritten text-lg px-8 py-4">
                Book a Consultation <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;